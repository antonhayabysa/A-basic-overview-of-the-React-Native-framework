import React, {useState} from 'react';
import {SafeAreaView, ImageBackground, StyleSheet, FlatList, Text} from 'react-native'
import Header from '../components/Header'
import TodoItem from "../components/TodoItem";
import Form from "../components/Form";


export default function Todo() {

    const [todoItems, setTodoItem] = useState([])

    const addTodo = (newItem) => {
        setTodoItem([
            ...todoItems,
            {...newItem}
        ])
    }

    const deleteTodo = (id) => {
        setTodoItem((newList) => {
            return newList.filter((todoItems) => id !== todoItems.id)
        })

    }

    return (
        <SafeAreaView style={styles.app}>
            <Header/>
            <ImageBackground
                source={require('../assets/BG.png')}
                style={styles.bg}
            >
                <Form addTodo={addTodo}/>

                {
                    todoItems.length
                    ? <Text> Oll: [ { todoItems.length} ]</Text>
                        : null
                }
                <FlatList
                    data={todoItems}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TodoItem
                            item={item}
                            deleteTodo={deleteTodo}
                        />
                    )}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    app: {
        flex: 1,

    }
})
