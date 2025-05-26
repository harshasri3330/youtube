import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
             <>
             
            <div className='col-md-2 sidebar menu'>
            <ul>
              <li><i class="fa fa-music"></i> home</li>
              <li> <Link to="/register">register</Link></li>
              <li><Link to="/list">List</Link></li>
            
            </ul>
            
            </div>
             </>
  )
}
