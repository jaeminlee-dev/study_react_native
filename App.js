
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

function App() {
  const [location, setLocation] = useState(null);
  const [ok, setOk] = useState(true);

  useEffect(() => {
    const ask = async () => {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setOk(false);
      }
      const {
        coords: {latitude, longitude},
      } = await Location.getCurrentPositionAsync();
      setLocation({latitude, longitude});
    };
    ask();
  }, []);
  
    return (
      <View style={styles.container}>
        <StatusBar style="dark"></StatusBar>
        <View style={styles.city}>
          <Text style={styles.cityName}>hello</Text>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.tempature}>27</Text>
            <Text style={styles.description}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.tempature}>27</Text>
            <Text style={styles.description}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.tempature}>27</Text>
            <Text style={styles.description}>sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.tempature}>27</Text>
            <Text style={styles.description}>sunny</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1,
    justifyContent: 'center',
  },
  cityName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  weather: {},
  day: {
    justifyContent: 'center',
    width: width,
  },
  tempature: {
    marginTop: 20,
    fontSize: 178,
    textAlign: 'center',
  },
  description: {
    marginTop: -30,
    fontSize: 60,
    textAlign: 'center',
  },
});
