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



class Summary2 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.space1}>
    </View>
    <View style={styles.topic}>
    <Text style={styles.topic1}>
    ART
    </Text>
    <View style={styles.images}>
    <View style={styles.one}>
  <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0l3mFePxVqbk_zcGwmlJAfxwQuqjczOp0iYTnbaYHz-PNygcz&usqp=CAU'}}
    style={{ height: 100, width: 100, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxJw0piTmG0hk5i23TlPd-xGs_yq0cjDShPZ_KASdNon1QX0hY&usqp=CAU'}}
    style={{ height: 100, width: 100, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    </View>
    <View style={styles.two}>
    <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF6ouYp-7UE0_0E825MaAZj6ovK3GYjY_h5FHnR8fVOrHWe6Mr&usqp=CAU'}}
    style={{ height: 100, width: 100, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
  <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwxeXOJ6wHPD-0vogjOhoLD6nXndoByTdd2xufDMS2wufjTgyg&usqp=CAU'}}
    style={{ height: 100, width: 100, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    </View>
    </View>
    </View>
    <View style={styles.text1}>
    <View style={styles.summary}>
    Learn more about topics that interest you the most
    </View>
    </View>
    
          <View style={styles.textContainer}>
            </View>

<View style={styles.circles}>
                 <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Home')}
            >
           <View style={styles.circles}>
                        <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTstVBmHDM5qB5KvlUpoZ4vzQg35ATYnM6lgraF3ZCa-jOJ6V7k&usqp=CAU'}}
    style={{ height: 26, width: 26, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
                    </View>
                </TouchableHighlight>
                 <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Home2')}
            >
           <View style={styles.circles}>
                        <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTstVBmHDM5qB5KvlUpoZ4vzQg35ATYnM6lgraF3ZCa-jOJ6V7k&usqp=CAU'}}
    style={{ height: 26, width: 26, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
                    </View>
                </TouchableHighlight>
<Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXtkOFaE136gmmp7t5-bBdSgUtfQSdHiIY9-kBapftvCOi5cZY&usqp=CAU'}}
    style={{ height: 30, width: 30, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
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
  topic:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  topic1:{
    textAlign:'center',
    margin:20,
    fontSize:60,
    color:'blue', 
  },
  one:{
    flexDirection:'row',
  },
  two:{
    flexDirection:'row',
  },
  summary:{
    textAlign:'center',
    margin:40,
    fontSize:30,
    color:'blue',
  }, 
  circles:{
    flexDirection:'row',
    justifyContent:'center',
  },
});


export default Summary2;
