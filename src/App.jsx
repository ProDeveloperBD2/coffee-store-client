import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './components/CoffeeCards/CoffeeCards';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffees)
  return (
    <div className='p-4'>
      <h1 className='text-5xl font-bold text-center text-[#E3B577]'>HOT HOT COFFEE & TEE</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCards key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCards>)
        }
      </div>
    </div>
  )
}

export default App
