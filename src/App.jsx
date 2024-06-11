
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom';
import Basarili from './components/Basarili';
import Hata from './components/Hata';

function App() {

  return (
    <>
    
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/main">
          <Basarili />
        </Route>
        <Route exact path="/error">
          <Hata />
        </Route>
      </Switch>
    
   
  </>
  )
}

export default App
