import './App.css';
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
/* Pages */
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import SignUp from './components/pages/SignUp/SignUp';
import Login from './components/pages/Login/Login'
import UserPanel from './components/pages/UserPanel/UserPanel'
import EditPanel from './components/pages/EditPanel/EditPanel'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={ Home }/>
        <Route path='/services' component={ Services }/>
        <Route path='/products' component={ Products }/>
        <Route path='/sign-up' component={ SignUp }/>
        <Route path='/login' component={ Login }/>
        <Route path='/user-panel' component={ UserPanel }/>
        <Route path='/edit-panel' component= { EditPanel}/>
      </Switch>  
    </Router>
  );
}

export default App;

