import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/account/login'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import ResetarSenha from './pages/account/resetpassword';

const rotas = (
  <Router>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/account/resetpassword/" component={ResetarSenha} />
    </Switch>
  </Router>
)



ReactDOM.render(
  rotas,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
