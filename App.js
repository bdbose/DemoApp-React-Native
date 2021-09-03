import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  BackHandler,
} from 'react-native';

const str =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const App = () => {
  const [more, setMore] = useState(true);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="purple" />
        <Pressable onPress={() => BackHandler.exitApp()}>
          <Image source={require('./assets/back.png')} />
        </Pressable>
        <View style={styles.header}>
          <Image
            style={styles.thumbnail}
            source={require('./assets/home.png')}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>
              How to clear FRA without coaching- Vision IAS
            </Text>
            <View style={styles.video}>
              <Image
                style={styles.videoIcon}
                source={require('./assets/play.png')}
              />
              <Text>10 Videos</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{...styles.title, marginTop: 10, marginBottom: 10}}>
            Introduction
          </Text>
          <Text>
            {str.slice(0, more ? 100 : str.length)}

            <Text onPress={() => setMore(!more)} style={styles.seemore}>
              {more ? '..see more' : ' show less'}
            </Text>
          </Text>
        </View>

        <Card title={'Fundamental Theorem of Arithmetic'} summary="10 Tests">
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              style={styles.lock}
              source={require('./assets/lockgreen.png')}
            />
            <Text>Prime factorization Exercise</Text>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              style={styles.lock}
              source={require('./assets/lockgreen.png')}
            />
            <Text>Fill in the blacks</Text>
          </View>
          <View
            style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
            <Image
              style={styles.lock}
              source={require('./assets/lockred.png')}
            />
            <View>
              <Text>Match the following</Text>
              <Text>starts 14 March</Text>
            </View>
          </View>
        </Card>
        <Card title={'HCF and LCM'} summary="10 Test">
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              style={styles.lock}
              source={require('./assets/lockgreen.png')}
            />
            <Text>Prime factorization Exercise</Text>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              style={styles.lock}
              source={require('./assets/lockgreen.png')}
            />
            <Text>Fill in the blacks</Text>
          </View>
          <View
            style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
            <Image
              style={styles.lock}
              source={require('./assets/lockred.png')}
            />
            <View>
              <Text>Match the following</Text>
              <Text>starts 14 March</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

const Card = ({title, children, summary}) => {
  const [open, setOpen] = useState(false);
  return (
    <View
      style={{
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderColor: 'grey',
        padding: 20,
      }}>
      <Pressable
        onPress={() => setOpen(!open)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
          }}>
          {title}
        </Text>
        <Image
          style={{
            transform: [{rotate: open ? '180deg' : '0deg'}],
            width: 20,
            height: 20,
          }}
          source={require('./assets/down.png')}
        />
      </Pressable>
      {open ? children : <Text>{summary}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  thumbnail: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
  },
  titleWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  video: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10,
  },
  videoIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  seemore: {
    color: 'red',
  },
  lock: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default App;
