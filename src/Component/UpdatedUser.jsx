import React  from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
 

function UpdatedUser() {
    const {_id, name, email,gender,status } = useLoaderData();
    
  const [genderf, setgender] = useState(gender);
  const [statuss, setstatuss] =useState(status)
    
  

    const handelUpdetedUser=e=>{
        e.preventDefault();
        const form =e.target;
        const formdata = new FormData(form);
        const newForm = Object.fromEntries(formdata.entries())
        console.log(newForm)

 fetch(`http://localhost:5000/users/${_id}`,{
    method:'PUT',
    headers:{
      'content-type' :'application/json'
    },
    body:JSON.stringify(newForm)
  })
  .then(res =>res.json())
  .then(data=>{
    if(data.modifiedCount){
      console.log(data)
                Swal.fire({
        
        icon: "success",
        title: "Coffe added succesfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })

    }
  return (
    <div>
           <form onSubmit={handelUpdetedUser}
        className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6"
      >
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             defaultValue={name}
              type="text"
              placeholder="Java Dakhale"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             defaultValue={email}
              type="email"
              placeholder="jaya@gmail.com"
            />
          </div>

     <div className="mb-4">
  <span className="block text-gray-700 text-sm font-bold mb-2">Gender</span>
  <div className="flex items-center space-x-4">
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio text-blue-600"
        name="gender"
        value="male"
        checked={genderf === "male"} // Controlled Input
        onChange={(e) => setgender(e.target.value)}
      />
      <span className="ml-2">Male</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio text-blue-600"
        name="gender"
        value="female"
        checked={genderf === "female"} // Controlled Input
        onChange={(e) => setgender(e.target.value)}
      />
      <span className="ml-2">Female</span>
    </label>
  </div>
</div>

<div className="mb-4">
  <span className="block text-gray-700 text-sm font-bold mb-2">Status</span>
  <div className="flex items-center space-x-4">
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio text-blue-600"
        name="status"
        value="active"
        checked={statuss === "active"} // Controlled Input
        onChange={(e) => setstatuss(e.target.value)}
      />
      <span className="ml-2">Active</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio text-blue-600"
        name="status"
        value="inactive"
        checked={statuss === "inactive"} // Controlled Input
        onChange={(e) => setstatuss(e.target.value)}
      />
      <span className="ml-2">Inactive</span>
    </label> </div>
</div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdatedUser