import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  next: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  },
  back: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  controls: {
    height: 50,
    width: '40%',
    marginTop: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container2: {
    width: '100%',
    flex: 1,
    height: 900,
    margin: 15,
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
  },
  photo: {
    height: 400,
    width: '40%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'flex-start',
  },
  info: {
    height: 200,
    backgroundColor: '#022648',
    alignSelf: 'flex-start',
    width: '40%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 15,
  },
});

export default styles;
