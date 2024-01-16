import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { FAB } from '@rneui/themed';

const BotonComprar = () => {
    const navigation = useNavigation();
    return (
        <FAB
            onPress={_ => navigation.navigate('Menu')}
            placement="right"
            title="Agregar"
            icon={{ name: 'add', color: 'white' }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: ['#40c9ff', '#e81cff'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
        />
    );
}

export default BotonComprar;

