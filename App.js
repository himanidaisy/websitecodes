import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  View,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

import {Searchbar} from 'react-native-paper';

const App = () => {
  const [searchq, setsearchq] = useState('');
  const onChangeSearch = query => setsearchq(query);
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#aeaeae', 'white']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View>
          <Image
            style={{
              width: 40,
              height: 40,
              position: 'relative',
              left: width / 1.2,
              top: 80,
            }}
            source={require('./crown.png')}
          />
          <Text
            style={{
              fontSize: 45,
              color: 'black',
              fontWeight: 'bold',
              position: 'relative',
              left: 30,
            }}>
            Good Evening
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'grey',
              fontWeight: 'bold',
              position: 'relative',
              left: 35,
            }}>
            Welcome back
          </Text>
        </View>
        <Image
          style={{
            width: width - 70,
            height: height / 6,
            borderRadius: 5,

            position: 'relative',

            left: 30,
            resizeMode: 'contain',
          }}
          source={require('./banner.png')}
        />
        <Searchbar
          placeholder="Search through your scans"
          onChangeText={onChangeSearch}
          style={{
            position: 'relative',
            top: 10,
            left: 30,
            borderRadius: 20,
            width: width / 1.15,
            height: height / 17,
          }}
          value={searchq}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Image
              style={{
                resizeMode: 'contain',
                width: 50,
                height: 50,
                position: 'relative',
                left: width / 6,
                top: width / 8,
              }}
              source={require('./Vector.png')}
            />

            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
                position: 'relative',
                left: width / 7,
                top: width / 6,
              }}>
              Single Scan
            </Text>
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Image
              style={{
                resizeMode: 'contain',
                width: 35,
                height: 35,
                position: 'relative',
                left: width / 6,
                top: width / 7,
              }}
              source={require('./Vector.png')}
            />
            <Image
              style={{
                resizeMode: 'contain',
                width: 35,
                height: 35,
                position: 'relative',
                left: width / 5.3,
                top: width / 20,
              }}
              source={require('./Vectorb.png')}
            />

            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
                position: 'relative',
                left: width / 9,
                top: width / 7.7,
              }}>
              Batch Scan
            </Text>
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Image
              style={{
                resizeMode: 'contain',
                width: 35,
                height: 35,
                position: 'relative',
                left: width / 10,
                top: width / 7,
              }}
              source={require('./Vector.png')}
            />

            <Image
              style={{
                resizeMode: 'contain',
                width: 30,
                height: 30,
                position: 'relative',
                left: width / 8,
                top: width / 20,
              }}
              source={require('./Vectortb.png')}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
                position: 'relative',
                left: width / 18,
                top: width / 7,
              }}>
              Scan to Text
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
              position: 'relative',
              left: width / 12,
              top: width / 5.5,
            }}>
            Recent Scans
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              style={{
                width: width / 2.5,
                height: height / 4,
                position: 'relative',
                left: width / 10,
                top: width / 4,
                borderRadius: 10,
              }}
              source={require('./Image.jpeg')}
            />
            <View
              style={{
                backgroundColor: 'skyblue',
                width: 80,
                height: 30,
                top: width / 1.5,
                right: width / 4,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  marginTop: 3,
                }}>
                2d ago
              </Text>
            </View>
            <Image
              style={{
                width: width / 2.5,
                height: height / 4,
                position: 'relative',
                left: width / width - 10,
                top: width / 4,
                borderRadius: 10,
              }}
              source={require('./images.jpg')}
            />
            <View
              style={{
                backgroundColor: 'skyblue',
                width: 80,
                height: 30,
                top: width / 1.5,
                right: width / 2.7,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  marginTop: 3,
                }}>
                2d ago
              </Text>
            </View>
            <Image
              style={{
                width: width / 2.5,
                height: height / 4,
                position: 'relative',
                left: width / width - 65,
                top: width / 4,
                borderRadius: 10,
              }}
              source={require('./images.jpg')}
            />
            <View
              style={{
                backgroundColor: 'skyblue',
                width: 80,
                height: 30,
                top: width / 1.5,
                right: width / 2.1,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  marginTop: 3,
                }}>
                2d ago
              </Text>
            </View>
          </View>
        </ScrollView>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
              position: 'relative',
              left: width / 10,
              top: width / 2,
            }}>
            Folders
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
});
export default App;
