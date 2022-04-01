import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatView: {
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 60,
    backgroundColor: '#F7C505',
    borderColor: '#F7C505',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
