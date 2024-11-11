import React from 'react';
import {StyleSheet, View, Text} from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#AA96DA",
        margin: 0,
    },
    text: {
        padding: 20,
        textAlign: "center",
        marginTop: 20,
        height: 40,
        borderColor: '#AA96DA', // Цвет рамки
        borderWidth: 2,
        borderRadius: 5, // Закругленные углы
        paddingHorizontal: 10, // Отступы по горизонтали
        marginBottom: 40, 
        fontSize: 24, 
        color: "#fff"

    },
});