import React, { useState } from "react";
import { TextInput, Button, View } from "react-native";
import { TodoItem } from "../toggle/Toggle";

interface Task {
  id: number;
  completed: boolean;
  text: string;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Doctor Appointment', completed: true },
    { id: 2, text: 'Meeting at School', completed: false },
  ]);

  const [text, setText] = useState<string>('');
  const addTask = () => {
    if (text.trim() === '') return; 
    const newTask: Task = { id: tasks.length+1, text, completed: false };
    setTasks([...tasks, newTask]);
    setText('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          tas={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10 }}
        value={text}
        onChangeText={setText}
        placeholder="New Task"
      />
      <Button
        title="Add Task"
        onPress={addTask}
      />
    </View>
  );
};
export default Todo;
