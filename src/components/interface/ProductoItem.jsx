import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import PedidoContext from '../../context/pedidos/pedidosContext';
import { Avatar } from '@rneui/themed';

const ProductoItem = ({ producto }) => {
    const { imagen, nombre, precio, _id } = producto;
    const { url } = imagen;


    const { seleccionarPlatillo } = useContext(PedidoContext);
    const navigation = useNavigation();

    return (
        <View style={styles.listado}>
            <View style={styles.listadoItem} key={_id}>
                
                <Avatar
                    style={styles.item}
                    source={{ uri: url }}
                    onPress={_ => {
                        const { disponible, ...platillo2 } = producto;
                        seleccionarPlatillo(platillo2);
                        navigation.navigate('DetallePlatillo')
                    }}
                />
                <Text style={styles.fuenteNombre}> {nombre} </Text>
                <Text style={styles.fuentePrecio}>S./ {precio} </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 200,
        marginVertical: 5,
        borderRadius: 20,
    },
    listado: {
        flexDirection: 'row',
    },
    listadoItem: {
        flexBasis: '49%',
        marginHorizontal: 2,
    },
    fuenteNombre: {
        fontFamily: 'Kameron-Medium',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#212121'
    },
    fuentePrecio: {
        fontFamily: 'Kameron-Regular',
        fontSize: 18,
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#37474f'
    }
});

export default ProductoItem;
