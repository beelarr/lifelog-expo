// import React, {Component} from 'react';
// import MapView from 'expo';
// import Icon1 from 'react-native-vector-icons/EvilIcons'
// import styles from '../Theme/Theme';
// // import {
// //     Card,
// //     Image,
// //     View,
// //     Subtitle,
// //     Caption,
// //     Text,
// //     Divider,
// //     Button,
// //
// // } from '@shoutem/ui'
// import { Button, Divider } from 'react-native-elements';
// import {
//     Linking,
//     TouchableOpacity,
//     Share,
//     Text,
//     View,
//     Image
//
// } from 'react-native';
//
// var TimeAgo = require('react-native-timeago');
// var moment = require('moment');
//
//
//
//
// class Map extends Component {
//
//     // static  childContextTypes = {
//     //     navigator: React.PropTypes.object
//     // };
//     //
//     // getChildContext () {
//     //     return {
//     //         navigator: this.props.navigator,
//     //     }
//     // }
//
//
//     // onBack = () => {
//     //     this.props.navigator.pop();
//     // };
//     //
//     //
//     // sharing = () => {
//     //     Share.share({
//     //         message: this.props.memory,
//     //         title: "I'm traveling",
//     //         url: this.props.image
//     //     })
//     // };
//     //
//     //
//     // directions = () => {
//     //     Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${this.props.name},${this.props.address}`)
//     // };
//
//
//
//     render() {
//         return (
//             <MapView
//                 style={styles.mapContainer}
//                 region={{
//                     latitude: this.props.lat,
//                     longitude: this.props.lng,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,}}>
//                 <MapView.Marker
//                     coordinate={{
//                         latitude: this.props.lat,
//                         longitude: this.props.lng}}>
//                     <MapView.Callout>
//                         <TouchableOpacity >
//                             <View>
//                                 <Image
//                                     source={{uri: this.props.image}} />
//                                 <View>
//                                     <Text>{this.props.name}</Text>
//                                     <Divider  />
//                                     <Text>"{this.props.memory}"</Text>
//                                     <Divider  />
//                                     <Text/>
//                                     <TimeAgo
//                                         style={{fontSize: 10}}
//                                         time={this.props.createdAt} />
//                                     <Button>
//                                         <Text>{this.props.address}</Text>
//                                     </Button>
//                                 </View>
//                                 <Text />
//                             </View>
//                         </TouchableOpacity>
//                     </MapView.Callout>
//                 </MapView.Marker>
//                 <TouchableOpacity onPress={this.onBack}>
//                     <Icon1
//                         style={styles.mapBackButton}
//                         name="close"
//                         color="#000"
//                         size={40}/>
//                 </TouchableOpacity>
//             </MapView>
//         );
//     }
// }
//
// export default Map;
