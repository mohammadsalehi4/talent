import React,{useState,useEffect} from 'react'
import './questions.css'

const Questions1 = (props) => {
    const [mode,Setmode]=useState(false)

    useEffect(()=>{
        if(!mode){
            document.getElementById(props.key1).style.height="80px"
        }else{
            
            document.getElementById(props.key1).style.height="100%"

        }
    },[ ,mode])

    const change=()=>{
        if(mode==false){
            Setmode(true)
        }
        else{
            Setmode(false)
        }
    }

    return (
        <div id={props.key1} className='QuestionBox' onClick={change}>
            <p id='TitleP' className='sans'>{props.title}</p>
            <p id='DescP' className='sans'>{props.desc}</p>
        </div>
    )
}

export default Questions1