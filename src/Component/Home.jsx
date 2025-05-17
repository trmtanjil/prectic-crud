import React from 'react'
import UserAdd from './UserAdd'
import { useLoaderData } from 'react-router'

function Home() {

 const data =   useLoaderData()
 console.log(data)
  return (
    <div>
      <UserAdd></UserAdd>
    </div>
  )
}

export default Home