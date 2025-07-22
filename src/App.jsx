import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
            <div className="w-[400px] mx-auto mt-12 ">
                <h1 className='text-2xl font-bold'>Manage your todo <span className='text-neutral-600'>@Vikaspal</span></h1>
                <p>Lorem ipsum dolor sit amet, cons Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, id?.</p>
                <input className='border border-neutral-400 mt-2 w-full rounded-xl p-3' type="text" placeholder='Add task i.e Learn Hooks in React' />
                <button className='mt-2 bg-violet-200 py-3 px-5 text-violet-900 rounded-xl flex align-center cursor-pointer'>Create Todos</button>
            </div>
    </>
  )
}

export default App
