import React, { Component } from 'react';
import axios from 'axios';

export default class RecipeView extends Component {
    constructor(){
        super();
        this.state = { 
            recipe: []
        };
    }

    componentDidMount(){
        this.getRecipeById(this.props.match.params.id);
    }

    getRecipeById = (id) => {
        axios.get(`http://localhost:5000/recipe/find/${id}`).then(recipes => {
            this.setState({ recipe: recipes.data[0] });
            console.log(this.state.recipe);

        }).catch(err => console.log(err));
    };

    render(){
        return(
            <div id="recipeView">
                <div id = {this.props._id}>
                <h1>{this.state.recipe.name}</h1>
                <br/>
                <img src={this.state.recipe.image} width="512" height="512" alt={this.state.recipe.name}></img>
                <br/><br/>
                <h3>{this.state.recipe.description}</h3>
                <br/>
                <p><b>Ingredients: </b>{this.state.recipe.ingredients}</p>
            </div>
            </div>
        );
    }
}