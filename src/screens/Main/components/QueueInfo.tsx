import { styles } from '@/src/styles/styles';
import { Text, View } from 'react-native';


interface QueueInfoProps {
  myNumber: string;
  currentNumber: string;
}

export default function QueueInfo({myNumber, currentNumber}: QueueInfoProps) {
  return (
    <>
      <Text style={styles.body}>We&#39;ll call your number shortly</Text>

      <View style={[styles.filledBox, styles.marginTop16]}>
        <Text style={styles.bigNumber}>{myNumber}</Text>
      </View>

      <View style={[styles.centerContainer, styles.marginTop16]}>
        <Text style={styles.body}>CURRENT NUMBER</Text>
        <Text style={[styles.boldNumber, styles.marginTop8]}>{currentNumber}</Text>
      </View>
    </>
  );
}