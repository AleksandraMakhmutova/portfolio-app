import React from 'react'
import { useSelector } from "react-redux"

function Services() {
const statusLang = useSelector(store=> store.translate)

	return (
    <section className="services" id="services">
        <div className="max-width">
          {statusLang ?   <h2 className="title1">My services</h2>:
					<h2 className="title2">Услуги</h2>}
            <div className="serv-content">
                <div className="cardservices">
                    <div className="box">
                        <i className="fas fa-laptop"></i>
                        <div className="text">{statusLang ? `Web Development`: `Веб разработка`}</div>
                        <p>{statusLang ? `Development of a stable application with backend and frontend. Database setup.`:
												 `Разработка стабильно работающего приложения с бэкендом и фронтендом. Настройка базы данных. `}</p>
                    </div>
                </div>
                <div className="cardservices">
                    <div className="box">
                        <i className="fas fa-code"></i>
                        <div className="text">{statusLang ? `Apps Design`: `Дизайн приложений`}</div>
                        <p>{statusLang ? `Customizing the user interface for mobile and desktop applications. With convenient site navigation.`:
												 `Настройка пользовательского интерфейса под мобильные и десктопные приложения. С удобной навигацией по сайту.`}</p>
                    </div>
                </div>
               </div>
            </div>
    </section>
	)
}

export default Services
