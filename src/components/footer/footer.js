import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div id="footer" className='sans'>
        <div id='col1' className='bakhsh'>
            <h1>خدمات</h1>
            <h2>کوچینگ شغلی</h2>
            <h2>موقعیت های شغلی</h2>
            <h2>دانشنامه شغلی</h2>
        </div>
        <div id='col2' className='bakhsh'>
            <h1>پشتیبانی</h1>
            <h2>سوالات متداول</h2>
            <h2>درباره ما</h2>
        </div>
        <div id='col3' className='bakhsh'>
            <h1>تماس با ما</h1>
            <h2>آدرس ایمیل:  mohammad7979salehi@gmail.com</h2>
            <h2>تلفن :09166366715</h2>
        </div>
        <div id='underFooter'>
            <p>CopyRighted by Mohammad salehi</p>
        </div>
    </div> 
  )
}

export default Footer