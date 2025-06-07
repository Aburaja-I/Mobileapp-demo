import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    if (name && email) {
      Alert.alert('Signed Up', `Welcome, ${name}!`);
    } else {
      Alert.alert('Error', 'Please enter name and email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Page</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default SignupScreen;
