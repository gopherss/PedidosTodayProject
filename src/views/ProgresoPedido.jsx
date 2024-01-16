import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PedidoContext from '../context/pedidos/pedidosContext';
import axios from 'axios'
import globalStyles from '../styles/global';
import { ListItem, Image, Text } from '@rneui/themed'
import CountDown from 'react-countdown';

const ProgresoPedido = () => {

    const { idpedido } = useContext(PedidoContext);
    const [tiempo, guardarTiempo] = useState(0);


    useEffect(() => {
        const obtenerMiPedido = async () => {
            const URL = `https://restaurante.fly.dev/obtener-pedido/${idpedido}`;
            const pedido = await axios.get(URL);
            guardarTiempo(pedido.data.tiempoentrega);
        }
        obtenerMiPedido();
    }, []);


    const numeros = {
        numeroYape: '986532741',
        numeroPlin: '951753645',
        numeroBCP: '28067352525891',
        numeroBBVA: '58731481948373',
        numeroInterBank: '74597092477303'
    };

    const renderer = ({ minutes, seconds }) => {
        return (
            <Text> {minutes}:{seconds} </Text>
        )
    }

    return (
        <View style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, { marginTop: 50 }]}>
                {
                    tiempo === 0 && (
                        <>
                            <Text h4 style={styles.mensaje}>
                                Hemos recibido tu pedido
                                Estos son nuestros números.
                            </Text>
                        </>
                    )
                }
                {
                    tiempo > 0 && (
                        <>
                            <Text h4 style={styles.mensaje}>
                            Su Pedio estará listo en:
                            </Text>
                            <Text h1 style={styles.mensaje}>
                                <CountDown
                                    date={Date.now() + tiempo * 60000}
                                    renderer={renderer}
                                />
                            </Text>
                        </>
                    )
                } 
                <ListItem>
                    <Image
                        source={{ uri: 'https://seeklogo.com/images/Y/yape-logo-3E473EE7E5-seeklogo.com.png' }}
                        containerStyle={{ width: 50, height: 50 }} />
                    <ListItem.Title
                        style={styles.cuentasBancarias}
                        >
                        {numeros['numeroYape']}
                    </ListItem.Title>
                </ListItem>
                <ListItem>
                    <Image
                        source={{ uri: 'https://seeklogo.com/images/P/plin-logo-967A4AF583-seeklogo.com.png' }}
                        containerStyle={{ width: 50, height: 50 }} />
                    <ListItem.Title
                        style={styles.cuentasBancarias}
                        >
                        {numeros['numeroPlin']}
                    </ListItem.Title>
                </ListItem>
                <ListItem>
                    <Image
                        source={{ uri: 'https://yt3.googleusercontent.com/KlFkIERbQ9w5R-6mg3OgX_ifWmesDciCaZ7n74dSr1lwJM_C0nDS_jre3AIoiaop4d3rss8sjg=s900-c-k-c0x00ffffff-no-rj' }}
                        containerStyle={{ width: 50, height: 50 }} />
                    <ListItem.Title
                        style={styles.cuentasBancarias}
                        >
                        {numeros['numeroBCP']}
                    </ListItem.Title>
                </ListItem>
                <ListItem>
                    <Image
                        source={{ uri: 'https://play-lh.googleusercontent.com/vjYx0jloYA0BSr6fHPhvhhIbgieH0jmOV3fv_evGkj9bxxjITNO3Yhfux77bq2_HvBIF' }}
                        containerStyle={{ width: 50, height: 50 }} />
                    <ListItem.Title
                        style={styles.cuentasBancarias}
                        >
                        {numeros['numeroInterBank']}
                    </ListItem.Title>
                </ListItem>
                <ListItem>
                    <Image
                        source={{ uri: 'https://play-lh.googleusercontent.com/ZsRXxnAaNfWkGh0znnApV1d2BnTysMJVgZSAG5i4xX5c3weg6C0IGr6rtkqWMrXZriA' }}
                        containerStyle={{ width: 50, height: 50 }} />
                    <ListItem.Title
                        style={styles.cuentasBancarias}
                        >
                        {numeros['numeroBBVA']}
                    </ListItem.Title>
                </ListItem>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cuentasBancarias: {
        backgroundColor: '#6495ed',
        fontSize: 26,
        color: '#fff8dc',
        paddingHorizontal: 10
    },
    mensaje: {
        textAlign: 'center',
        color: '#708090',
        marginHorizontal: '20%',
        marginBottom: 10
    }
})


export default ProgresoPedido;
