import React from 'react'
import './header.css'
import { BiAlignRight } from "react-icons/bi";

const Header = () => {
  return (
    <div id='MainHeader'>
        <BiAlignRight className='MobileHeaderMenu ltr'/>
        <a className='lightsans coachers selected'>کوچ ها</a>
        <a className='lightsans jobPositions'>موقعیت های شغلی</a>
        <a className='lightsans daneshnameh'>دانشنامه شغلی</a>
        <button className='sans cvmaking'>ساخت رزومه</button>
        <button className='sans loginBTN'>ورود /ثبت نام</button>
    </div>
  )
}

export default Header