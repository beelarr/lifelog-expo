import React, { Component } from 'react';
import styles from '../Theme/Theme';
import firebase from '../Config/Firebase';
import Login from '../iOS/Login';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';


class Header extends Component {
    // static contextTypes = {
    //     navigator: React.PropTypes.object,
    //
    // };


    logout = () => {
        firebase.auth().signOut();
        this.navigator.push({ component: Login});

    };




    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.props.left} style={styles.left} >
                        <Text style={styles.textHeader}>{this.props.leftText}</Text>
                    </TouchableOpacity>
                    <Text style={styles.textCenterHeader}>{this.props.title}</Text>
                    <TouchableOpacity style={styles.right} onPress={this.logout}>
                        <Text style={styles.logOut}>LogOut</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
            </View>
        );
    }
}

module.exports = Header;
