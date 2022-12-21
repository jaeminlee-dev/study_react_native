/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>hello! I made a RN app</Text>
      {/* 상태표시줄 */}
    </View>
  );
};

//style sheet란
//react native에서는 css를 사용할 수 없다.
//대신 style sheet를 사용한다.
//style sheet는 css와 비슷하게 생겼지만, css와는 다르게 사용한다.
//style sheet는 javascript의 객체이다.
//style sheet는 javascript의 객체이기 때문에, javascript의 변수를 사용할 수 있다.
//또한 자동 완성 기능을 사용할 수 있다.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});

export default App;
