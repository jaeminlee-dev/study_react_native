import React from 'react';
import {View} from 'react-native';

function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <View style={{flex: 2, backgroundColor: 'tomato'}} />
      <View style={{flex: 5, backgroundColor: 'blue'}} />
      <View style={{flex: 1, backgroundColor: 'orange'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
    </View>
  );
}

export default App;
