// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  bigNumber: {
    color: '#ffffff',
    fontSize: 72,
    fontWeight: '600',
  },
  boldNumber: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600'
  },
  outlineButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  greenBorder: {
    borderColor: '#3E7B27',
  },
  greenText: {
    color: '#3E7B27',
    fontSize: 22,
  },
  redBorder: {
    borderColor: '#cb2424',
  },
  redText: {
    color: '#cb2424',
    fontSize: 22,
  },
  marginTop8: {
    marginTop: 8,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginBottom16: {
    marginTop: 16,
  }
});
