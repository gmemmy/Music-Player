import React, { Fragment } from 'react';
import { View, Text, ImageBackground, ScrollView,
   TouchableOpacity } from 'react-native';
import styles from './styles';
import { songCard } from '../../../screens/screen1/constants'

const PlayListScroll = () => {
  return (
      <ScrollView horizontal='true' alwaysBounceHorizontal='true'
        showsHorizontalScrollIndicator='false'>
        {songCard.map(card => (
          <TouchableOpacity style={styles.card} key={songCard.indexOf(card)}>
            <ImageBackground source={card.uri} style={styles.stockImg}>
              <View style={styles.opacityView}>
                <Text style={styles.cardText}>{card.name}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
  )
}

export default PlayListScroll;
