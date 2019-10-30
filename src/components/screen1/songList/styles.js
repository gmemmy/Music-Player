import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderTopWidth: 0.2,
    borderColor: '#4B5E72',
    marginTop: 20,
    height: 80,
    alignItems: 'center',
  },
  listTitle: {
    marginLeft: 40,
    fontSize: 20,
    color: '#4B5E72',
    fontWeight: 'bold'
  },
  discIcon: {
    marginLeft: 40,
    marginTop: 20
  },
  favoriteIcon: {
    marginLeft: 20,
    marginTop: 20
  },
  songText: {
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4B5E72',
  },
  songTime: {
    marginLeft: 80,
    marginTop: 20,
    color: '#4B5E72'
  }
})

export default styles;
