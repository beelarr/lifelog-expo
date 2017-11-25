import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/iOS/Login';
import {Font} from 'expo';

export default class App extends React.Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Lobster': require('./assets/fonts/Lobster/Lobster-Regular.ttf'),
        });
        this.setState({fontLoaded: true})
    }



  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
