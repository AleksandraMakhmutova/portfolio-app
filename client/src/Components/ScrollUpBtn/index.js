import React, { useEffect, useState } from 'react'




function ScrollUpBtn() {
const [scrollUpBtn, SetScrollUpBtn] = useState("scroll-up-btn")	
//скролл эффект
	const listenScrolEventBtn = (event)=> {
		if(window.scrollY > 500){
			return SetScrollUpBtn('scroll-up-btn show')
		}else{
			return SetScrollUpBtn("scroll-up-btn")
		}
	}
	
	useEffect(()=>{
		window.addEventListener('scroll', listenScrolEventBtn);
		return () =>
			window.removeEventListener('scroll', listenScrolEventBtn)
		},[])
	const handleChange = (e) =>{
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	return (
		<div className={scrollUpBtn} onClick={handleChange}>
			<i className='fas fa-angle-up'></i>
		</div>
	)
}

export default ScrollUpBtn
