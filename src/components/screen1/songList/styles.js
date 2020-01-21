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
    marginLeft: 20,
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold'
  },
  favoriteIcon: {
    marginLeft: 20,
    marginTop: 10
  },
  songText: {
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4B5E72',
  },
  songTime: {
    marginLeft: 125,
    marginTop: 10,
    color: '#4B5E72'
  },
  stockImg: {
    height: 50,
    width: 50,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 15,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
})

export default styles;
