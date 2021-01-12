import React from 'react'
import {style} from '../../App.css'
import Typical from 'react-typical'
import { useSelector } from "react-redux"




function HomeSelection() {
	const statusLang = useSelector(store=> store.translate)
	
	return (
		<>
		<section className="home" id="home" style={style}>
			<div className="max-width">
			<div className="home-content">
			<div className="text-1">{statusLang ? `Hello, my name is`: `Привет, меня зовут`}</div>
			<div className="text-2">{`<`}{statusLang ? `Aleksandra Makhmutova`: `Александра Махмутова`}{`/>`}</div>
			<div className="text-3">{statusLang ? `And I'm a` : `И я`} 
			<Typical
        steps={['javaScript web developer', 1000, 'freelancer', 1000]}
        loop={Infinity}
        wrapper="p"/>
				</div>
			</div>
			</div>
			
		</section>
	</>
	)
}

export default HomeSelection


