import React, { useContext } from "react";
import { View, Text, Pressable, ScrollView, Button } from "react-native";
import { StateContext } from "../StateContext";
import styles from "./styles";

export default function BookList({ navigation }) {
    const { books } = useContext(StateContext)
    const [bookList, setBookList] = books
    const displayBooks = (navigation) => {
        return bookList.map((ele) => {
            return <View key={ele.id} style={styles.container}>
                <Pressable onPress={() => { navigation.navigate('Book Detail', { id: ele.id }) }}>
                    <Text style={styles.titleStyle}>{ele.name}</Text>
                    <Text style={styles.authorStyle}>by {ele.author}</Text>
                </Pressable>
            </View>
        });
    }

    return (
        <View>

            <ScrollView>
                {displayBooks(navigation)}
            </ScrollView>

        </View>
    )
}