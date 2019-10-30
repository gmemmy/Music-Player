import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { songCard } from '../../../screens/screen1/constants'

// Icons
import { Ionicons } from '@expo/vector-icons';

const SongList = () => {
  return (
    <Fragment>
      <Text style={styles.listTitle}>PLAYLISTS</Text>
      <View>
      <ScrollView>
      {songCard.map(song => (
        <TouchableOpacity style={styles.itemContainer} key={songCard.indexOf(song)}>
          <Ionicons
            name='ios-disc'
            size={40}
            color='#166FD2'
            style={styles.discIcon} />
          <View style={styles.songText}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              {song.name}
            </Text>
            <Text style={styles.text}>{song.artist}</Text>
          </View>
          <Text style={styles.songTime}>2:45</Text>
          <Ionicons
            name='ios-heart-empty'
            size={20}
            color='#4B5E72'
            style={styles.favoriteIcon} />
        </TouchableOpacity>
      ))}
        
      <View style={{height: 1150}} />
      </ScrollView>
      </View>
    </Fragment>
  )
}

export default SongList;
