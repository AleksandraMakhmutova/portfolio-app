import React from 'react'

import react from "./icons/react.svg"
import express from "./icons/express.png"
import css3 from "./icons/css3.svg"
import html from "./icons/html-5.svg"
import matui from "./icons/material-ui-1.svg"
import reduxSaga from "./icons/redux-saga.svg"
import mongoDB from "./icons/mongodb.svg"
import redux from "./icons/redux.svg"
import sass from "./icons/sass-1.svg"
import {useSelector} from "react-redux"


function Skills() {
const statusLang = useSelector(store=> store.translate)

	return (
		<section className="skills" id="skills">
			
        <div className="max-width">
				{
					statusLang? <h2 className="title1">My skills</h2>:
				  <h2 className="title2">Технологии</h2>
				}
            
            <div className="skills-content">
                <div className="column right">
								{
					statusLang?<div className="text">My creative skills & experiences.
For quick and high-quality work, the following tools are used:</div>:<div className="text">Для быстрой и качетсвенной работы использую следующие инструменты:</div>
								} 
                </div> 
                <div className="column right">
                  	 <div className="bars">
                       <img id="react" src={react} alt="" />
										<img id="express" src={express} alt="" />
										<img id="css3" src={css3} alt="" />
										</div>
										<div className="bars">
										<img id="matui" src={matui} alt="" />
										<img id="mongoDB" src={mongoDB} alt="" />
										<img id="reduxSaga" src={reduxSaga} alt="" />
										</div>
										<div className="bars">
                    <img id="redux" src={redux} alt="" />
                     <img id="sass" src={sass} alt="" />
                     <img  id="html" src={html} alt="" />
										</div>
                </div>
            </div>
        </div>
    </section>

	)
}

export default Skills
