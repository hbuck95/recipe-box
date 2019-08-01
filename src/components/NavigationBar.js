import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.css'

import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import RecipeView from './RecipeView';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

library.add(faUtensils);

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
                <div id="navbar">
                    <Navbar color="dark" light expand="md">
                        <NavbarBrand href="/">Recipe Box <FontAwesomeIcon icon="utensils" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link id="addrecipe" to="/addrecipe">Add Recipe </Link>
                                </NavItem>
                                <NavItem>
                                    <br/>
                                </NavItem>
                                <NavItem>
                                    <Link to="/viewrecipes">View Recipes</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <Route exact path="/"/>
                    <Route path="/addrecipe" component={RecipeForm} />
                    <Route path="/viewrecipes" component={RecipeList} />
                    <Route path="/viewrecipe/:id" component={RecipeView}/>
                </div>
            </Router>
        );
    }
}