import React, { Fragment } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// Icons
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
  return (
    <Fragment>
      <Text style={styles.title}>Discover</Text>
      <TouchableOpacity style={styles.searchIcon}>
        <AntDesign
        name='search1'
        size={25}
       />
      </TouchableOpacity>
    </Fragment>
  )
}

export default Header;
