import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
    it('renders without props', () => {
        const myWrapper = shallow(<SearchForm />);
        expect(myWrapper.exists());
    });

    it('matches snapshot without props', () => {
        const component = Renderer.create(<SearchForm />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('matches snapshot with props', () => {
        const component = Renderer.create(<SearchForm
            submitMethod={() => {}}
            resetMethod={() => {}}
            onChangeMethod={() => {}}
            name="bling"
            id="bling"
            value="bling"
            disabled={false}
            placeholder="bling"
            startAdornment="bling"
            focusOnLoad={false}
            className="bling"
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
