import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native'
import uuid from 'react-native-uuid';


const Form = ({addTodo}) => {

    const [inputValue, setInputValue] = useState('')


    return (
        <View>
            <TextInput
                placeholder="Add new task..."
                style={styles.textInput}
                onChangeText={text => setInputValue(text)}
                value={inputValue}
            />
            <Button
                title="Add new task..."
                disabled={!inputValue}
                onPress={() => {
                    addTodo({
                        id: uuid.v4(),
                        text: inputValue
                    })
                    setInputValue('')
                }}
            />
        </View>
    )
}

export default Form;


const styles = StyleSheet.create({
    textInput: {
        padding: 15,
        margin: 15,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
})
