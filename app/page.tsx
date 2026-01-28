'use client'
import { CircleCheckBig, Plus, Circle }from 'lucide-react';
import { useState } from 'react';




export default function Home() {
  const [taskInput, setTaskInput] = useState('');
  const [todos, setTodos] = useState<{id: string, text: string, completed:boolean;}[]>([]);

  const handleSaveTask= () => {
    const newTask = {
      id: crypto.randomUUID(),
      text: taskInput,
      completed: false, 

    }
    setTaskInput('');
    setTodos([...todos, newTask]);
    
  }

  const handleToggleTask = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo;
    });
    setTodos(newTodos);

  }
 

  





  return (
  
    <div className='min-h-screen p-4 relative'>
      <div className='max-w-3xl mx-auto p-6 pt-12'>


      


        {/* the header logo and title */}

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <CircleCheckBig className='w-8 h-8' width={54} height={54}/>
          <span className='text-xl font-semibold mt-1'>To Do List</span>

        </div>

        {/* close the header logo and title */}


        {/* the to do list content */}
        <div className='mt-12'>
          <h2 className='text-lg  text-gray-500 uppercase tracking-widest mb-3'> your tasks</h2>
          <div className='h-px bg-gray-700 w-full'></div>
        </div>

        <div className='flex items-center pt-5 pb-4 gap-8  mb-6'>
          <button className=' text-sm font-bold  border-b-2 border-blue-500 -mb-px' >All</button>
          <button>Active</button>
          <button>Done</button>

        </div>


        {/* close the to do list content */}

      



        {/* the add button  */}

        <div className='absolute right-10 bottom-10'>
          <button className='bg-white
          border-2 border-transparent hover:border text-black font-bold py-2 px-4 rounded-full'>
            <Plus className='w-8 h-8' width={54} height={54}/>
          </button>
          
        
        </div>



        {/* close the add button */}
        {/* the add card */}

        <div className='wrapper'>
          <form className='relative' onSubmit={(e) => {
            e.preventDefault();
            handleSaveTask();
          }}>
            <input className='w-full p-2 border border-gray-300 rounded' type="text"
              placeholder='Enter your task' value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>
           <button className='absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded'
        
             
           
           
           >Add</button>



          </form>

           <ul className='mt-9 flex flex-col gap-3'  >
  
            {todos.map((todo) => (
              <li className= {` flex items-center p-4 rounded-lg border cursor-pointer `}
              
              
                onClick={() => handleToggleTask(todo.id)} key={todo.id.toString()}>
                <div>
                  {todo.completed ? (
                  <CircleCheckBig className='w-4 h-4 ' />
                ) : (
                  <Circle className='w-4 h-4' />
                
                )}</div>
                <span ></span>
                <span className={ `pl-2 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>

             
              </li>
            ))}
           </ul>
        </div>

        {/* close the add card */}


      </div>

    </div>



  );
}

