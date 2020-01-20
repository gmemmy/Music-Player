const viper = require('../../../assets/viper.jpg');

const playList = [
  {
    name: 'Overview'
  },
  {
    name: 'Songs'
  },
  {
    name: 'Albums'
  },
  {
    name: 'Artists'
  }
]

const songCard = [
  {
    uri: viper,
    name: 'The Viper',
    artist: 'MI Abaga',
    favorite: false
  },
  {
    uri: viper,
    name: 'The Viper',
    artist: 'MI Abaga',
    favorite: false
  },
  {
    uri: viper,
    name: 'The Viper',
    artist: 'MI Abaga',
    favorite: false
  },
  {
    uri: viper,
    name: 'The Viper',
    artist: 'MI Abaga',
    favorite: false
  },
  {
    uri: viper,
    name: 'The Viper',
    artist: 'MI Abaga',
    favorite: true
  },
  {
    uri: viper,
    name: 'The Viper',
    artist: 'MI Abaga',
    favorite: false
  },
  {
    uri: viper,
    name: 'The Viper',
    artist: 'MI Abaga',
    favorite: false
  },
]

const songData = [
  {
    plays: 243,
    downloads: 243,
    likes: 243
  },
]

module.exports = { playList, songCard, songData };
