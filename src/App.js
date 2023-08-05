import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Movies from './components/Movies';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import React from 'react';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <main className='container'>
      <Switch>
      <Route path="/movies/:id" component={MovieForm}/>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>

      <Redirect from="/" exact to="/movies" />
      <Redirect to="/not-found" />
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
