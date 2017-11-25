import React, { Component } from 'react';
import firebase from '../Config/Firebase';
import styles from '../Theme/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import pic from '../../assets/img/register.gif';

import {
    Text,
    TextInput,
    ImageBackground,
    AlertIOS,
    TouchableOpacity,
    View,
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';

class Register extends Component {
    state = {
        email: "",
        password: "",
        uid: "",
        loading: false,
        fontLoaded: false,
    };

    register = () => {
        this.setState({loading: true});
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((data) => {
                this.setState({uid: data.uid, loading: false});

            }) .catch((error) => {
            this.setState({loading: false});
            AlertIOS.alert(error.message)
        });
    };

    login = () => {
        this.props.navigator.pop();
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
                style={[styles.container]}>
                <KeyboardAvoidingView
                    style={styles.login}>
                    <Icon
                        name="bookmark-o"
                        color="#fff"
                        size={65}
                        style={styles.iconLogo}
                    />
                    <Text style={styles.logoText}>
                        <Text style={[styles.logoLife, styles.customFont]}>Life</Text>
                        <Text style={[styles.logoLog, styles.customFont]}> Log</Text>
                    </Text>
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
                        onPress={this.register}>
                        <Text style={[styles.text, styles.whiteText]}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.login}
                        title="Login">
                        <Text style={styles.whiteText}>Login</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ImageBackground>

        )
    }
}
export default Register;
