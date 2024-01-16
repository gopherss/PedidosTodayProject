import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/base'
import { Text } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../styles/global';
import Lottie from 'lottie-react-native';

import { useNavigation } from '@react-navigation/native';

const NuevaOrden = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={globalStyles.contenedor}>
                <View style={globalStyles.contenido}>
                    <Lottie source={require('../../assets/animation_principal.json')} style={{ height: 500, width: 400 }} autoPlay />
                    <Button
                        radius={'xl'}
                        ViewComponent={LinearGradient}
                        linearGradientProps={globalStyles.botonPrincipal}
                        onPress={_ => navigation.navigate('Menu')}
                    >
                        <Text style={globalStyles.botonTexto}> Agregar Nuevo Pedido </Text>
                        &#x1f6cd;
                    </Button>
                </View>
            </View>
        </>
    );
}

export default NuevaOrden;
