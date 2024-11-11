import { useContext, useState } from 'react'
import { View, Text, Image, Button } from 'react-native'
import { StateContext } from '../StateContext'
import styles from './styles';


export default function BookDetail({ navigation, route }) {
    const { getBookById, borrowBook } = useContext(StateContext);
    const id = route.params.id
    const book = getBookById(id);
    const [errorMsg, setErrorMsg] = useState("");

    const borrow = async () => {
        const msg = borrowBook(id);
        setErrorMsg(msg);
    }
    return (
        <View style={styles.container}>

            <Image source={{ uri: book.cover_page }} style={styles.image}></Image>
            <View style={styles.row}>
                <View>
                    <Text style={styles.titleStyle}>{book.name}</Text>
                    <Text style={styles.authorStyle}>by {book.author}</Text>
                </View>
                <View>
                    <Text style={styles.valueStyle}>Rating: {book.rating}/5</Text>
                </View>
            </View>




            <View style={styles.row}>
                <Text style={styles.valueStyle}>{book.summary}</Text>
            </View>
            <View style={styles.button} >
                {errorMsg && (<Text style={styles.errorMessage}>{errorMsg}</Text>)}
                <Button onPress={borrow} title="Borrow Book"></Button>
            </View>
        </View>
    )
}