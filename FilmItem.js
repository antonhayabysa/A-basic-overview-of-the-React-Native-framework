import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, Image, Modal, SafeAreaView} from 'react-native'


const FilmItem = ({film}) => {
    const [modalVi, setModalVi] = useState(false)
    return (
        <TouchableOpacity
            style={styles.filmItem}
            onLongPress={() => setModalVi(!modalVi)}
        >
            <Image
                style={styles.image}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text style={styles.text}>
                {film.title}
            </Text>

            <Modal
                animationType="slide"
                presentationStyle='formSheet'
                visible={modalVisibe}
            >
                <SafeAreaView
                    style={styles.modal}>
                    <Text
                        style={styles.close}
                        onPress={() => setModalVi(!modalVi)}
                    >
                        &times;
                    </Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text style={styles.close}>
                        {film}
                    </Text>
                </SafeAreaView>
            </Modal>

        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    filmItem: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 15,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
    modal: {
        margin:25,
    },
    close:{
        fontSize: 30,
        textAlign: 'right',
    }
})


export default FilmItem
