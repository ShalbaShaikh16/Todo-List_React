import React ,{useState}from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
function Todolist() {

    const [todos,setTodo]=useState([])

    const addTodo=todo=>{
        if(!todo.text||/^\s*$/.test(todo.text)){
            return;
        }
        const newtodo=[todo,todos]
        setTodo(newtodo)
    };

    const updateTodo=(todoId,newVAlue)=>{
        if(!newVAlue.text||/^\s*$/.test(newVAlue.text)){
            return;
        }
        setTodo(prev=>prev.map(item=>(item.id==todoId ?newVAlue:item))
    );
    }

    const removeTodo = id =>{
        const removeArr =[...todos].filter(todo=> todo.id !==id)
        setTodo(removeArr)
    }

    const completeTodo=id=>{
        let updateTodos=todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete=!todo.isComplete
            }
            return todo;
        });
        setTodo(updateTodos);
    }

  return (
    <div>
        <h1>Todo-List</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default Todolist
