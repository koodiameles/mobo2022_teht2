import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Image, Text } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const plus = () => { 
    let summation = Number(number1) + Number(number2);
    setResult(summation)
  };
  const minus = () => { 
    let deduction = Number(number1) - Number(number2);
    setResult(deduction)
  };


  return (
    <>
      <View style={styles.containerHeader}>
        <Text style={styles.assignemtHeaderText}>TEHT 1 LASKIN</Text>
      </View>
      <View style={styles.container}>
        <Text style={{color:"white"}}>Result: {result}</Text>
        <TextInput keyboardType="numeric" style={styles.input} onChangeText={setNumber1} value={number1}/>
        <TextInput keyboardType="numeric" style={styles.input} onChangeText={setNumber2} value={number2}/>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <View style={{flex: 1, marginHorizontal: 20}}>
            <Button color="green" onPress={plus} title="+" />
          </View>
          <View style={{flex: 1, marginHorizontal: 20}}>
            <Button color="red" onPress={minus} title="-" />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  image : {
    width: 250,
    height: 100
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5,
    color:"white",
  },
  assignemtHeaderText: {
    fontSize: 40,
    color: "white"
  }
});
 
