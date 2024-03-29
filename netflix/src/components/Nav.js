import React, { useEffect } from 'react'
import './Nav.css'

export default function Nav() {
    const [show,setShow] = React.useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            setShow(window.scrollY > 100);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[])

  return (
    <header className={`${show && "black"}`}>
        <img 
            className='header--logo' 
            alt='Netflix'  
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        />

        <img 
            className='header--user' 
            alt='Janisson'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
        />
    </header>
  )
}
