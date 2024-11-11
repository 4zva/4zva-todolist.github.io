import React, {useState} from "react";
import { StyleSheet, TextInput, Text, Button, View} from 'react-native';


export default function Form({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                onChangeText={onChange} 
                placeholder="Впишите задачу..."
                value={text} />
            <Button
                color="#AA96DA"
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff', // Цвет фона
    },
    input: {
        height: 40,
        borderColor: '#AA96DA', // Цвет рамки
        borderWidth: 2,
        borderRadius: 5, // Закругленные углы
        paddingHorizontal: 10, // Отступы по горизонтали
        marginBottom: 20, // Отступ снизу
        fontSize: 16, // Размер шрифта
    },
});