import React, { useContext } from "react";
import { View, Text, Pressable, ScrollView, Button } from "react-native";
import { StateContext } from "../StateContext";
import styles from "./styles";

export default function Booked({ navigation }) {
    const { bookedBooks, returnBook } = useContext(StateContext)
    const [bookedList, setBookedList] = bookedBooks
    const handleBookedBook = async (id) => {
        try {
            returnBook(id);
            console.log('Book returned successfully');
        } catch (error) {
            console.error('Error returning book:', error);
        }
    }
    const displayBookedBooks = (navigation) => {
        return ((bookedList.length == 0) ? (
            <View style={styles.messageContainer}>
                <Text style={styles.message}>There is no booked books to display.</Text>
            </View>
        ) : (
            bookedList.map((ele) => {
                return <View key={ele.bookingId} style={styles.container}>
                    <Pressable >
                        <Text style={styles.titleStyle}>{ele.name}</Text>
                        <Text style={styles.authorStyle}>by {ele.author}</Text>

                        <Button onPress={() => handleBookedBook(ele.bookingId)} title="Return Book"></Button>
                    </Pressable>
                </View>
            }))
        )
    }

    return (
        <View>

            <ScrollView>
                {displayBookedBooks(navigation)}
            </ScrollView>

        </View>
    )
}