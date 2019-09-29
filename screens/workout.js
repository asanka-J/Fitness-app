import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import PostList from './listLoader'

export default class diet extends Component {
    constructor(props) {
      super(props);

    }

    


    static navigationOptions = {
        title: 'Workouts',
        headerTitleStyle: {
          color: 'white',
          marginLeft: 100,
          flex: 1,
          // fontFamily: 'Roboto_medium',
          fontWeight: '500'
        },
        headerStyle: {
          backgroundColor: '#000000',
        },
      };

      


      navSelectedPost = (postID) => {
        try {

          // alert(postID);
          this.props.navigation.navigate('DietPost', {
            itemId: parseInt(postID),
            postType:'workout'
           
          });
        }
        catch(error) {
          console.log(error);
        }
      };

    render() {
      let postID = 10;
        return (
            <View>
                  
                <PostList dataCollection="Workout" childSelectedPost={this.navSelectedPost}/>
            </View>
        )
    }
}
