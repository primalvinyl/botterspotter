import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import rootReducer from '../store/reducers';
import HomePage from '../components/HomePage';

describe('HomePage', () => {
    const store = createStore(rootReducer, {});

    it('renders with store', () => {
        const myWrapper = shallow(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );
        expect(myWrapper.exists());
    });

    it('matches snapshot', () => {
        const component = Renderer.create(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
