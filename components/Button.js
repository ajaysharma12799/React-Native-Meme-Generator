import {StyleSheet, Pressable, Text} from 'react-native'

const Button = ({title, handleShare, fetchMemes}) => {
    const handlePress = () => {
        if(title === 'Share') {
            handleShare();
        }
        else {
            fetchMemes();
        }
    }

  return (
    <Pressable style={styles.buttonOuterStyle} onPress={handlePress}  >
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    buttonOuterStyle: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '45%',
        opacity: 1,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default Button