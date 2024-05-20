
import AdminNavbar from "../../components/admin/AdminNavbar"
import AdminSidebar from "../../components/admin/AdminSidebar"
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AdminDashboard from '../../components/admin/AdminDashboard';

const Admin=()=>{
 const navigate = useNavigate();
 const location = useLocation();

 const linkstart = location.pathname.substring(0, location.pathname.indexOf('-'));
console.log(linkstart)
    useEffect(  ()=>{

        if(!localStorage.getItem('token')){
            navigate(`${linkstart}/login`)
          } 

      },[localStorage.getItem('token')]);

    return (
      <div className='relative'>
        <AdminNavbar/>
        <div className="w-full flex">
        <div className="flex items-start justify-between w-full mt-[4.5rem]">
          <div className="w-[80px] md:w-[300px] sticky top-[5rem]">
            <AdminSidebar active={1} />
          </div>
          <div className="flex flex-col justify-center relative w-full p-4  mt-2">
            <div>
            <AdminDashboard />
            {/* <AddLocationPopup/> */}
            </div>
           
          </div>
        </div>
      </div>
      </div>
        

    )
}

export default Admin