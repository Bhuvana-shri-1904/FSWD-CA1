import React from 'react'

function TeamMemberCard({showcases}) {
  return (
    <div className='border m-5 p-10'>
    <h1>{showcases.name}</h1>
    <h2>{showcases.title}</h2>
    </div>

    
  )
}

export default TeamMemberCard