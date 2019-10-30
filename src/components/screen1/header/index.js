import React, { Fragment } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// Icons
import { AntDesign, Entypo } from '@expo/vector-icons';

const Header = () => {
  return (
    <Fragment>
      <TouchableOpacity>
        <AntDesign
        name='search1'
        size={25}
        style={styles.searchIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo
        name='dots-three-vertical'
        size={22}
        style={styles.threeDotsIcon} />
      </TouchableOpacity>
    </Fragment>
  )
}

export default Header;
