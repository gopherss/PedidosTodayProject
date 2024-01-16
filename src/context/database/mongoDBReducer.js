import { OBTENER_PRODUCTOS_EXITO, GUARDAR_PEDIDO, OBTENER_CATEGORIAS_EXITO } from '../../types/index';

export default (state, action) => {

    switch (action.type) {
        case OBTENER_PRODUCTOS_EXITO:
            return {
                ...state,
                menu: action.payload
            }
        case OBTENER_CATEGORIAS_EXITO:
            return {
                ...state,
                categoria: action.payload
            }
        case GUARDAR_PEDIDO:
            return {
                ...state,
            }
        default:
            return state;
    }

}