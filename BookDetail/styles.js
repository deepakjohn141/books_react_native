import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        padding: 8,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        alignItems: 'stretch',
        borderRadius: 8
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 8
    },
    authorStyle: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '500'
    },
    titleStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700'
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    button: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    errorMessage: {
        color: 'red',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        textAlign: 'center'
    }
});