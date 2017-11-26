import React, { Component } from 'react';
import firebase from '../Config/Firebase';
import { Font } from 'expo';
import Header from '../Components/Header';
// import Map from './Map';
import styles from '../Theme/Theme';
import Post from './Post';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
import { List, ListItem, Tile } from 'react-native-elements';
import {
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    View,
    Image,
    FlatList,
    ActivityIndicator

} from 'react-native';


class Home extends Component {

    // static  childContextTypes = {
    //     navigator: React.PropTypes.object
    // };
    //
    // getChildContext () {
    //     return {
    //         navigator: this.props.navigator,
    //     }
    // }


        state = {
            uid: "",
            food: [],
            entryId: "",
            loading: true,

        }


    getPosts = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                let userId = user.uid;
                this.setState({uid: userId});
                firebase.database().ref('/food').orderByChild('uid').equalTo(userId).on('value', (userPost) => {
                    var items = [];
                    userPost.forEach((child) => {
                        var item = child.val();

                        item.key = child.key;
                        items.push(item);
                    });
                    items = items.reverse();
                    this.setState({food: items, loading: false});

                });
            }
        });
    };


    map = (place) => {
        this.props.navigator.push({
            component: Map,
            passProps: place
        });
    };



    left = () => { this.props.navigator.push({ component: Post })};


    deletePost = (key) => {
        Alert.alert(
            'Delete Post',
            'Are you sure??',
            [
                {text: 'Delete', onPress: () => firebase.database().ref(`food/${key}`).remove(), style: 'destructive'},
                {text: "I'll Keep It", onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
        );

    };


   componentDidMount() {
        this.getPosts();
    }

    render () {


        return (
            <View style={styles.homeContainer} >
                <Header
                    onLogOut={() =>{
                        firebase.auth().signOut();
                        this.props.navigator.popToTop();
                    }}
                    title={<Icon1
                        name="bookmark-o"
                        color="#fff"
                        size={30}
                    />}
                    left={this.left}
                    leftText={
                        <Icon2
                            name="camera"
                            color="#fff"
                            size={30} />
                    } />
                    <Text
                        style={{
                            fontFamily: 'GillSans-Light',
                            fontSize: 20,
                            textAlign: 'center',
                            paddingTop: 10,

                        }}>
                        Posts
                    </Text>
                    <List>
                        <FlatList
                            data={this.state.food}
                            renderItem={({ item }) => (
                                 this.state.loading ? (
                                <ActivityIndicator/>
                                  ) :

                                <Tile
                                   featured
                                   onPress={() => this.map(item)}
                                   imageSrc={{uri: `${item.image}`}}
                                   imageContainerStyle={{
                                       borderBottomColor: '#fff',
                                       borderBottomWidth: 2,
                                   }}
                                />


                            )}
                        />

                    </List>
            </View>
        );
    }
}



export default Home;






