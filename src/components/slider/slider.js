import React,{useState,useEffect} from 'react'
import './slider.css'
const Slider = (props) => {
  const data=props.data

  const [widthStandard,setwidthStandard]=useState(300)
  const [widthSize,setwidthSize]=useState(widthStandard*(data.length))
  const [mode,setmode]=useState(1)
  const [leftFasele,setleftFasele]=useState(0)

  const goLeft=()=>{
    if(mode<data.length){
      setmode(mode+1)
    }else{
      setmode(1)
    }
  }
  const goRight=()=>{
    if(mode>1){
      setmode(mode-1)
    }else{
      setmode(data.length)
    }
  }

  useEffect(()=>{
    setleftFasele((mode-1)*widthStandard)
  },[mode])

  useEffect(()=>{
    document.getElementById('mover').style.left=`${leftFasele}px`
  },[leftFasele])

  useEffect(()=>{
    setwidthSize(widthStandard*(data.length))
  },[widthStandard])

  useEffect(()=>{
    if(window.innerWidth<600){
      setwidthStandard(300)
    }
  },[window.innerWidth])

  return (
    <div id='slider' style={{width:`${widthStandard}px`}}>
      
      <div id='LeftSide' className='selectSideBox' onClick={goLeft} style={{marginRight:`${widthStandard-50}px`}} ><p className='sans'>{'>'}</p></div>

      <div id='mover' style={{width:`${widthSize}px`,transition:"0.2s"}}>
        {data.map((item,index)=>{
          return(
            <div className='slideBox' style={{width:`${widthStandard}px`}}>
              <img src={item.address} style={{width:`${widthSize/5}px`}}/>
              <h1 className='sans'>{item.desc}</h1>
              <a className='sans'>برای دریافت کوچینگ کلیک کنید</a>
            </div>
          )
        })}
      </div>

      <div id='RightSide' className='selectSideBox' onClick={goRight}><p className='sans' >{'<'}</p></div>

    </div>
  )

}

export default Slider