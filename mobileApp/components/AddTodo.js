import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,

}from 'react-native';

import axios from 'axios';
export default function AddTodo() {

    const [description,setDescription]=useState('');
    const submit =()=>{

        axios.post("http://192.168.1.11:4000/todo",{description});
    }
    return (
        <View style={styels.list}>
            <TextInput placeholder="add todo"
                style={styels.input}
                onChangeText={(e)=>setDescription(e)}
            />
            <TouchableOpacity  style={styels.btn}
            onPress={submit}
            >
                <Text
                style={{
                    textAlign:'center',
                    marginTop:7,
                    fontSize:16,
                    flex:1,
                }}
                >Add</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styels=StyleSheet.create({
    list:{
        flexDirection:'row'
    },
    input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:250,
    borderRadius:10,
    marginLeft:55,
    },
    btn:{
        backgroundColor:'#00fa9a',
        width:50,
        height:40,
        borderRadius:10,
        marginTop:15,


    }

})
