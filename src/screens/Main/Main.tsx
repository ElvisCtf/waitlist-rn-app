import { styles } from '@/src/styles/styles';
import { useCallback, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QueueInfo from './components/QueueInfo';


export default function Main() {
  const [myNumber, setMyNumber] = useState('')
  const [currentNumber, setCurrentNumber] = useState('0');
  const [isJoin, setIsJoin] = useState(false);

  const buttonStyle = [styles.outlineButton, isJoin ? styles.redBorder : styles.greenBorder];
  const buttonText = isJoin ? 'EXIT QUEUE' : 'JOIN QUEUE';
  const buttonTextStyle = isJoin ? styles.redText : styles.greenText;

  const onPress = useCallback(() => {
    setIsJoin(prev => !prev);
  }, []);

  return (
    <SafeAreaView style={styles.startContainer}>
      <Text style={[styles.headline, styles.marginTop16]}>QueueMe</Text>

      {
        isJoin ? (
          <QueueInfo myNumber={myNumber} currentNumber={currentNumber} />
        ) : (
          <Text style={styles.body}>Tap the button to get your number</Text>
        )
      }

      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={buttonTextStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}