import React from 'react';
import { View, Text, ScrollView, FlatList,
   TouchableOpacity } from 'react-native';
import styles from './styles';
import { playList } from './constants'

// Components
import Header from '../../components/screen1/header/index'
import SongScroll from '../../components/screen1/scrollSection/index'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <Text style={styles.title}>Browse</Text>
      <View style={styles.playListContainer}>
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
        <SongScroll />
      </View>
    </View>
  )
}

export default Home;
