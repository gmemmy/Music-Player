import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';
import { songCard } from '../../../screens/screen1/constants'

// Icons
import { Ionicons } from '@expo/vector-icons';

class SongList extends Component {
  state = {
    liked: false
  }
  pressed = () => {
    if(this.state.liked) {
      this.setState({ liked: false })
    } else {
      this.setState({ liked: true })
    }
  }
  render() {
    return (
      <Fragment>
        <Text style={styles.listTitle}>Top Songs</Text>
        <View>
        <ScrollView>
        {songCard.map(song => (
          <TouchableOpacity style={styles.itemContainer} key={songCard.indexOf(song)}>
            <ImageBackground source={song.uri} style={styles.stockImg} />
            <View style={styles.songText}>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>
                {song.name}
              </Text>
              <Text style={styles.text}>{song.artist}</Text>
            </View>
            <Text style={styles.songTime}>2:45</Text>
            <TouchableOpacity onPress={() => this.pressed()}>
              {this.state.liked ? (
                  <Ionicons
                  name='ios-heart'
                  size={20}
                  color='#166FD2'
                  style={styles.favoriteIcon} />
              ): (
                <Ionicons
                name='ios-heart-empty'
                size={20}
                color='#4B5E72'
                style={styles.favoriteIcon} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
          
        <View style={{height: 1150}} />
        </ScrollView>
        </View>
      </Fragment>
    )
  }
}

export default SongList;
