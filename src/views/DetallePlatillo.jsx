import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { Button, Text, Card, Input } from '@rneui/themed'
import globalStyles from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

//Context
import PedidoContext from '../context/pedidos/pedidosContext';


const DetallePlatillo = (_) => {

    const { platillo, guardarPedido } = useContext(PedidoContext),
        { nombre, imagen, descripcion, precio } = platillo,
        { url } = imagen;

    const [cantidad, guardarCantidad] = useState(1),
        [total, guardarTotal] = useState(0),
        navigation = useNavigation();

    const calcularTotal = _ => {
        let totalPagar = precio * cantidad;
        guardarTotal(totalPagar);
    }

    const disminuir = _ => {
        if (cantidad > 1) {
            let nuevaCantidad = parseInt(cantidad) - 1;
            guardarCantidad(nuevaCantidad);
        }
    }


    const incrementar = _ => {
        let nuevaCantidad = parseInt(cantidad) + 1;
        guardarCantidad(nuevaCantidad);
    }

    const confirmarOrden = () => {
        Alert.alert('¿Nos Confirmas Tu Pedido?',
            'Un Pedido Confirmado No se puede Remover', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Confirmar',
                onPress: _ => {
                    const pedido = { ...platillo, cantidad, total };

                    guardarPedido(pedido);

                    navigation.navigate('ResumenPedido');
                },
            }
        ])
    }

    useEffect(() => {
        calcularTotal();
    }, [cantidad]);


    return (
        <>
            <ScrollView>
                <View style={globalStyles.contenedor}>
                    <View style={globalStyles.contenido}>
                        <Card.Title h3>{nombre}</Card.Title>
                        <Text style={globalStyles.textoPrecio}>
                            S/. {precio}
                        </Text>
                        <Card.Divider />
                        <View style={styles.postionCard}>
                            <Image
                                style={{ width: "100%", height: 200 }}
                                resizeMode="contain"
                                source={{ uri: url }}
                            />
                            <Text style={globalStyles.textoDescripcion}>
                                &#x1f963; {descripcion}
                            </Text>



                        </View>

                        <View style={styles.formulario}>

                            <Button title="&#x2796;" type="outline"
                                onPress={_ => disminuir()}
                            />
                            <Input
                                containerStyle={{ width: 150 }}
                                value={cantidad.toString()}
                                textAlign='center'
                                keyboardType='numeric'
                                onChangeText={cantidad => guardarCantidad(cantidad)}
                            />
                            <Button title="&#x2795;" type="outline"
                                onPress={_ => incrementar()}
                            />

                        </View>
                        <Text style={styles.textoSubTotal}>Total: S/ {total}</Text>

                        <Button
                            ViewComponent={LinearGradient}
                            linearGradientProps={globalStyles.botonPedir}
                            onPress={_ => confirmarOrden()}
                        >
                            <Text style={globalStyles.botonTexto}>
                                Pedir
                            </Text>
                            &#x1f4b0;
                        </Button>
                    </View>

                </View>

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    postionCard: {
        position: 'relative',
        alignItems: 'center'
    },
    formulario: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
    },
    textoSubTotal: {
        textAlign: 'center',
        fontSize: 25,
        color: '#1e90ff',
        fontWeight: 'bold'
    }
});

export default DetallePlatillo;

