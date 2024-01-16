import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({

    contenedor: {
        flex: 1
    },
    contenido: {
        marginHorizontal: '2.5%',
        flex: 1
    },
    botonPedir: {
        marginTop: 20,
        colors: ['#009EFA', '#00D2FC'],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
        paddingVertical: 10
    },
    botonPrincipal: {
        colors: ['#ff4e50', '#f9d423'],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
        paddingVertical: 20
    },
    botonTexto: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        marginHorizontal: 8
    },
    textoDescripcion: {
        marginHorizontal: '10%',
        fontSize: 15,
        marginVertical: 10,
        color: '#2f4f4f'
    },
    textoPrecio: {
        textAlign: 'center',
        color: '#1ed7b5',
        fontWeight: 'bold',
        fontSize: 25,
    }

});


export default globalStyles;
