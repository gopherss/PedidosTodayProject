import React, { useContext } from 'react';
import { FAB } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import PedidoContext from '../../context/pedidos/pedidosContext';


const BotonResumen = () => {
    const navigation = useNavigation();

    const { pedido } = useContext(PedidoContext);

    if (pedido.length === 0) return null;

    return (
        <FAB
            onPress={_ => navigation.navigate('ResumenPedido')}
            placement="right"
            title="Mi Pedido"
            icon={{ name: 'shop', color: 'white' }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: ['#00ff87', '#60efff'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
        />
    );
}

export default BotonResumen;
