import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa6'
import { Link } from 'react-router';
import Swal from 'sweetalert2';

function AllUser({user,index,users,settUser}) {

  const handdleDelet=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    
    
   // user delet fetch 
    fetch(`http://localhost:5000/users/${id}`,{
      method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
       const remailningUsers = users.filter(use => use._id !==id );
    settUser(remailningUsers)
      if(data.insertedon){
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"    
    });
     
      }
    })


  }
});

  }
 
 
  return (
             <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-200">{index+1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-200">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-200">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-200">{user.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-200">{user.status}</td>
          
               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-200 flex gap-4">
                <button onClick={()=>handdleDelet(user._id)} className='btn btn-secondary'><FaTrash></FaTrash> </button>
               <Link  to={`/updateduser/${user._id}`}> <button className='btn btn-primary'><FaEdit></FaEdit></button></Link>
                
                </td>
        
            </tr>
  )
}

export default AllUser