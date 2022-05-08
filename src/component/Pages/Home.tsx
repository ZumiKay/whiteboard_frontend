import React from "react";
import { MouseEvent } from "react";
import { useState } from "react";
import '../../Style/style.css'
import { ImagesSrc } from "../Assets/Images";
import Footer from "../Footer";
import Rooms from "../Rooms";


export interface isclicked {
    menuclick:boolean,

}
const Home = () => {
    const [click , setclick] = useState<isclicked | undefined>(undefined)
    
    const handleClick = (event:MouseEvent , input:boolean) => {
        event.preventDefault()
        clearTimeout()
        const root = document.documentElement
        if(!input){
            root.style.setProperty("--menu-animation" , "slideleft")
            setTimeout(() => {
            setclick({...click , menuclick:input})
            } , 500)
        } else {
            root.style.setProperty("--menu-animation" , "")
            setclick({...click , menuclick:input})
        }
          
           
        

    }
    const Menu = () => {
        return (
            <ul className={"menu_Container"}>
                <li onMouseDown={(e) => handleClick(e , false)}><h2>Close</h2></li>
                <li>
                    <img src={ImagesSrc.accountimg} alt="profile" />
                </li>
                <li>
                    <img src={ImagesSrc.createroomimg} alt="create-room" />
                </li>
            </ul>
        )
    }

    
   return (
        <div className="Home__Container">
            <div className="Homenav_Container">
                <h1>WHITE BOARD</h1>
                <img onMouseDown={(e) => handleClick(e , true)} src={click?.menuclick ? ImagesSrc.activemenu : ImagesSrc.menu} alt="menu" />
            </div>
            <hr/>
            {click?.menuclick && <Menu/>}
            <select className="Roomsort__Container">
                <option value="">Owned by me</option>
                <option value="">Owned by others</option>
            </select>
            <section className="Rooms">
                <Rooms/>
                <Rooms/>
                <Rooms/>
                <Rooms/>
                <Rooms/>
                <Rooms/>
                <Rooms/>
                <Rooms/>
                <Rooms/>
            </section>
            
                <Footer/>
           

        </div>
    )

}

export default Home