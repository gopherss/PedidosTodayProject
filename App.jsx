import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Pantallas
import DetallePlatillo from './src/views/DetallePlatillo';
import Menu from './src/views/Menu';
import NuevaOrden from './src/views/NuevaOrden';
import ProgresoPedido from './src/views/ProgresoPedido';
import ResumenPedido from './src/views/ResumenPedido';

//Components
import BotonResumen from './src/components/interface/BotonResumen';
import BotonComprar from './src/components/interface/BotonAgregar';


//Importar Context
import MongoDBState from './src/context/database/mongoDBState';
import PedidoState from './src/context/pedidos/pedidosState';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <MongoDBState>
        <PedidoState>

          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#FF5D73',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: '#FBEAFF'
                },
                headerTitleAlign: 'center'
              }}

            >
              <Stack.Screen
                name='NuevaOrden'
                component={NuevaOrden}
                options={{
                  title: 'Bievenido'
                }}
              />
              <Stack.Screen
                name='Menu'
                component={Menu}
                options={{
                  title: 'Elige tu Platillo'
                }}
              />
              <Stack.Screen
                name='DetallePlatillo'
                component={DetallePlatillo}
                options={{
                  title: 'Detalle Platillo'
                }}
              />

              <Stack.Screen
                name='ResumenPedido'
                component={ResumenPedido}
                options={{
                  title: 'Resumen Pedido'
                }}
              />
              <Stack.Screen
                name='ProgresoPedido'
                component={ProgresoPedido}
                options={{
                  title: 'Progreso de Pedido'
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>

        </PedidoState>
      </MongoDBState>
    </>
  );
}

export default App;

