import MoonIcon from './assets/icon-moon.svg';
import SunIcon from './assets/icon-sun.svg';
import AddForm from './components/AddForm';
import BottomNav from './components/BottomNav';
import { useContext, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';





function App() {

const{darkTheme, handleTheme} = useContext(ThemeContext);
const[todos, setTodos] = useState([])


function addTodo(text){
  const newTodo = {
    id: Date.now(),
    text: text,
    complete: false,
  };

  setTodos([...todos, newTodo]);
}

console.log ({todos})

  return ( 
    <div className={` ${darkTheme ? 'bg-slate-900' : 'bg-[#f8f8f8]'}  pb-20 relative`}>
    <div className="bg-light_header_image_mobile lg:bg-light_header_image bg-no-repeat bg-cover h-52 px-10  lg:px-10 pt-10">
      <div className='flex justify-between lg:w-3/6 lg:mx-auto'>
      <p className='text-3xl font-semibold text-white tracking-[6px]'>
          Todo List
          </p>

        <img onClick={handleTheme}
         src={darkTheme ? SunIcon : MoonIcon}
          alt="icon" 
         className='h-5 cursor-pointer'></img>
      </div>
      <div className='mt-8 lg:w-3/6 lg:mx-auto '>
   <AddForm addTodo={addTodo} />
    </div>
    </div>
     <div className={`${darkTheme ? 'bg-[#25273d]' : "bg-white"
    } lg:w-3/6 lg:mx-auto mx-10 relative -top-5 rounded-md`}
    >
   <BottomNav/>
</div>

<div className='flex justify-between items-center px-5 py-3  h-14 text-sm lg:text-[16px] text-[gray] lg:mx-80 rounded-b-md  mx-10 relative  ' >
  Add new task!!
  <button className='focus:font-bold' type="button">
    Clear Completed
  </button>

</div>
    </div>
  )
}

export default App
