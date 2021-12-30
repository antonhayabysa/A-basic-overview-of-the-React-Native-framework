import React from 'react';
import {View, StyleSheet, Image} from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/photo.png')}
                style={styles.logo}
            />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height:50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
    },
    logo: {
        maxWidth: 350,
        width: '100%',
        height: 100,
    }
})
