/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({searchText,handleSearchText}) => {
  return (
     <>
     <Navbar searchText={searchText} handleSearchText={handleSearchText}/>
     <ToastContainer theme="dark" />
     <Outlet />
     </>
  )
}

export default MainLayout