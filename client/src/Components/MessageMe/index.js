import React, { useState } from 'react'
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github'
import {useSelector} from "react-redux"
function MessageMe() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })
const [mesOk, setMesOk] = useState(null)

	function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value
    })
  }

	const statusLang = useSelector(store=> store.translate)

  const { name, email, message } = inputs;
	
	async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch('/send_message', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
    if (res.status === 200) {
			setInputs({
				name: "",
				email: "",
				message: "",
			})
			statusLang ? setMesOk("Message was sent.") : setMesOk("Сообщение отправлено.")
    }
    else if (res.status === 406) {
			statusLang ? setMesOk("Message isn't send,please try again."): setMesOk("Сообщение не отправлено, попробуйте ещё.") 
    }
  }





	return (
		<section className="contact" id="contact">
		<div className="max-width">
		{statusLang?<h2 className="title1">Let's Work Together</h2>:
		<h2 className="title2">Поработаем вместе?</h2>
		}
				<div className="contact-content">
						<div className="column left">
						
								<div className="text">{statusLang ?`Have a project you'd like to discuss?`: `Есть проект который можно обсудить?`}</div>
								<p>{statusLang ?`If you’d like to chat about a project please fill in the form and I’ll get back with in 1-2 days.`: 
								`Если нужно обсудить детали, отправьте мне сообщение через форму отправки сообщений и я отвечу Вам в течении 1-2 дней.`}</p>
								
								<div className="icons">
										<div className="row">
												<i className="fas fa-user"></i>
												<div className="info">
														<div className="head">{statusLang ? `Name`: `Имя`}</div>
														<div className="sub-title">{statusLang ? `Makhmutova Aleksandra`: `Махмутова Александра`}</div>
												</div>
										</div>
										<div className="row">
												<i className="fas fa-map-marker-alt"></i>
												<div className="info">
														<div className="head">{statusLang ? `Address`: `Страна, город`}</div>
														<div className="sub-title">{statusLang ? `Russia, Moscow`: `Россия, Москва`}</div>
												</div>
										</div>
										<div className="row">
												<i className="fas fa-envelope"></i>
												<div className="info">
														<div className="head">{statusLang ? `Email`: `Почта`}</div>
														<div className="sub-title">makhmutovansk@gmail.com</div>
												</div>
										</div>
										<div className="row">
												<UseAnimations animation={github} size={35}/>
												<div className="info">
														<div className="head">Git</div>
														<div className="sub-title">github.com/AleksandraMakhmutova</div>
												</div>
										</div>


								</div>
						</div>
						<div className="column right">
								<div className="text">{statusLang ? `Message me`: `Напишите мне`}</div>
								{ mesOk && <p>{mesOk}</p>}
								<form onSubmit={handleSubmit}>
										<div className="fields">
												<div className="field name">
												<input type="text" name="name" placeholder={statusLang ? `Name` : `Имя`} onChange={handleChange} value={name}required/>
												</div>
												<div className="field email">
														<input type="email" name="email" placeholder="Email" onChange={handleChange} value={email} required/>
												</div>
										</div>
										<div className="field textarea">
												<textarea cols="30" rows="10" name="message" placeholder={statusLang ? 'Message...' : 'Сообщение...'} onChange={handleChange} value={message} required></textarea>
										</div>
										<div className="button">
												<button type="submit">{statusLang ? `Send message`: `Отправить`}</button>
										</div>
										
										
								</form>
						</div>
				</div>
		</div>
</section>
	)
}

export default MessageMe
