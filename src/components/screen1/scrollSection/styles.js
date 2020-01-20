import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stockImg: {
    height: 240,
    width: 220,
    marginTop: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    overflow: 'hidden'
  },
  card: {
    paddingLeft: 20,
  },
  cardText: {
    marginTop: 130,
    fontSize: 18,
    marginLeft: 15,
    color: '#fff',
    fontWeight: 'bold'
  },
  lowerSection: {
    flexDirection: 'row',
    top: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  opacityView: {
    height: 60,
    width: 120,
    marginLeft: 20,
    borderRadius: 15,
    backgroundColor: '#5668C6',
    opacity: 0.9,
    justifyContent: 'center'
  },
  playIcon: {
    height: 50,
    width: 50,
    marginLeft: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollTitle: {
    marginLeft: 20,
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold'
  },
  dataNumbers: {
    color: '#fff',
    fontSize: 12
  },
  data: {
    padding: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  divider: {
    color: '#fff',
    marginTop: 13
  }
})

export default styles;
