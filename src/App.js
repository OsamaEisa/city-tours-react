import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import TourList from './Components/TourList/TourList'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './Components/About/About'
import Tours from './Components/Tours/Tours'
import Post from './Components/Post/Post'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/' component={TourList} />
      <Route path='/about' component={About} />
      <Route path='/tours' component={Tours} />
      <Route path="/:post_id" component={Post} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
