import React, { useState } from 'react'
 import { Link, useLoaderData } from 'react-router'
import AllUser from './AllUser'
 
 
function Home() {

 const usersData =   useLoaderData()
 const [users, settUser]=useState(usersData)
 
  return (
    <div>
      
        <div className="max-w-5xl mx-auto p-5 font-sans">
      
      <div className="border-t border-gray-300 my-3"></div>
      
      <div className="mb-4">
        <Link to='adduser' className="text-lg font-medium text-gray-800">New User ▲</Link>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">@Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {
              users.map((user, index)=><AllUser key={user._id}
               user={user}
               index={index} 
              users={users}
                settUser={settUser}
                >
              </AllUser>)
            }
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Home