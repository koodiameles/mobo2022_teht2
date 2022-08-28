import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text  } from 'react-native';

export default function App() {

  const [playerGuess, setPlayerGuess] = useState("");
  const [playerGuessCount, setPlayerGuessCount] = useState(0);
  const [gameText, setGameText] = useState("Guess a number between 1-100");
  const [winningNumber, setWinningNumber] = useState(0);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    setWinningNumber(randomNumber);
  }, [])


  const guess = () => { 
    var updatedQuessCount = playerGuessCount + 1;
    setPlayerGuessCount(updatedQuessCount)

    var guess = parseInt(playerGuess);
    var targetNumber = parseInt(winningNumber);
    var newText = "";
    if (guess > targetNumber) {
      newText = "Your quess " + playerGuess + " is too high!";
      setGameText(newText);
      setPlayerGuess("")
    } else if (guess < targetNumber) {
      newText = "Your quess " + playerGuess + " is too low!";
      setGameText(newText);
      setPlayerGuess("")
    } else {
      setGameText("CORRECT!");
      Alert.alert("You win! " + "(it took " + playerGuessCount + " guesses)"   );
    }
  };

  return (
    <>
      <View style={styles.containerHeader}>
        <Text style={styles.assignemtHeaderText}>TEHT 2</Text>
        <Text style={styles.assignemtHeaderText}>NUMERON ARVAUS</Text>
      </View>
      <View style={styles.container}>
        {/* <Text style={{color:"white"}}>guess: {playerGuess}</Text> */}
        {/* <Text style={{color:"white"}}>count: {playerGuessCount}</Text> */}
        {/* <Text style={{color:"white"}}>target number:{winningNumber}</Text> */}
        <Text style={{color:"white"}}>{gameText}</Text>
        <TextInput keyboardType="numeric" style={styles.input} onChangeText={playerGuess => setPlayerGuess(playerGuess)} value={playerGuess}/>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <View style={{flex: 1, marginHorizontal: 60}}>
            <Button color="purple" onPress={guess} title="Make Guess" />
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
 
