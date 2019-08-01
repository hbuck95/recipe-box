import React from 'react';
import renderer from 'react-test-renderer';
import NavigationBar from '../components/NavigationBar';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RecipeList from '../components/RecipeList';


configure({adapter: new Adapter()});

it('RecipeList matches snapshot', () => {
    const wrapper = renderer.create(<RecipeList/>).toJSON();
    expect(wrapper).toMatchSnapshot();
});