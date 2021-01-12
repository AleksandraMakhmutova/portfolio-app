import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import HomeSelection from './Components/HomeSelection';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Skills from './Components/Skills';
import MessageMe from './Components/MessageMe';
import ScrollUpBtn from './Components/ScrollUpBtn';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
				    <ScrollUpBtn/>
            <HomeSelection />
						<AboutMe/>
						<Services/>
						<Skills/>
					 <MessageMe/>
					</Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>);
}

export default App;
