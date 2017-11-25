import React from 'react';
import {  NavigatorIOS, AppRegistry } from 'react-native';
import Login from './app/iOS/Login';
import {Font} from 'expo';



export default class LifeLog extends React.Component {

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
            <NavigatorIOS
                navigationBarHidden={true}
                initialRoute={{title: "Log In", component: Login}}
                style = {{flex: 1}}
            />
        );
    }
}



AppRegistry.registerComponent('LifeLog', () => LifeLog);
