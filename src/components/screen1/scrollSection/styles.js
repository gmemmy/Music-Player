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
    paddingLeft: 40,
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#232228',
    fontWeight: 'bold'
  },
  opacityView: {
    height: 60,
    // borderRadius: 15,
    backgroundColor: 'white',
    top: 180,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles;
