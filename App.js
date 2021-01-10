import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Jaber');
  const [age, setAge] = useState('23');
  const [people, setPeople] = useState([
    { name: 'jaber', key: '1' },
    { name: 'ayoub', key: '2' },
    { name: 'mohamed', key: '3' },
    { name: 'intissar', key: '4' },
    { name: 'intissar', key: '5' },
    { name: 'intissar', key: '6' },
    { name: 'intissar', key: '7' },
    { name: 'intissar', key: '8' },
    { name: 'Jaber', key: '9' },
    { name: 'AYOUB', key: '10' },
  ]);

  const clickHandler = () => {
    setName('Ahmed');
    setPerson({ name: 'mohamed', age: 38 });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((person) => (
          <View key={person.key}>
            <Text style={styles.person}>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
      {/* <View style={styles.header}>
        <Text style={styles.boldText}>
          My name is {name} and his age is {age}
        </Text>
        <Text>Enter your name:</Text>
        <TextInput
          multiline
          placeholder="e.g. John Doe"
          style={styles.input}
          onChangeText={(e) => setName(e)}
        />
        <Text>Enter your age:</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="e.g. 99"
          style={styles.input}
          onChangeText={(e) => setAge(e)}
        />
      </View> */}

      {/* <View style={styles.buttonContainer}>
        <Button title="click here" onPress={clickHandler} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fae1dd',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    padding: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#1d3557',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#1d3557',
  },
  buttonContainer: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1d3557',
    width: 300,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 3,
    paddingHorizontal: 7,
  },
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#fff',
    fontSize: 24,
    borderRadius: 10,
    color: '#1d3557',
  },
});
