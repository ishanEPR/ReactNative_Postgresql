import React,{useEffect,useState} from 'react';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';
import axios from 'axios';

export default function TodoList() {
    const [data,setData]=useState([]);

    const getData =()=>{
        
        axios.get("http://192.168.1.12:4000/getTodos")
        .then((res)=>{

            setData(res.data)
            console.log(res.data);
        })
        .catch((e)=>{
            console.log(e);
        })



    }

    useEffect(()=>{
        getData();


    },[])

    const deletebtn=(id)=>{

        axios.delete("http://192.168.1.12:4000/deleteTodo/"+id);
       setData(data.filter((todo)=>{
           todo.todo_id !==id
       }));

    }

    return (
        <View>
            <Text>Todo List</Text>
            {
                data.map((item)=>(
                    <View key={item.todo_id}>
                        <Text>{item.description}</Text>
                        <TouchableOpacity onPress={()=>editbtn(item.todo_id)}>
                            <Text>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>deletebtn(item.todo_id)}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                ))

            }
            
        </View>
    )
}
