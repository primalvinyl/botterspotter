import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import TwitterSearchResult from '../components/TwitterSearchResult';

describe('TwitterSearchResult', () => {
    it('renders with no props', () => {
        const myWrapper = shallow(<TwitterSearchResult />);
        expect(myWrapper.exists());
    });

    it('renders on error', () => {
        const myWrapper = shallow(<TwitterSearchResult testResult={{ error: true }} />);
        expect(myWrapper.exists());
    });

    it('matches snapshot without props', () => {
        const component = Renderer.create(<TwitterSearchResult />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
