import { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

const Todolist = () => {
  const [myTextInput, setMyTextInput] = useState('');
  const [todos, setTodos] = useState([]);

  const onChangeInput = (text) => {
    setMyTextInput(text);
  };

  const onAddTodo = () => {
    if (myTextInput.trim() !== '') {
      const newTodo = {
        id: Math.random().toString(),
        text: myTextInput,
        date: new Date().toLocaleDateString() 
      };
      setTodos([...todos, newTodo]);
      setMyTextInput('');
    }
  };

  const onDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={myTextInput}
          onChangeText={onChangeInput}
          multiline={true}
          numberOfLines={4} 
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={onAddTodo}>
        <Text style={styles.addButtonText}>할 일 추가하기</Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
      <Text style={styles.work}>할 일</Text>
      <ScrollView style={styles.todoList}>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            <View style={styles.todoTextContainer}>
              <Text style={styles.todoText}>{todo.text}</Text>
              <Text style={styles.dateText}>{todo.date}</Text>
            </View>
            <TouchableOpacity onPress={() => onDeleteTodo(todo.id)}>
              <Text style={styles.deleteButton}>삭제</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  work:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'lightgray',
    fontSize: 18,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top', 
    borderRadius: 25,
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent:'center',
    alignSelf: 'flex-start', 
    marginLeft:'auto'
  },
  addButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  todoList: {
    flex: 1,
    marginTop: 20
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 20,
  },
  todoTextContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 18,
  },
  dateText: {
    fontSize: 12,
    color: 'gray',
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
  divider: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 20,
  },
});

export default Todolist;
