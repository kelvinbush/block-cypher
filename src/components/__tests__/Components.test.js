import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';

describe('Test presence of ChangeIndicator', () => {
  test('should render Navbar component', () => {
    const navComponent = renderer
      .create(
        <BrowserRouter>
          <ChangeIndicator />
        </BrowserRouter>,
      )
      .toJSON();
    expect(navComponent).toMatchSnapshot();
  });
});
