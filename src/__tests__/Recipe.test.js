import React from 'react';
import renderer from 'react-test-renderer';
import NavigationBar from '../components/NavigationBar';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { Link, BrowserRouter as Router } from "react-router-dom";

import Recipe from '../components/Recipe';

configure({ adapter: new Adapter() });

it('Recipe uses props', () => {
    const recipeProps = {
        _id: "abc123",
        name: "Pancakes",
        desc: "A tasty recipe for pancakes",
        ingredients: "Egg; Milk; Flour",
        image: "https://i.imgur.com/Xl4kEpP.jpg"
    };

    const wrapper = shallow(<Recipe {...recipeProps} />);
    expect(wrapper.instance().props._id).toEqual(recipeProps._id);
    expect(wrapper.instance().props.name).toEqual(recipeProps.name);
    expect(wrapper.instance().props.desc).toEqual(recipeProps.desc);
    expect(wrapper.instance().props.ingredients).toEqual(recipeProps.ingredients);
    expect(wrapper.instance().props.image).toEqual(recipeProps.image);
    expect(wrapper.instance().props).toEqual(recipeProps);
    expect(wrapper).toMatchSnapshot();
});