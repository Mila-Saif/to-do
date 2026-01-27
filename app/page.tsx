import { CircleCheckBig, Plus }from 'lucide-react';

export default function Home() {
  return (
  
    <div className='min-h-screen p-4 relative'>

      {/* the header logo and title */}

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <CircleCheckBig className='w-8 h-8' width={54} height={54}/>
        <span className='text-xl font-semibold mt-1'>To Do List</span>

      </div>

      {/* close the header logo and title */}

      {/* the add button  */}

      <div className='absolute right-10 bottom-10'>
        <button className='bg-white
         border-2 border-transparent hover:border text-black font-bold py-2 px-4 rounded-full'>
          <Plus className='w-8 h-8' width={54} height={54}/>
        </button>
        
       
      </div>

      {/* close the add button */}





    

    </div>



  );
}

