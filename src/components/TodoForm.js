import React ,{useState,useEffect, useRef}from 'react'

function TodoForm(sample) {
    const [input,setInput]=useState('');

    const inputRef=useRef(null)

    useEffect (()=>{
      inputRef.current.focus();
    });
    const handleChange=e=>{
      setInput(e.target.value);
    };

    const handleSubmit =e=>{
      e.preventDefault();

     sample.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
     });

      setInput('');

    };

  return (
   <form className='form' onSubmit={handleSubmit}>
    <input type='text' placeholder='Add a Todo' value={input} name='text' className='todo-input' onChange={handleChange}  ref={inputRef}/>
        <button className='todo-button'>Add</button>
    


   </form>
  );
}

export default TodoForm
