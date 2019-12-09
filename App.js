import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, AppState } from 'react-native';

export default function App() {
  const  [intialScroll, setScroll ] = useState([]);

  function getScrollNum(){
    var scrolled = document.documentElement.scrollTop || document.body.scrollTop;
    setScroll(scrolled);

  }
  useEffect(()=>{
    AppState.addEventListener('scroll', getScrollNum);
  })

  return (
    <View style={styles.container}>
      <Text>scroll value is : { intialScroll } </Text>
      <Text> 
          
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50
  },
});
