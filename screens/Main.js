// Main.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View , Button , TouchableHighlight , Alert} from 'react-native'
import {Grid ,Col,Row ,Card,CardItem, Left ,Thumbnail,Body} from 'native-base';
import firebase from '../config/firebase'
import HeaderDescription from '../components/headerDescription';



export default class Main extends React.Component {

  static navigationOptions = {
    title: 'Home page',
    headerTitleStyle: {
      color: 'white',
      marginLeft: 80,
      flex: 1,
      // fontFamily: 'Roboto_medium',
      fontWeight: '500'
    },
    headerStyle: {
      backgroundColor: '#000000',
    },
  };


  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  handleLogout() {
    firebase.auth().signOut().then(function() {
      this.props.navigation.navigate('SignUp')
    }).catch(function(error) {
      // An error happened.
    });
  }


render() {
    const { currentUser } = this.state
return (
  
    <View style={styles.headerContainer}>
        <HeaderDescription title="Home"/> 
        {/* <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title="logout" onPress={this.handleLogout} /> */}
        <Grid>
           
            <Row>
                <Col style={styles.leftButton}>
                <TouchableHighlight onPress={() =>  this.props.navigation.navigate('exerciseTypeStack')}>
                    <Card>
                        <CardItem cardBody>
                        <Image source={require('../assets/workouts.jpg')}   style={{height: 180, width: 150, flex: 1}}/>
                        </CardItem>
                    </Card>
                </TouchableHighlight>
                </Col>

                 <Col style={styles.RightButton}>
                     <TouchableHighlight onPress={() =>  this.props.navigation.navigate('dietStack')}>
                        <Card>
                            <CardItem cardBody>
                            <Image source={require('../assets/diets.jpg')}   style={{height: 180, width: 180, flex: 1}}/>
                            </CardItem>
                        </Card>
                    </TouchableHighlight>
                </Col>
            </Row>
            <Row>
                <Col style={styles.leftButton}>
                    <TouchableHighlight onPress={() =>  this.props.navigation.navigate('mapStack')}>
                            <Card>
                                <CardItem cardBody>
                                <Image source={require('../assets/map.jpg')}   style={{height: 180, width: null, flex: 1}}/>
                                </CardItem>
                            </Card>
                        </TouchableHighlight>
                </Col>
                 <Col style={styles.RightButton}>
             
                <TouchableHighlight onPress={() =>  this.props.navigation.navigate('profileStack')}>
                    <Card>
                        <CardItem cardBody>
                        <Image source={require('../assets/profile.jpg')}   style={{height: 180, width: null, flex: 1}}/>
                        </CardItem>
                    </Card>
                </TouchableHighlight>
                </Col>
            </Row>
           
            </Grid>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  
  headerContainer:{
    flex:1,
    
    
},
  leftButton:{
    backgroundColor: '#000000',
    height: 180 ,
    marginLeft:10,
    marginRight:5,
    justifyContent:'center'
},
RightButton:{
    backgroundColor: '#000000',
    height: 180 ,
    marginLeft:5,
    marginRight:15,
    justifyContent:'center'
}
})