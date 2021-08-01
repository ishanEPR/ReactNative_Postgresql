import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerList}>PERN Todo List</Text>
      <AddTodo/>
      <TodoList/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //  alignItems: 'center',
    //justifyContent: 'center',
  },
  headerList:{

    fontSize:20,
    textAlign:'center',
    color:'#191970',
    fontWeight:"bold",
    marginTop:50,
    
},

});
