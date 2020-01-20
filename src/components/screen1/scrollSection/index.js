import React, { Fragment } from 'react';
import { View, Text, ImageBackground, ScrollView,
   TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { songCard, songData } from '../../../screens/screen1/constants'

// Icons
import { Ionicons } from '@expo/vector-icons';

const PlayListScroll = () => {
  return (
    <Fragment>
      <Text style={styles.scrollTitle}>Popular This Week</Text>
      <ScrollView horizontal='true' alwaysBounceHorizontal='true'
        showsHorizontalScrollIndicator='false'>
        {songCard.map(card => (
          <TouchableOpacity style={styles.card} key={songCard.indexOf(card)}>
            <ImageBackground source={card.uri} style={styles.stockImg}>
              <Text style={styles.cardText}>{card.name}</Text>
              <View style={styles.lowerSection}>
                <TouchableOpacity style={styles.playIcon}>
                  <Ionicons
                    name='ios-play' 
                    color='black'
                    size={25}
                  />
                </TouchableOpacity>
                <FlatList
                  data={songData}
                  numColumns={3}
                  contentContainerStyle={styles.opacityView}
                  renderItem={({ item }) => (
                    <Fragment>
                      <View style={styles.data}>
                        <Ionicons
                          name='ios-play' 
                          color='white'
                          size={18}
                        />
                        <Text style={styles.dataNumbers}>{item.plays}</Text>
                      </View>
                      <Text style={styles.divider}>|</Text>
                      <View style={styles.data}>
                        <Ionicons
                          name='ios-download' 
                          color='white'
                          size={18}
                        />
                        <Text style={styles.dataNumbers}>{item.downloads}</Text>
                      </View>
                      <Text style={styles.divider}>|</Text>
                      <View style={styles.data}>
                        <Ionicons
                          name='md-heart' 
                          color='white'
                          size={17}
                        />
                        <Text style={styles.dataNumbers}>{item.likes}</Text>
                      </View>
                    </Fragment>
                  )}
                  keyExtractor={item => item.id} />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Fragment>
  )
}

export default PlayListScroll;
