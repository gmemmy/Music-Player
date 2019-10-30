import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE'
  },
  header: {
    flexDirection: 'row'
  },
  title: {
    marginTop: 40,
    marginLeft: 40,
    fontSize: 40,
    color: '#4B5E72'
  },
  playListContainer: {
    // flexDirection: 'row'
  },
  playList: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 30
  },
  playListText: {
    fontSize: 17,
    color: '#232228',
    fontWeight: 'bold'
  },
  scroll: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

export default styles;
