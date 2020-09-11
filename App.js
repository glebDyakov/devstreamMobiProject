import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, Text, View } from 'react-native';

const navigateScreen=(props,src)=>{
  props.navigation.navigate("Second",{
    src:src
  })
}

export default async function App() {
  const listOfImages=await fetch("https://api.unsplash.com//users/jupp/photos?client_id=36c2RU3KTYhSodK4SyqOyYwq_zMFYKyEQPPpIKudA4Y")
  return (
    <ScrollView style={styles.container}>
      <Text>List of images</Text>
      {
            listOfImages.map(image=>{
      <Text>Автор: {image.name}</Text>
      <Text>Автор: {listOfImages.username}</Text>
      <Image style={styles.myImage} onPress={()=>navigateScreen(props,image.urls.raw)} source={{uri:image.urls.raw}} />
            
            })
      }
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myImage:{
    width:150,
    height:150,
  }
});
