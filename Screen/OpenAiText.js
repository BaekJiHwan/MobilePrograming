import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const OpenAI = () => {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  const generateText = async () => {
    const prompt = text;
    const apiKey = '';
    const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };

    const data = {
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0.7,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setResponse(result.choices[0].text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatGPT한테 물어보기</Text>
      <TextInput
        style={styles.input}
        placeholder="내용을 입력하세요"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button
        title="질문하기"
        onPress={generateText}
        color="pink"
        style={styles.button}
      />
      <Text style={styles.response}>{response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    padding: 8,
    width: '100%',
    marginBottom:20,
    borderRadius:20
  },
  button: {
    marginTop: 20,
  },
  response: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default OpenAI;
