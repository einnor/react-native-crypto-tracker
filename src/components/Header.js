import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 55,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

const {
  headerContainer,
  header,
} = styles;

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>Crypto Tracker</Text>
    </View>
  );
};

export default Header;
