import React ,{useState,useEffect} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Slides from '../slides/slides'
import Questions from '../questions/questions'
import Footer from '../footer/footer'
import Slider from '../slider/slider';
import './main.css'
import { m } from 'framer-motion';

const Main = () => {
  const data=[
    {
      title:"چرا کوچینگ یا مشاوره شغلی ؟",
      desc:"کوچینگ شغلی یا همان مشاوره شغلی تلنت کوچ در واقع ترکیبی از تراپی شغلی و منتورینگ تخصصی است. هر راهکار ترکیبی مشخصی از تراپی و منتورینگ را شامل می‌شود ولی در مجموع در تمامی راهکار ۳ فاز اصلی برای کوچی(کاربری که از خدمات کوچینگ استفاده می‌کند) ارائه خواهد شد: ۱- ارزیابی چالش کاری ۲- ارائه و بررسی راه حل‌های متناسب ۳- برنامه اقدام برای حل چالش"
    },
    {
      title:"تفاوت مشاور ، کوچ و مستر کوچ چیست ؟",
      desc:"متخصصین ما بر اساس میزان سابقه کار و سطح تخصصی که دارند در ۳ سطح مشاور، کوچ و مسترکوچ طبقه‌بندی شده‌اند. کیفیت ارائه خدمات کوچینگ شغلی در تمامی سطوح بر اساس استاندارد‌های این حوزه توسط کاردیکس تضمین می‌شود."
    },
    {
      title:"متخصص خودم را چگونه پیدا کنم؟",
      desc:"ما پیشنهاد می‌کنیم برای انتخاب متخصص متناسب با چالش کاری خود مراحل زیر را دنبال کنید: ۱- انتخاب راهکار ۲- انتخاب سطح تجربه متخصص(مشاور،‌کوچ، مسترکوچ) ۳- انتخاب متخصصن بر اساس حوزه کاری و سوابق کاری"
    },
    {
      title:"نحوه برگزاری جلسات چگونه است ؟",
      desc:"جلسات به ۲ صورت آنلاین و ویدئویی برگزار خواهند شد. جلسات آنلاین در بستر اسکایپ انجام خواهد شد که در لینک آن را پشتیبان پس از هماهنگی روز و تاریخ جلسه ارسال خواهد کرد. جلسات ویدئویی برای آن دسته از افرادی مناسب است که حضور در جلسه در راس یک تاریخ و زمان مشخص شاید چالش برانگیز باشد. این دسته از افراد صرفا روز جلسه را انتخاب خواهند کرد و در طی آن روز وقت دارند تا در قالب ویس یا ویدئو سلفی چالش کاری خود را برای متخصصین ما در بستر اسکایپ ارسال کنند. متخصصین ما حداکثر پس از ۲۴ ساعت، پاسخ خود را در قالب یک ویدئو سلفی برای کاربر ارسال خواهد کرد. کاربر می‌تواند نسبت به ویدئو ارسالی متخصصین،‌ سوالات و ابهامات خود را مطرح کنند و متخصصین ما نیز پاسخگو خواهند بود."
    }
  ]
  const data1=[
    {
        address:'image/L1.png',
        desc:"سطح 1، 250 هزار تومان!"
    },
    {
        address:'image/L2.png',
        desc:"سطح 2، 450 هزار تومان!"
    },
    {
        address:'image/L3.png',
        desc:"سطح 3، 650 هزار تومان!"
    }
]

  const States = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(States.IsOpenMenu===false){
      document.getElementById('hidder').style.display='none'
      document.getElementById("mobileMMenu").style.transform = "translate(0%,0px)";
    }
    if(States.IsOpenMenu===true){
      document.getElementById('hidder').style.display='block'
      document.getElementById("mobileMMenu").style.transform = "translate(-100%,0px)";

    }
  },[States.IsOpenMenu])

  const changeOpen=()=>{
    dispatch({type:"CHANGEMENU",value:false})
  }

  const scrl=()=>{
    // window.scroll(0,100)
  }

  return (
    <div id='mainDiv'>
      <div id='Row1Div' className='sans'>
        <h1>کوچینگ شغلی، راهکار توسعه فردی و ارتقا شغلی</h1>
        <button className='sans' onClick={scrl}>کوچ فردی</button>
      </div>
      <div id='Row2Div'>
        <div id='KouftElement'>
          <h1 className='sans'>چطور کوچینگ شغلی به شما کمک میکنه؟</h1>
          <h2 className='sans'>سرویس کوچینگ و مشاوره شغلی</h2>
          <button className='sans'>طراحی مسیر شغلی</button>
          <button className='sans'>ارزیابی رزومه فارسی /انگلیسی</button>
          <button className='sans'>ارتقای شغلی</button>
          <button className='sans'>آمادگی برای مصاحبه منابع انسانی</button>
          <button className='sans'>آمادگی برای مصاحبه تکنیکال</button>
          <button className='sans'>ارزیابی رزومه انگلیسی</button>
        </div>
      </div>
      <div id='Row3Div'>
        <h1 className='sans'>راه های کوچینگ شغلی</h1>
        <h2 className='sans'>تمام راه ها در سه سطح ارائه شده اند</h2>
        <Slider data={data1}/>
      </div>
      <div id='Row6Div'>
        <h1 className='sans'>در چه سطحی نیاز به کوچینگ شغلی دارید؟</h1>
        <h2 className='sans'>سطح متخصصین بر اساس میزان تجربه و سابقه کاری آن‌ها تفکیک شده است</h2>
      </div>
      <div id='Row4Div'>
        <Slides BoxTitle="طراحی مسیر شغلی" Desc="تصمیم گیری بین علاقه، استعداد و پتانسیل کاری در آینده از بین تصمیمات موجود کار راحتی نیست. شما بر اساس علاقه و اهدافتون ارزیابی میشوید و در ادامه بهترین شغل توسط متخصصین ما به شما پیشنهاد میشود." />
        <Slides BoxTitle="طراحی مسیر شغلی" Desc="تصمیم گیری بین علاقه، استعداد و پتانسیل کاری در آینده از بین تصمیمات موجود کار راحتی نیست. شما بر اساس علاقه و اهدافتون ارزیابی میشوید و در ادامه بهترین شغل توسط متخصصین ما به شما پیشنهاد میشود." />
        <Slides BoxTitle="طراحی مسیر شغلی" Desc="تصمیم گیری بین علاقه، استعداد و پتانسیل کاری در آینده از بین تصمیمات موجود کار راحتی نیست. شما بر اساس علاقه و اهدافتون ارزیابی میشوید و در ادامه بهترین شغل توسط متخصصین ما به شما پیشنهاد میشود." />
        <Slides BoxTitle="طراحی مسیر شغلی" Desc="تصمیم گیری بین علاقه، استعداد و پتانسیل کاری در آینده از بین تصمیمات موجود کار راحتی نیست. شما بر اساس علاقه و اهدافتون ارزیابی میشوید و در ادامه بهترین شغل توسط متخصصین ما به شما پیشنهاد میشود." />
        <Slides BoxTitle="طراحی مسیر شغلی" Desc="تصمیم گیری بین علاقه، استعداد و پتانسیل کاری در آینده از بین تصمیمات موجود کار راحتی نیست. شما بر اساس علاقه و اهدافتون ارزیابی میشوید و در ادامه بهترین شغل توسط متخصصین ما به شما پیشنهاد میشود." />
        <Slides BoxTitle="طراحی مسیر شغلی" Desc="تصمیم گیری بین علاقه، استعداد و پتانسیل کاری در آینده از بین تصمیمات موجود کار راحتی نیست. شما بر اساس علاقه و اهدافتون ارزیابی میشوید و در ادامه بهترین شغل توسط متخصصین ما به شما پیشنهاد میشود." />
      </div>
      <div id='Row5Div'>
        <h1 className='sans'>سوالات متداول</h1>
        <h2 className='sans'>پرسش و پاسخ‌هایی که به شما کمک می‌کنند تا انتخاب بهتری داشته باشید</h2>
        {
          data.map((item,index)=>(
            <Questions key1={index} title={item.title} desc={item.desc}/>
          ))
        }
      </div>

      <div id='hidder' onClick={changeOpen}>

      </div>
      <div id='mobileMMenu'>
        <a className='MenuLink sans'>کوچینگ شغلی</a>
        <a className='MenuLink sans'>موقعیت های شغلی</a>
        <a className='MenuLink sans'>دانشنامه شغلی</a>
        <a className='MenuLink sans'>شرکت ها</a>
        <a className='MenuLink sans'>برگزار کنندگان</a>
      </div>
      <Footer/>
    </div>
  )
}

export default Main