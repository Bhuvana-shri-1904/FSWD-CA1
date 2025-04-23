import React from 'react'
import TeamMemberCard from './components/TeamMemberCard'
import './App.css'

const showcase = [
  {
    name : 'John Doe',
    title : 'Software Engineer'
  },
  {
    name : 'Rahul',
    title : 'doctor'
  }
];

function App() {
  return (
    <>
     <h1 className='flex justify-center font-bold text-2xl underline'>Team Showcase</h1>
     {showcase.map((showcases,i)=>(
      <TeamMemberCard key = {i} showcases={showcases}/>
     ))}
     </>
  )
}

export default App
