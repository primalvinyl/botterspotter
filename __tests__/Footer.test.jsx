import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('Footer', () => {
    it('renders', () => {
        const myWrapper = shallow(<Footer />);
        expect(myWrapper.exists());
    });

    it('matches snapshot without props', () => {
        const component = Renderer.create(<Footer />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
