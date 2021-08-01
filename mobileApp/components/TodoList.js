import React,{useEffect,useState} from 'react';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
}from 'react-native';
import axios from 'axios';

export default function TodoList() {
    const [data,setData]=useState([]);
  
  

    useEffect(()=>{
        axios.get("http://192.168.1.11:4000/getTodos")
        .then((res)=>{

            setData(res.data)
            console.log(res.data);
           
        })
        .catch((e)=>{
            console.log(e);
        })


    },[])

    const deletebtn=(id)=>{

        axios.delete("http://192.168.1.12:4000/deleteTodo/"+id);
       setData(data.filter((todo)=>{
           todo.todo_id !==id
       }));

    }

    return (
        <View>


        
            

        <ScrollView style={{marginLeft:10,margin:5}}>
                <View  style={styles.list}>
                                
                        <Text style={[styles.rowh,{marginLeft:20,fontWeight:'bold',color:'#000080'}]}>Id</Text>
                        <Text style={[styles.rowh,{marginLeft:-50,fontWeight:'bold',color:'#000080'}]}>Description</Text>
                        <Text style={[styles.rowh,{fontWeight:'bold',marginLeft:40,color:'#000080'}]}>Actions</Text>
                       
                                
                    </View>  
           
            {
                data.map((item)=>(
                    <View  style={styles.list} key={item.todo_id}>
                    
                        <Text style={[styles.row,{marginLeft:20,color:'#b0c4de'}]}>{item.todo_id}</Text>
                        <Text style={[styles.row,{marginLeft:-60,color:"#b0c4de"}]}>{item.description}</Text>
                        <View style={[styles.rowbtn,{marginLeft:10}]}>
                            <TouchableOpacity
                            style={{
                                borderRadius:10,
                                backgroundColor:'#ffd700',
                                marginRight:10,
                                width:40,
                                height:20,
                                
                            }}
                            >
                                <Text
                                
                                style={{textAlign:'center',
                                justifyContent:'center',
                                color:'#000'
                                }}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            
                            style={{
                                borderRadius:10,
                                backgroundColor:'#f08080',
                                marginLeft:10,
                                width:60,
                                height:20,
                            }}
                            >
                                <Text style={{textAlign:'center',
                                justifyContent:'center',
                                color:'#000'
                                }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))

            }
            </ScrollView>
            
        </View>
    )
}

const styles=StyleSheet.create({
    list:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderBottomWidth:0.5,
      
        marginTop:5,
    },
    rowh:{
        backgroundColor:'#fff',
        flex:1,
       // paddingHorizontal:2,
        paddingVertical:20,
        fontSize:18,
       

    },
   
    row:{
        backgroundColor:'#fff',
        flex:1,
     //   paddingHorizontal:2,
        paddingVertical:30,

    },
    rowbtn:{
        backgroundColor:'#fff',
        flex:1,
        flexDirection:'row',
     //   paddingHorizontal:2,
        paddingVertical:20,
        marginTop:15,

    }
})
