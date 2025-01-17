import React from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";

export default function ListItem({ el,deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)} style={styles.item}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    item: {
        padding: 15, // Отступы вокруг текста
        backgroundColor: '#f9f9f9', // Цвет фона элемента
        borderBottomWidth: 1, // Толщина нижней границы
        borderBottomColor: '#ccc', // Цвет нижней границы
    },
    text: {
        fontSize: 18, // Размер шрифта
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor:"#fafafa",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%"
    },
});