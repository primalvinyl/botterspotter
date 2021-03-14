import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import CookieModal from '../components/presentation/CookieModal';

describe('CookieModal', () => {
    it('renders', () => {
        const myWrapper = shallow(<CookieModal />);
        expect(myWrapper.exists());
    });

    it('matches snapshot without props', () => {
        const component = Renderer.create(<CookieModal />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
