import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Main() {
  let [currentNumber, setCurrentNumber] = useState('0');
  let [myNumber, setMyNumber] = useState('')

  function onPress() {

  }

  return (
    <SafeAreaView style={styles.startContainer}>
      <Text style={[styles.headline, styles.marginTop16]}>QueueMe</Text>

      <View style={[styles.filledBox, styles.marginTop16]}>
        <Text style={styles.number}>{myNumber}</Text>
      </View>

      <View style={[styles.centerContainer, styles.marginTop16]}>
        <Text style={styles.body}>CURRENT NUMBER</Text>
        <Text style={styles.body}>{currentNumber}</Text>
      </View>

      <TouchableOpacity style={styles.outlineButton} onPress={onPress}>
        <Text style={styles.buttonText}>ENTER</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filledBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#0a74ff',
    padding: 16,
    width: '80%',
    height: '35%'
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  headline: {
    color: '#000000',
    fontSize: 36,
    fontWeight: 600
  },
  title: {
    color: '#000000',
    fontSize: 22,
    textAlign: 'center',
  },
  body: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '300',
  },
  number: {
    color: '#ffffff',
    fontSize: 72,
    fontWeight: '600',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#3E7B27',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#3E7B27',
    fontSize: 22,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginBottom16: {
    marginTop: 16,
  }
});