import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router'

function MainRout() {
  return (
    <div>
        <Header></Header>
        <div>
            <Outlet></Outlet>
        </div>

    </div>
  )
}

export default MainRout