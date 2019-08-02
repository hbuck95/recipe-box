import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
    
import 'bootstrap/dist/css/bootstrap.css'

export default class Recipe extends Component {
    static defaultProps = {
        image: "https://i.imgur.com/bAmSrZZ.png"
    };

    delete = () => {
        const recipe = {
            _id: this.props._id,
        };
        let userResp = window.confirm("Are you sure you want to delete this recipe?")
        
        if(!userResp)
            return;

        axios.delete("http://localhost:5000/recipe/deleteRecipe",{data:recipe}).then(res => {
            console.log(res);
            window.alert("Recipe deleted!");
            this.props.func()
        }).catch(err => console.log(err));
    };

    loadRecipe = () => {
        console.log(`Clicked ${this.props._id}`);
    }

    render() {
        return (
            
            <div id = {this.props._id}>
                <h3>{this.props.name}</h3>
                <img src={this.props.image} width="128" height="128" alt={this.props.name} onClick={() => this.loadRecipe()}></img>
                <br/><br/>
                {/* <h5>{this.props.desc}</h5> */}
                {/* <p><b>Ingredients: </b>{this.props.ingredients}</p> */}
                <button onClick={this.delete}>Remove</button> <Link to={"/viewrecipe/"+this.props._id}><button>View</button></Link>
                <br/><br/><br/>
            </div>
        )};
}