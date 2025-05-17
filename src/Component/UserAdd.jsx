// import React, { useState } from "react";

import Swal from "sweetalert2";

function UserAdd() {
  // const [isAvailable, setIsAvailable] = useState(false); // Checkbox state

  const handelAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const newUser = Object.fromEntries(formdata.entries());

    // Checkbox value add
    // newUser.isAvailable = isAvailable;
    console.log(newUser);
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
          'Content-Type': 'application/json',
      },
      body:JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>{
     if(data.insertedId){
      Swal.fire({
   
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

     }
      console.log('after adding user ', data)
    })

  };

  return (
    <>
      <form
        onSubmit={handelAddUser}
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
              id="name"
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
              id="email"
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
                  defaultChecked
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  name="gender"
                  value="female"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <span className="block text-gray-700 text-sm font-bold mb-2">Status</span>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  name="status"
                  value="active"
                  defaultChecked
                />
                <span className="ml-2">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  name="status"
                  value="inactive"
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>

          {/* Checkbox for Availability */}
          {/* <div className="mb-4 flex items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-2">
              Available:
            </label>
            <input
              type="checkbox"
              checked={isAvailable}
              onChange={(e) => setIsAvailable(e.target.checked)}
            />
          </div> */}

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
    </>
  );
}

export default UserAdd;
