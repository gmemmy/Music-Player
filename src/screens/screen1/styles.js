import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE'
  },
  header: {
    flexDirection: 'row',
    marginTop: 60
  },
  title: {
    marginTop: 40,
    marginLeft: 40,
    fontSize: 40,
    color: '#4B5E72'
  },
  playList: {
    padding: 11,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15
  },
  playListText: {
    fontSize: 16,
    color: '#232228',
  },
  scroll: {
    marginTop: 30
  },
  playListHighLight: {
    flex: 0.5,
    backgroundColor: 'red'
  },
  listContainer: {
    marginTop: 50,
  },
})

export default styles;
