import React from 'react';
import { Button, Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const BotonComprar = () => {
    const navigation = useNavigation();
    return (
        <Button
            onPress={_ => navigation.navigate('Menu')}
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: ['#40c9ff', '#e81cff'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
            style={{ marginRight: 5 }}
        >
            Agregar
            <Icon name='add' color='#FFF' />
        </Button>
    );
}

export default BotonComprar;

