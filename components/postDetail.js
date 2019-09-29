import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { database } from '../App';
import Moment from 'react-moment';
import moment from 'moment'
export default class postDetail extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            postType : JSON.stringify(this.props.navigation.getParam('postType', 'default value')),
            postID : JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID')),
            postData: {},
            postKey:''

        }
           this.getPostDetails();
    
            }

            getPostDetails(){
                var userRef =  database.collection("diet").doc( parseInt(JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID')))-1+"" );
                userRef.get().then((doc) => {
                    if (doc.exists) {

                        this.setState({
                            postData: doc.data(),
                            postKey:doc.id
                          });
                 
                    } 
                  });
            }

    

    static navigationOptions = {
        
        headerTitleStyle: {
          title:"Post Detail",
          color: 'white',
          marginLeft: 100,
          flex: 1,
          // fontFamily: 'Roboto_medium',
          fontWeight: '500'
        },
        headerStyle: {
          backgroundColor: '#000000',
           color: '#fff' 
          
        },
      };
      

    
  render() {

    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: this.state.postData.profileimage}} />
                <Body>
                  <Text>{this.state.postData.name}</Text>
                  <Text note><Moment element={Text} fromNow>{this.state.postData.timeStamp}</Moment></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: this.state.postData.postimage}} style={{height: 200,width:350, flex: 1}}/>
                <Text>{this.state.postData.detail}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-clock" />
                  <Text>1,926 Reads</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}