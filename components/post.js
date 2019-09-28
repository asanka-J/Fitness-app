import React , { Component } from 'react';
import { Image  ,StyleSheet ,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Moment from 'react-moment';
import moment from 'moment'
class Post extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    let dateString = moment.unix(this.props.item.timeStamp).format("MM/DD/YYYY")
    return (
      <TouchableOpacity onPress={this.props.onPress}>
         
            <Content  style={styles.container}>
            <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri:this.props.item.profileimage}} />
                    <Body>
                      <Text>{this.props.item.title}</Text>
                      <Text note>{this.props.item.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                
                <CardItem cardBody>
                
                  <Image source={{uri:this.props.item.postimage }}  style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>{this.props.item.noOfLikes}</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>{this.props.item.noOfComments}</Text>
                    </Button>
                  </Body>
                  <Right>
             
                    <Moment element={Text} fromNow>{this.props.item.timeStamp}</Moment>
                  </Right>
                </CardItem>
              </Card>
            </Content>
      </TouchableOpacity>
          
      
            );
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  
  }

  
});

export default Post;