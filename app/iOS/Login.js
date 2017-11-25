import React, { Component } from 'react';
import Home from './Home'
import Register from './Register';
import firebase from '../Config/Firebase';
import styles from '../Theme/Theme';
import Icon from 'react-native-vector-icons/FontAwesome'
import pic from '../../assets/img/login.gif'
import {Font} from 'expo';
import {
    Text,
    TextInput,
    AlertIOS,
    TouchableOpacity,
    ImageBackground,
    View,
    KeyboardAvoidingView
} from 'react-native';

class Login extends Component {

    state = {
        email: '',
        password: '',
        uid: '',
        loading: false,
        fontLoaded: false,
    };





    login = () => {
        this.setState({loading: true});
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((data) => {
                this.setState({uid: data.uid, loading: false});
                this.props.navigator.push({ component: Home });
            }) .catch ((error) => {
            this.setState({loading: false});
            AlertIOS.alert(error.message);

        });
    };

    register = () => {
        this.props.navigator.push({ component: Register });

    };


    async componentDidMount() {
        await Font.loadAsync({
            'Lobster': require('../../assets/fonts/Lobster/Lobster-Regular.ttf'),
        });
        this.setState({fontLoaded: true})
    }




    render() {
        return (
            <ImageBackground
                source={pic}
                style={[styles.container]}
            >
                <KeyboardAvoidingView style={styles.login}>
                    <Icon
                        name="bookmark-o"
                        color="#fff"
                        size={65}
                        style={styles.iconLogo}
                    />
                    { this.state.fontLoaded ? (
                        <Text style={styles.logoText}>
                            <Text style={{
                                fontFamily: "Lobster",
                                color: '#fff',
                                fontSize: 50,
                                fontWeight: '500',
                                letterSpacing: 2.7,
                                margin: 5,
                                textAlign: 'center',
                                textShadowColor: 'darkgrey',
                                textShadowOffset: {width: 3, height: 1},
                                textShadowRadius: 2,
                            }}>
                                Life
                            </Text>
                            <Text style={{
                                fontFamily: "Lobster",
                                color: '#fff',
                                fontSize: 50,
                                fontWeight: '500',
                                padding: 5,
                                textAlign: 'center',
                                textShadowColor: 'darkgrey',
                                textShadowOffset: {width: 3, height: 1},
                                textShadowRadius: 2,
                            }}>
                                Log
                            </Text>
                        </Text>
                        ) : null
                    }

                    <TextInput
                        style={styles.textInputEmail}
                        placeholder="Email"
                        autoCorrect={false}
                        keyboardType={'email-address'}
                        placeholderTextColor="darkgrey"
                        onChangeText={(email) => this.setState({email: email})}
                        value={this.state.email}/>
                    <TextInput
                        style={styles.textInputPassword}
                        placeholder="Password"
                        placeholderTextColor="darkgrey"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password: password})}
                        value={this.state.password}/>
                    <TouchableOpacity
                        style={styles.clearBtn}
                        onPress={this.login}>
                        <Text style={[styles.text, styles.whiteText]}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.login}
                        title="Login"/>
                    <TouchableOpacity onPress={this.register} >
                        <Text style={styles.whiteText}>Register</Text>
                    </TouchableOpacity>
            </KeyboardAvoidingView>


            </ImageBackground>

        )
    }
}

export default Login;
