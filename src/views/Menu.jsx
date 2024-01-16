import React, { useEffect, useContext, useState } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    ActivityIndicator,
    FlatList
} from 'react-native';

import { SearchBar, Button, Text } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

//Estilos
import globalStyles from '../styles/global';

//Context
import MongoDBContext from '../context/database/mongoDBContext';
import ProductoItem from '../components/interface/ProductoItem';

const Menu = () => {

    const { menu, obtenerProductos, isLoading } = useContext(MongoDBContext);
    const { categoria, obtenerCategorias } = useContext(MongoDBContext);


    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState('');
    const [miCategoria, setMiCategoria] = useState('')


    useEffect(() => {
        obtenerProductos();
        obtenerCategorias();
    }, []);

    const renderizarListaVacia = _ => (
        <View>
            <Text style={styles.mensajeError}>
                La información no está diponible
            </Text>
        </View>
    );

    return (
        <>
            <View style={globalStyles.contenedor}>

                <SearchBar
                    platform="android"
                    containerStyle={{}}
                    inputContainerStyle={{}}
                    inputStyle={{}}
                    leftIconContainerStyle={{}}
                    rightIconContainerStyle={{}}
                    loadingProps={{}}
                    onChangeText={text => setSearch(text)}
                    onClearText={() => console.log(onClearText())}
                    placeholder="busca aquí..."
                    placeholderTextColor="#888"
                    cancelButtonTitle="Cancel"
                    cancelButtonProps={{}}
                    value={search}
                />

                <View style={styles.contenedorBotones}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginVertical: 2 }}>

                        <Button
                            size="md"
                            radius={'md'}
                            style={{ marginHorizontal: 2, marginVertical: 4 }}
                            ViewComponent={LinearGradient} // Don't forget this!
                            linearGradientProps={{
                                colors: ["#FF9800", "#F44336"],
                                start: { x: 0, y: 0.5 },
                                end: { x: 1, y: 0.5 },
                            }}
                            onPress={_ => { setSearch(''); setMiCategoria('') }}>
                            Todo
                        </Button>
                        {
                            categoria.map(({ _id, nombre }) =>
                            (
                                <Button
                                    key={_id}
                                    size="md"
                                    radius={'md'}
                                    style={{ marginHorizontal: 2, marginVertical: 4 }}
                                    ViewComponent={LinearGradient} // Don't forget this!
                                    linearGradientProps={{
                                        colors: ["#FF9800", "#F44336"],
                                        start: { x: 0, y: 0.5 },
                                        end: { x: 1, y: 0.5 },
                                    }}
                                    onPress={_ => { setSearch(''); setMiCategoria(nombre) }}
                                >
                                    {nombre}
                                </Button>
                            )
                            )
                        }
                    </ScrollView>
                </View>

                <View>
                    {isLoading ? (
                        <ActivityIndicator
                            size={'large'}
                            color={'#00ff00'}
                            animating
                        />
                    ) : (
                        <FlatList
                            style={styles.list}
                            data={
                                search.length < 1 ?
                                    menu.filter(platillo =>
                                        platillo.categoria.toLowerCase().includes(miCategoria.toLocaleLowerCase())
                                    )
                                    : menu.filter(platillo =>
                                        platillo.nombre.toLowerCase().includes(search.toLocaleLowerCase()) ||
                                        platillo.descripcion.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                                    )}
                            ListEmptyComponent={renderizarListaVacia}
                            initialNumToRender={7}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <ProductoItem producto={item} />}
                            refreshing={refreshing}
                            onRefresh={async () => {
                                setRefreshing(true);
                                await obtenerProductos();
                                setRefreshing(false);
                            }}
                        />
                    )}
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    categoriaTitulo: {
        backgroundColor: '#1e90ff',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingVertical: 10,
        marginBottom: 5,
        textTransform: 'uppercase',
        fontSize: 25
    },
    contenedorBotones: {
        flexDirection: 'row'
    },
    mensajeError: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 50,
        color: '#e53935',
        textAlign: 'center'
    },
    list: {
        marginBottom: 120
    }
});


export default Menu;

