import React from 'react';
import { shallow } from 'enzyme';
import DonutChart from '../components/presentation/DonutChart';

describe('DonutChart', () => {
    it('renders without props', () => {
        const myWrapper = shallow(<DonutChart />);
        expect(myWrapper.exists());
    });
});
