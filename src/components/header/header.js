import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './header.css'
import { BiAlignRight } from "react-icons/bi";

const Header = () => {

  const States = useSelector(state => state);
  const dispatch = useDispatch();

  const openMenu=()=>{
    dispatch({type:"CHANGEMENU",value:true})
  }

  return (
    <div id='MainHeader'>
        <BiAlignRight className='MobileHeaderMenu ltr' onClick={openMenu}/>
        <a className='lightsans coachers selected'>کوچ ها</a>
        <a className='lightsans jobPositions'>موقعیت های شغلی</a>
        <a className='lightsans daneshnameh'>دانشنامه شغلی</a>
        <button className='sans cvmaking'>ساخت رزومه</button>
        <button className='sans loginBTN'>ورود /ثبت نام</button>
    </div>
  )
}

export default Header