import React from 'react';
import { View, Text, ScrollView, FlatList,
   TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import { playList } from './constants'

// Components
import Header from '../../components/screen1/header/index'
import PlayListScroll from '../../components/screen1/scrollSection/index'
import SongList from '../../components/screen1/songList/index';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View>
        <FlatList
          data={playList}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.playList}>
              <Text style={styles.playListText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id} />
      </View>
      <View style={styles.scroll}>
        <PlayListScroll />
      </View>
      <View style={styles.listContainer}>
        <SongList />
      </View>
    </View>
  )
}

export default Home;
