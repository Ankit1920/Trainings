import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
       <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
           <div className='container'>
               <Link to="/" className='navbar-brand'>
                   User List
               </Link>
               <div>
                   <Link to="/users/add" className="btn btn-light ml-auto">
                       Add User
                   </Link>
               </div>
           </div>
       </nav>
    )
}
