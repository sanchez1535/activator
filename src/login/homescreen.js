import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Homescreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.space1}>
    </View>
    <View style={styles.text1}>
     <View style={styles.title}>
     ACTIVATOR
    </View>
    <View style={styles.summary}>
    Find the perfect activities you can do right from the comfort of your home
    </View>
    </View>
     <View style={styles.space2}>
    </View>
          <View style={styles.textContainer}>
            </View>

<View style={styles.circles}>
<Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXtkOFaE136gmmp7t5-bBdSgUtfQSdHiIY9-kBapftvCOi5cZY&usqp=CAU'}}
    style={{ height: 30, width: 30, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Home2')}
            >
           <View style={styles.circles}>
                        <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTstVBmHDM5qB5KvlUpoZ4vzQg35ATYnM6lgraF3ZCa-jOJ6V7k&usqp=CAU'}}
    style={{ height: 26, width: 26, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Home3')}
            >
           <View style={styles.circles}>
                        <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTstVBmHDM5qB5KvlUpoZ4vzQg35ATYnM6lgraF3ZCa-jOJ6V7k&usqp=CAU'}}
    style={{ height: 26, width: 26, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
                    </View>
                </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Sign2')}
            >
           <View style={styles.circles}>
                        <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTstVBmHDM5qB5KvlUpoZ4vzQg35ATYnM6lgraF3ZCa-jOJ6V7k&usqp=CAU'}}
    style={{ height: 26, width: 26, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
                    </View>
                </TouchableHighlight>
            </View>

 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  space1:{
    flex:0.3,
  },
  title:{
    textAlign:'center',
    fontSize:52,
    color:'blue',
    margin:20,
    fontWeight:'bold',
  },
  summary:{
    textAlign:'center',
    margin:25,
    fontSize:30,
  },
  space2:{
    flex:0.6,
  }, 
  circles:{
    flexDirection:'row',
    justifyContent:'center',
  },
});


export default Homescreen;
