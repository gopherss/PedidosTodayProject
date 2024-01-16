import React, { useContext } from 'react';
import { Button, Icon } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../../context/pedidos/pedidosContext';


const BotonResumen = () => {
    const navigation = useNavigation();

    const { pedido } = useContext(PedidoContext);

    if (pedido.length === 0) return null;

    return (
        <Button
            onPress={_ => navigation.navigate('ResumenPedido')}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: ['#00ff87', '#60efff'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
            style={{ marginRight: 5 }}
        >
            Pedido
            <Icon name="shop" color="white" />
        </Button>
    );
}

export default BotonResumen;
