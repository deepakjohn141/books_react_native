import uuid from 'react-native-uuid';
import React, { useState, createContext } from 'react';
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';
import * as firebase from 'firebase/app';
import { getDatabase, ref, push, child, get, set, remove } from "firebase/database";

export const StateContext = createContext();
export const StateProvider = (props) => {

    const firebaseConfig = {
        apiKey: "AIzaSyCBKJimipg4ZwFKQ25kNjjZXRFtbKTwTpI",
        authDomain: "book-71da6.firebaseapp.com",
        databaseURL: "https://book-71da6-default-rtdb.firebaseio.com",
        projectId: "book-71da6",
        storageBucket: "book-71da6.firebasestorage.app",
        messagingSenderId: "911932304547",
        appId: "1:911932304547:web:1f6ef7e18f2587a3a9e316"
    };


    const app = initializeApp(firebaseConfig);
    const database = getDatabase();
    const databaseRef = ref(getDatabase());

    const bookedListRef = ref(database, 'bookedBooks');



    const [books, setBooks] = useState([]);
    const [booked, setBooked] = useState([]);

    const getBookById = (id) => {
        return books.find(item => item.id === id);
    }

    const borrowBook = (id) => {
        if (booked.length < 3) {
            const newBookedRef = push(bookedListRef);
            const newBookedBook = getBookById(id)

            const newUpdatedBookedBook = { ...newBookedBook, bookingId: newBookedRef.key };
            set(newBookedRef, newUpdatedBookedBook)

            setBooked(booked => [...booked, newUpdatedBookedBook]);

            console.log(booked);
            return ""
        } else {
            return "Already borrwed 3 books. Return any of the borrowed books to borrow a book."
        }
    }

    const returnBook = (id) => {
        const reference = ref(database, `bookedBooks/${id}`);

        console.log(id);
        console.log(reference);
        remove(reference)
            .then(() => {
                setBooked(booked.filter(item => item.bookingId != id))
            })
    }


    useEffect(() => {

        get(child(databaseRef, `books`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                const data = snapshot.val();
                const bookArray = [];
                for (let key in data) {
                    bookArray.push({ ...data[key], id: key });
                }
                setBooks(bookArray);

                get(child(databaseRef, `bookedBooks`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val());
                        const data = snapshot.val();
                        const bookedArray = [];
                        for (let key in data) {
                            bookedArray.push({ ...data[key], bookingId: key })
                        }
                        setBooked(bookedArray);
                    } else {
                        console.log("No booked data available");
                    }
                }).catch((error) => {
                    console.error(error);
                });
            } else {
                console.log("No books available");
            }
        }).catch((error) => {
            console.error(error);
        });



    }, []);


    return (
        <StateContext.Provider value={{ books: [books, setBooks], bookedBooks: [booked, setBooked], getBookById, borrowBook, returnBook }}>
            {props.children}
        </StateContext.Provider>
    )
}