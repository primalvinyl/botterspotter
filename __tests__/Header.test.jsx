import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header', () => {
    it('renders', () => {
        const myWrapper = shallow(<Header />);
        expect(myWrapper.exists());
    });

    it('matches snapshot without props', () => {
        const component = Renderer.create(<Header />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
