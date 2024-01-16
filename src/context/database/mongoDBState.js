import React, { useReducer, useState } from 'react';

import MongoDBContext from './mongoDBContext';
import MongoDBReducer from './mongoDBReducer';
import { GUARDAR_PEDIDO, OBTENER_CATEGORIAS_EXITO, OBTENER_PRODUCTOS_EXITO } from '../../types/index';

import { sortBy } from 'lodash';
import axios from 'axios';

const MongoDBState = props => {

    const [isLoading, setLoading] = useState(true);

    //State Incial
    const initialState = {
        menu: [],
        categoria : [],
        miPedido: []
    };

    // useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(MongoDBReducer, initialState);

    //Consultar API  NodeJS
    const obtenerProductos = async (_) => {
        try {
            const URL = 'https://restaurante.fly.dev/obtener-producto-disponible',
                response = await axios.get(URL),
                ordenCategoria = await sortBy(response.data, 'categoria');
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: ordenCategoria
            });

        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const guardarPedido = async pedido => {
        let response;
        try {
            const URL = 'https://restaurante.fly.dev/guardar-pedido';
            response = await axios.post(URL, pedido);
            dispatch({
                type: GUARDAR_PEDIDO,
            })
        } catch (error) {
            console.log(error);
        }
       return await response.data._id;
    }

    const obtenerCategorias = async _ => {
        try {
            const URL = 'https://restaurante.fly.dev/obtener-categoria',
                response = await axios.get(URL),
                categorias = await response.data;

                dispatch({
                    type: OBTENER_CATEGORIAS_EXITO,
                    payload: categorias
                })

        } catch (error) {
            console.log(error);
        } 
    }

    return (
        <MongoDBContext.Provider
            value={{
                menu: state.menu,
                categoria: state.categoria,
                obtenerProductos,
                isLoading,
                guardarPedido,
                obtenerCategorias
            }}
        >
            {props.children}
        </MongoDBContext.Provider>
    );
}


export default MongoDBState;
