import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('screen');

const MemeCard = ({ meme }) => {
  return (
    <View style={styles.card}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode="contain" source={{ uri: meme?.url }} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        elevation: 5,
        shadowColor: '#ffffff',
        backgroundColor: '#ffffff',
        margin: 50,
        borderRadius: 10,
        width: Dimensions.get('screen').width / 1.05
    },
    imageContainer: {
        width: windowWidth.width,
        height: windowWidth.height / 1.5,
    },
    image: {
        width: windowWidth.width / 1.05,
        height: windowWidth.height / 1.5,
    }
});

export default MemeCard