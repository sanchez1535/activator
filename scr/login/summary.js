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



class Summary extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.space1}>
    </View>
    <View style={styles.images}>
    <View style={styles.one}>
  <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRj8i26X7-9k7FcWTUX65Ulpi5Cw87CQi7izwO_MkOzd-z_3x2h&usqp=CAU'}}
    style={{ height: 70, width: 70, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX6xTAxk_7FwqBlm2bm4J8cC1HQKXJ4X7G8AZkNQXffOXvrL-5&usqp=CAU'}}
    style={{ height: 70, width: 70, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdu9t-qJt5lkZ6R9QQnCwifY6hnmCstIgGCglxw7JfCeaxR5bn&usqp=CAU'}}
    style={{ height: 70, width: 70, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    </View>
    <View style={styles.two}>
  <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHh5yVNX6cCwFv4-15n2cIXnWVJA1kOE9OtpOD-G2DfscUZ4Et&usqp=CAU'}}
    style={{ height: 70, width: 70, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnDFpQu-zSbqIzMSbnpaCw_mwVOR5P5455-tePD2MoogDuMgkh&usqp=CAU'}}
    style={{ height: 70, width: 70, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-TrNy4L6uKE2VMeM79XBAAGjn3Eo6L7CYuTtO_xicvOevefKf&usqp=CAU'}}
    style={{ height: 70, width: 70, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    </View>
    <View style={styles.three}>
  <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZCcypUNjE-rYjPd4TeRcdBQ4qSE96Abib4y62D6rvGj28KNtZ&usqp=CAU'}}
    style={{ height: 70, width: 70, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd7CM8KxBjRTRR2yz79PHkpU_ul4zHpUIpsbB1V-2VJpXaTbi_&usqp=CAU'}}
    style={{ height: 70, width: 70, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo3jJeb0O140UwHUERDsfXigkVLMOQop0aU7Ad6tyHqKPHAFJ3&usqp=CAU'}}
    style={{ height: 70, width: 70, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
    </View>
    </View>
     <View style={styles.text1}>
    <View style={styles.summary}>
    Choose from a variety of different interests provided
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

<Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXtkOFaE136gmmp7t5-bBdSgUtfQSdHiIY9-kBapftvCOi5cZY&usqp=CAU'}}
    style={{ height: 30, width: 30, justifyContent: 'center',margin:5, alignContent: 'center' }}
    />
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
  images:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  one:{
    flexDirection:'row',
  },
  two:{
    flexDirection:'row',
  },
  three:{
    flexDirection:'row',
  },
  space1:{
    flex:0.3,
  },
  summary:{
    textAlign:'center',
    fontSize:30,
    margin:40,
    color:'blue',
  },
  circles:{
    flexDirection:'row',
    justifyContent:'center',
  }, 
});


export default Summary;
