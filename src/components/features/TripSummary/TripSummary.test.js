import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const id = '333aaa';
    const component = shallow(
      <TripSummary
        id={id}
        name="Jacek"
        cost="$199"
        image="image.png"
        days={7}
      />,
    );

    expect(component).toBeTruthy();
    console.log(component.debug()); 
  });

  it('should render correct trip link', () => {
    const id = 'abc';
    const restRequiredProps = {
      name: 'Jacek',
      cost: '$199',
      image: 'image.png',
      days: 7,
    };
    const component = shallow(<TripSummary id={id} {...restRequiredProps} />);

    const expectedLink = `/trip/${id}`;
    const renderedLink = component.find('.link').prop('to');

    expect(renderedLink).toEqual(expectedLink);
  });

  it('should render correct image attributes', () => {
    const expectedSrc = 'image.png';
    const expectedAlt = 'description';
    const restRequiredProps = {
      id: 'id',
      cost: '$199',
      days: 7,
    };

    const component = shallow(
      <TripSummary
        image={expectedSrc}
        name={expectedAlt}
        {...restRequiredProps}
      />,
    );

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render name, cost and days correctly', () => {
    const expectedName = 'Pleasant travel in cool Turkey';
    const expectedCost = '$51,380.61';
    const expectedDays = 7;
    const restRequiredProps = {
      id: 'id',
      image: 'image.png',
    };

    const component = shallow(
      <TripSummary
        name={expectedName}
        cost={expectedCost}
        days={expectedDays}
        {...restRequiredProps}
      />,
    );

    expect(component.find('img').prop('alt')).toEqual(expectedName);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(
      component
        .find('.details span')
        .at(1)
        .text(),
    ).toEqual(`from ${expectedCost}`);
    expect(
      component
        .find('.details span')
        .at(0)
        .text(),
    ).toEqual(`${expectedDays} days`);
  });

  it('should render tags array correctly', () => {
    const expectedTags = ['swmiming', 'activeRest', 'child-friendly'];
    const restRequiredProps = {
      id: 'id',
      image: 'image.png',
      name: 'Jacek',
      days: 7,
      cost: '$199',
    };
    const component = shallow(
      <TripSummary tags={expectedTags} {...restRequiredProps} />,
    );

    const firstTag = component
      .find('.tags span')
      .at(0)
      .text();
    const secondTag = component
      .find('.tags span')
      .at(1)
      .text();
    const thirdTag = component
      .find('.tags span')
      .at(2)
      .text();

    expect(firstTag).toEqual(expectedTags[0]);
    expect(secondTag).toEqual(expectedTags[1]);
    expect(thirdTag).toEqual(expectedTags[2]);
  });

  it('should not render empty div with tags class if no tags', () => {
    const restRequiredProps = {
      id: 'id',
      image: 'image.png',
      name: 'Jacek',
      cost: '$199',
      days: 7,
    };

    const component = shallow(<TripSummary tags={[]} {...restRequiredProps} />);

    expect(component.find('.tags')).toHaveLength(0);
  });
});