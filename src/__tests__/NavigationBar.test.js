import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarBrand } from 'reactstrap';

import NavigationBar from '../components/NavigationBar';

configure({adapter: new Adapter()});

it('Navigation bar renders', () => {
    const wrapper = shallow(<NavigationBar/>);
    const brand = <NavbarBrand href="/">Recipe Box <FontAwesomeIcon icon="utensils" /></NavbarBrand>
    expect(wrapper.contains(brand)).toEqual(true);
});

it('Navigation bar matches snapshot', () => {
    const wrapper = shallow(<NavigationBar/>);
    expect(wrapper).toMatchSnapshot();
});

it('Click "Create Recipe" button', () => {
    const wrapper = shallow(<NavigationBar/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[id="addrecipe"]').simulate("click");
    expect(wrapper).toMatchSnapshot();

});