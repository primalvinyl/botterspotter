import React from 'react';
import { shallow } from 'enzyme';
import { BreakpointContext } from '../components/presentation/BreakpointProvider';

describe('BreakpointProvider', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <BreakpointContext.Provider value={BreakpointContext}></BreakpointContext.Provider>
        );
        expect(myWrapper.exists());
    });
});
