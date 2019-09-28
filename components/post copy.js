import React from 'react';
import { Image  ,StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const Post = props => {
    return (
        <Container>
        
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={props.profileimage} />
                <Body>
                  <Text>{props.title}</Text>
                  <Text note>Asanka Jayasundara</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={props.postimage}  style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
         );
};

const styles = StyleSheet.create({
   

  
});

export default Post;