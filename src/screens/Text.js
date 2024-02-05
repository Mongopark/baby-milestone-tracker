import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const MultiLineTextInput = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4} // Change the number of lines as needed
        placeholder="Type here..."
        value={text}
        onChangeText={(input) => setText(input)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 120, // Adjust height as needed or use minHeight
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top', // Align text to the top
  },
});

export default MultiLineTextInput;
