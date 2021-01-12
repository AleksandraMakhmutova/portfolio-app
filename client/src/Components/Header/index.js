import React, { useEffect, useState } from 'react'
import {style} from '../../App.css'
import { useSelector } from "react-redux"
import { Link} from "react-scroll";


import SpeedDials from './SpeedDials';

function Header() {

const [navbar, setNavbar] = useState("navbar")
const [menu, setMenu] = useState("menu")
const [iActive, setIActive] = useState("fas fa-bars")

//скролл эффект
const listenScrolEvent = (event)=> {
	if(window.scrollY > 20){
		return setNavbar('navbar sticky')
	}else{
		return setNavbar("navbar")
	}
}

useEffect(()=>{
window.addEventListener('scroll', listenScrolEvent);
return () =>
	window.removeEventListener('scroll', listenScrolEvent)
},[])

const handleChange = (e) =>{
	if(menu === "menu"){
		setIActive("fas fa-bars active")
		setMenu('menu active')
	}
	else if(menu === 'menu active'){
		setIActive("fas fa-bars")
		setMenu('menu')
	}
}
const statusLang = useSelector(store=> store)

	return (<>
			<nav className={navbar} style={style}>
			<div className="max-width">
				{statusLang.translate ? <div className="logo"><Link to="#">Aleks<span>andra</span></Link></div> :
			<div className="logo"><Link to="#">Алекс<span>андра</span></Link></div>}
					<ul className={menu}>
						<li><Link to="home" className="menu-btn" onClick={handleChange}>{statusLang.translate ? statusLang.en.header[0]: statusLang.ru.header[0]}</Link></li>
						<li><Link to="about" className="menu-btn" onClick={handleChange}>{statusLang.translate ? statusLang.en.header[1]: statusLang.ru.header[1]}</Link></li>
						<li><Link to="services" className="menu-btn" onClick={handleChange}>{statusLang.translate ? statusLang.en.header[2]: statusLang.ru.header[2]}</Link></li>
						<li><Link to="skills" className="menu-btn" onClick={handleChange}>{statusLang.translate ? statusLang.en.header[3]: statusLang.ru.header[3]}</Link></li>
						{/* <li><Link to="teams" className="menu-btn" onClick={handleChange}> Projects</Link></li> */}
						<li><Link to="contact" className="menu-btn" onClick={handleChange}>{statusLang.translate ? statusLang.en.header[4]: statusLang.ru.header[4]}</Link></li>
					
					</ul>
<ul><SpeedDials/></ul>
			
				<div className="menu-btn" onClick={handleChange} style={style}>
			<i className={iActive}></i>
				
		    </div>
			<div></div>
			</div>	


		</nav>
</>
	)
}

export default Header
