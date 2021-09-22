import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddressSuggestions } from 'react-native-dadata-suggestions';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AddressSuggestions token="123" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
