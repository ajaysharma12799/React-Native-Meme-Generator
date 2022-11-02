import { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Share, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MemeCard from './components/MemeCard';
import Button from './components/Button';

export default function App() {
  const [meme, setMeme] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchMemes = async () => {
    try {
      const responseObj = await fetch('https://meme-api.herokuapp.com/gimme', {
        method: 'GET',
      });
      const data = await responseObj.json();
      setMeme(data);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', error.message, [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed')
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed')
        }
      ])
    }
  }

  const handleShare = async () => {
    try {
      const options = {
        url: meme?.url, // For IOS Only
        title: meme?.title,
        message: `Hey Checkout this Amazing Meme \n${meme?.url}`,
      };
      await Share.share(options);
    } catch (error) {
      Alert.alert('Error', error.message, [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed')
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed')
        }
      ])
    }
  }

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        { loading ? 
          <ActivityIndicator color={'#3944f7'} size='large' /> 
          : 
          <MemeCard meme={meme} /> 
        }
        <View style={styles.buttonContainer}>
          <Button title={'Generate Meme'} fetchMemes={fetchMemes}  />
          <Button title={'Share'} handleShare={handleShare}/>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3944f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  buttonContainer: {
    width: Dimensions.get('screen').width / 1.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  }
});
