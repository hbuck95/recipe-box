import React, { Component } from 'react';
import axios from 'axios';

import {
    Button,
    Container,
    Row,
    Col } from 'reactstrap';
    
import 'bootstrap/dist/css/bootstrap.css'

export default class RecipeForm extends Component {
    constructor(){
        super();
        this.state = { 
            recipeName: "",
            recipeDescription: "",
            recipeIngredients: "",
            recipeImageURL: "",
            success: undefined
        };
	}

    handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            name: e.target[0].value,
            description: e.target[1].value,
            ingredients: e.target[2].value,
            image: e.target[3].value
          };

        const headers = {
            'Content-Type': 'application/json'
        };

        console.log("Body: "+JSON.stringify(newRecipe));
        axios.post("http://localhost:5000/recipe/createRecipe", newRecipe, {
            headers: headers
          })
            .then(response => {
                if(response.status === 200){
                    //window.alert("Your recipe has been added!");
                    this.setState({success:true});
                }
                console.log(response.data);
                document.getElementById("recipeForm").reset();
                //this.props.func();
            })
            .catch(err => {
                console.log(err);
                this.setState({success:false});
            });
    }

    render() {
      return (
        <div id = "create-post">
            <Container>
                <br/>
                <form id="recipeForm" onSubmit={this.handleSubmit}>
                <Row>
                    <Col/>
                    <Col/>
                    <Col/>
                    <Col xs="auto"><h2>Create a Recipe:</h2></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><h5>Recipe Name:</h5></Col>
                    <Col><input id="recipeName" type="text" placeholder="Pancakes"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><h5>Description:</h5></Col>
                    <Col><textarea id="recipeDesc" style={{height:200, width:500}} placeholder="(e.g. This is a recipe for making pancakes)"></textarea></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><h5>Ingredients:</h5></Col>
                    <Col><textarea id="recipeIngred" style={{height:200, width:500}} placeholder="(e.g. Eggs; Flour; Milk)"></textarea></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><h5>Link to image:</h5></Col>
                    <Col><input id="recipeImage" type="text" style={{width:500}} placeholder="https://i.imgur.com/Xl4kEpP.jpg"></input></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <br/>
                <Row>
                    <Col/>
                    <Col/>
                    <Col><Button id="recipeSubmit" color="success">Submit Recipe</Button></Col>
                    <Col/>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                <br/>
                <Row>
                    <Col/>
                    <Col/>
                    <p id="respStatus">{this.state.success === undefined ? "" : this.state.success ? "Your recipe was saved into the database!" : "An error occurred whilst attempting to save your recipe. Please try again."}</p>
                    <Col/>
                    <Col/>
                    <Col/>
                </Row>
                </form>
        </Container>
        </div>
      );
    }
  }