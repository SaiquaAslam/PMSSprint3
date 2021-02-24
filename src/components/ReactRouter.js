import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddPlant from './AddPlant'
import ViewPlants from './ViewPlants';
import Home from './Home'
import SearchByName from './SearchByName'
import SearchByType from './SearchByType'

import Header from './Header';
import Footer from './Footer';
function ReactRouter() {
    return (
        <Router>
             <Header/>
             <Footer/>
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/"><h6 class="text-success">Home</h6></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listplants" ><h6 class="text-success">List of Plants</h6></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add"><h6 class="text-success">Add/Update</h6></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/searchByName"><h6 class="text-success">Search By Name</h6></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/searchByType"><h6 class="text-success">Search By Type</h6></Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                
                <Switch>
                    <Route exact path="/listplants">
                        <ViewPlants></ViewPlants>
                    </Route>
                    <Route path="/add">
                        <AddPlant></AddPlant>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/searchByName" component={SearchByName}/>
                    <Route path="/searchByType" component={SearchByType}/>
                
                </Switch>
            </div>
        </Router>
    )
}

export default ReactRouter
