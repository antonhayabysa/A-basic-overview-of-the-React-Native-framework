import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native'
import Header from '../components/Header'
import axios from "axios";
import FilmItem from '../components/FilmItem'

export default function Films() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setFilms(res.data.results)
        }
        getFilms()
    }, [])

    return (
        <View>
            <Header/>
            <FlatList
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'space-around'
                }}
                numColumns={3}
                contentContainerStyle={{paddingBottom: 100}}
                data={films}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <FilmItem
                        films={item}
                    />
                )}
            />
            <Text>Films</Text>
        </View>
    );
}

