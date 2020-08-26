import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="GoTo Details Screen... again?"
        onPress={() => navigation.push('Details')}
      />
      <Button title="GoTo Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back?" onPress={() => navigation.goBack()} />
      <Button
        title="Go to the first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


