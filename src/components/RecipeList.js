import React, { Component } from 'react';
import axios from 'axios';

import Recipe from './Recipe';

export default class RecipeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes = () => {
        axios.get("http://localhost:5000/recipe/all").then(recipes => {
            this.setState({ data: recipes.data });
            console.log(recipes.data.reverse());
        }).catch(err => console.log(err));
    };


    render() {
        return (
            <div id="itemList">           
                {this.state.data.reverse().map((recipe) => (<Recipe key={recipe._id} func={this.getRecipes} _id={recipe._id} name={recipe.name} desc={recipe.description} ingredients={recipe.ingredients} image={recipe.image} />))};
        </div>
        );
    }
}