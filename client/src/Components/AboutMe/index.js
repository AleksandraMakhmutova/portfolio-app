import React from 'react'
import img from "./img/dubai.jpg"
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux"
import fileDownload from 'js-file-download';
function AboutMe() {
	

const statusLang = useSelector(store=> store.translate)

const handleDowloadEN = (e)=>{
e.preventDefault()
fetch('/download')
.then(response=> response.blob())
.then(data=>fileDownload(data, 'CVMakhmutova.docx'))
}
const handleDowloadRU = (e)=>{
	e.preventDefault()
	fetch('/downloadru')
	.then(response=> response.blob())
	.then(data=>fileDownload(data, 'CVMakhmutova.docx'))
	}





	return (
		<section className="about" id="about">
			<div className="max-width">
			{statusLang ? 
			<h2 className="title1">About Me</h2>:
			<h2 className="title2">О себе</h2>}
				<div className="about-content">
					<div className="column left">
           <img src={img} alt=""/>
					</div>
					<div className="column right">
        <div className="text">{statusLang ? <span>I'm Aleks and I'm a web developer</span> : <span>Меня зовут Александра и я веб разработчик</span>}
				</div>
				{statusLang ?
        <p>with an aviation background. What does the past give? It gives this responsible attitude to the project, easy communication and a good mood with the completed work as a result.</p>:
				<p>с авиационным прошлым. Что такое прошлое даёт? Даёт это ответственное отношение к проекту, лёгкую коммуникацию и хорошее настроение с выполненной работой по итогу.</p>}
				{statusLang ?
					<Link onClick={handleDowloadEN} to="./rezume.docx" target="_blank">Download CV</Link>:
          <Link onClick={handleDowloadRU} to="./rezume.docx" target="_blank">Скачать резюме</Link>}
                </div>
				</div>
			</div>
		</section>
		)
}

export default AboutMe
