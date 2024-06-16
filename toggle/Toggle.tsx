import React
 from "react";
 import { View, Text,  Button, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native";
interface Task{
    id:number,
    completed:boolean,
    text:string
} 
interface Props {
    tas: Task;
    deleteTask: (id: number) => void;
    toggleCompleted :(id:number) =>void
  }
 export const TodoItem :React.FC<Props>  = ({tas,deleteTask,toggleCompleted})=>{
    return(
        <View style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', 
            marginBottom: 1, 
            padding: 1,
            borderWidth: 1,
             borderColor: '#ddd',
             borderRadius: 4,
          }}>
    
               <Text style={{
      marginRight: 1,
      color: '#333', 
      textDecorationLine:  'line-through' 
    }}>
        {tas.text}
      </Text>
      <TouchableOpacity
      style={{
        backgroundColor: 'black', 
        paddingVertical: 1,
        paddingHorizontal: 1,
        borderRadius: 4,
        cursor: 'pointer', 
      }}
      onPress={() => deleteTask(tas.id)} 
    >
        <Text style={{ color: '#fff' }}>deleteTask</Text>
      </TouchableOpacity>    
      </View>)
 }