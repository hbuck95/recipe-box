import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import {
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

import RecipeForm from '../components/RecipeForm';

configure({ adapter: new Adapter() });

it('Button submits form', () => {
    const wrapper = mount(<RecipeForm />);

    const e = {
        target: [{
            value: "Pancakes"
        },
        {
            value: "A tasty recipe for pancakes."
        },
        {
            value: "Flour; Egg; Milk"
        },
        {
            value: "https://i.imgur.com/Xl4kEpP7.jpg"
        }]
    };

    wrapper.find('[id="recipeSubmit"]').last().simulate("submit", e);
    
    expect(wrapper.contains(<p id="respStatus">Your recipe was saved into the database!</p>)).toBeTruthy();
});