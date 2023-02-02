import React, { useState } from "react";
import { ToDoForm } from "../ToDoForm";
import { ToDo } from "../ToDo";

export function ToDoList(){

    const [toDos, setToDos] = useState<any[]>([]);

    const addToDo = (toDo: any) =>{
        
        if (toDo.text) { 
            const newToDos = [toDo, ...toDos];
            setToDos(newToDos);
            console.log(newToDos)
        }

    }

    const removeToDo = (id:any) => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id);
        setToDos(removeArr);
    }

    const updateToDo = (toDoId: any, newValue: any) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setToDos(prev => prev.map(item => (item.id === toDoId ? newValue : item)))
    }

    return ( 
        <>
            <h1> What's your plan for today? </h1> 
            <ToDoForm onSubmit={addToDo} /> 
            <ToDo toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo} />
        </>
    )


}