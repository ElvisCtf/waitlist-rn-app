import { styles } from '@/src/styles/styles';
import { useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QueueInfo from './components/QueueInfo';
import PrimaryButton from './components/PrimaryButton';


export default function Main() {
  const [myNumber, setMyNumber] = useState('')
  const [currentNumber, setCurrentNumber] = useState('0');
  const [isJoin, setIsJoin] = useState(false);

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

      <PrimaryButton isJoin={isJoin} setIsJoin={setIsJoin}/>
    </SafeAreaView>
  );
}