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
    flexDirection: 'row',
    justifyContent: 'center',
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
