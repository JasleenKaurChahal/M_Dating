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
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    padding: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
