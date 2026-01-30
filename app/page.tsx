'use client'
import { CircleCheckBig, Plus, Circle, Trash }from 'lucide-react';
import { useState } from 'react';




export default function Home() {
  const [taskInput, setTaskInput] = useState('');
  const [todos, setTodos] = useState<{id: string, text: string, completed:boolean, priority: string}[]>([]);
  const [priority, setPriority] = useState('meduim');
  const [isModaleOpen, setIsModaleOpen] = useState(false);

  const handleSaveTask= () => {
    if (!taskInput.trim()) return;
      const newTask = {
        id: crypto.randomUUID(),
        text: taskInput,
        completed: false, 
        priority: priority

      }
    setTaskInput('');
    setTodos([...todos, newTask]);
    setPriority('meduim');
    
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

  const handleDeleteTask = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
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

      



        {/* the add card */}

        <div className='wrapper'>
          <form className='flex items-center border rounded-lg overflow-hidden focus-within:ring-2 ring-blue-500'  onSubmit={(e) => {
            e.preventDefault();
            setIsModaleOpen(true);
          }}>
            <input className='w-full p-2 outline-none border-non text-gray-400' type="text"
              placeholder='Enter your task' value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>
           <button
           type='submit'
           className={` bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded  $ {isModaleOpen ? 'bg-blue-700' : ''}`}
          

           
            
        
             
           
           
           >Add</button>



          </form>
          
          {isModaleOpen && (
            <div className='fixed inset-0 z-50 flex items-center justify-center '>
              <div className='absolute inset-0 bg-black/50 '
              onClick={() => setIsModaleOpen(false)}/>
              <div className='relative text-black bg-white/90 p-8 backdrop-blur-2xl rounded-2xl shadow-xl text-center w-64'>
                <h3 className='font-bold mb-4'>Select Priority</h3>

                <div className='flex flex-row gap-2 mt-4 mb-8 justify-center'>
                  <button onClick={() => setPriority('high')} className=' bg-red-50 text-red-700 border-red-200 border-2 px-4 rounded-md hover:border-red-700 activ-red-700 focus:ring-2 focus:ring-red-700'>High</button>
                   <button onClick={() => setPriority('medium')} className='bg-amber-50 text-amber-700 border-amber-200 border-2 px-4 rounded-md hover:border-amber-500 activ-amber-500 focus:ring-2 focus:ring-amber-500 '>Medium</button>
                    <button onClick={() => setPriority('low')} className='bg-emerald-50 text-emerald-700 border-emerald-200 border-2 px-4 rounded-md hover:border-emerald-500 focus:ring-2 focus:ring-emerald-500'>Low</button>
                </div>
                <div>

                    <button
                    onClickCapture={() => {
                      handleSaveTask();
                      setIsModaleOpen(false);
                    
                    }} 

                  
                     className='bg-blue-500  hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded'>confirm
                  
                    
                     </button>
                </div>
              </div>
            </div>


            
       
            
          )}

           



          


     

           <ul className='mt-9 flex flex-col gap-3'  >
  
            {todos.map((todo) => (
              <li className= {` flex items-center p-4 rounded-lg border border-slate-500 cursor-pointer `}
              
              
                onClick={() => handleToggleTask(todo.id)} key={todo.id}>
                <div className='flex items-center gap-1' >
                  {todo.completed ? (
                  <CircleCheckBig className='w-4 h-4 ' />
                ) : (
                  <Circle className='w-4 h-4' />
                
                )}
                 <span className={ `pl-2 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>

                
                </div>

                <div className='flex items-center gap-4 ml-auto'>

                  
                  <div className='flex flex-row'>
                   

                    <span className={`  ${todo.priority === 'high' ? ' text-red-700 border-red-200 border-2 px-4 rounded-md'
                       : todo.priority === 'medium' ? 'text-amber-700 border-amber-200 border-2 px-4 rounded-md' : 
                       todo.priority === 'low' ? 'text-emerald-700 border-emerald-200 border-2 px-4 rounded-md' : ''}`}>{todo.priority}</span>  

                    
                  </div>
                  
                

                  <button onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteTask(todo.id);
                  }}
                  
                  

                  >
                    <Trash className='w-4 h-4 hover:text-red-700' />
                  </button>


                </div>


             
              </li>
            ))}
           </ul>
        </div>

        {/* close the add card */}


      </div>

    </div>



  );
}

