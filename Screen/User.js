import { View, Text, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const User = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>할 일이 너무 많으세요?</Text>
      <Text style={styles.message1}>지금 바로 작성하러 가세요!!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Todolist', {});
          }}
        >
          <Text style={styles.buttonText}>To-do List 바로가기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Calender', {});
          }}
        >
          <Text style={styles.buttonText}>캘린더 바로가기</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('OpenAI', {});
          }}
        >
          <Text style={styles.buttonText}>ChatGPT 바로가기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Youtube', {});
          }}
        >
          <Text style={styles.buttonText}>추천 영상 보러가기</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-Qg5km1kpGE')}>
          <Text style={styles.linkText}>백예린 노래 듣고 힐링하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    marginTop: 180,
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  message1: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'pink',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 3
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomContainer: {
    alignItems: 'flex-end',
    marginTop: 'auto',
    marginBottom: 20,
  },
  linkText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginTop:80
  },
});

export default User;
