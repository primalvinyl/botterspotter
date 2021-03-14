import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Link from '../components/presentation/Link';

describe('Link', () => {
    it('renders', () => {
        const myWrapper = shallow(<Link />);
        expect(myWrapper.exists());
    });

    it('matches snapshot without props', () => {
        const component = Renderer.create(<Link />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});