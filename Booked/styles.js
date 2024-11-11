import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        margin: 8,
        padding: 8,
        backgroundColor: 'white',
        alignItems: 'stretch',
        borderRadius: 8
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
    messageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        color: 'black',
        fontWeight: '400',
        fontSize: 16,
        marginTop: 16
    }
});