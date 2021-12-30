import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native'


const TodoItem = ({item, deleteTodo}) => {
    return (
        <TouchableOpacity
            onLongPress={() => deleteTodo(item.id)}
            style={styles.todo}>
            <Text style={styles.text
            }>
                {item.text}
            </Text>
            <TouchableOpacity
            onPress={() => deleteTodo(item.id)}
            >
                <Text> &#128465; </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}


export default TodoItem;


const styles = StyleSheet.create({
    todo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 5,
    },
    text: {
            fontSize: 17,
    }
})
