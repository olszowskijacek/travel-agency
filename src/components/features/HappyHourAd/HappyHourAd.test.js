import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';



const select = {
  title: '.title',
  countdown: '.countdown',
};

const mockProps = {
  title: 'Happy Hour',
  promoDescription: 'promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <HappyHourAd />
    );
    expect(component).toBeTruthy();    
  });

  it('should render both element title & countdown', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.countdown)).toEqual(true);
  });

  it('should render correct header', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);

    expect(component.find('.title').text()).toEqual(mockProps.title);
  });
    
});