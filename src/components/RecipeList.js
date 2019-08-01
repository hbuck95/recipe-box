import React, { Component } from 'react';

export default class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render(){
        return(
            <div id="recipelist">
                <p>Recipe List</p>
            </div>
        );
    }
}