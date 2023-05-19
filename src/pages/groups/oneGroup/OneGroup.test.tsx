import React from 'react';
import { render, screen } from '@testing-library/react';
import OneGroup from './OneGroup';

//jest.mock('../../../components/Navbar/Navbar.jsx', () => () => <div>Mocked Navbar</div>);
//jest.mock('./Header', () => ({ group }) => <div>Mocked Header with group: {group}</div>);
//jest.mock('./Body', () => ({ groupName }) => <div>Mocked Body with groupName: {groupName}</div>);
//jest.mock('./Footer', () => () => <div>Mocked Footer</div>);

describe('test OneGroup', () => {
  test('renders the component with the correct subcomponents', () => {
    // Mock data for the Group array
    const groupData = [
      {
        groupName: 'Group 1',
      },
    ];

    // Render the component
    const { getByText } = render(<OneGroup/>);

    // Assert that the subcomponents are rendered correctly
    const navbarElement = screen.getByText('Mocked Navbar');
    expect(navbarElement).toBeInTheDocument();

    // const headerElement = screen.getByText('Mocked Header with group: Group 1');
    // expect(headerElement).toBeInTheDocument();

    // const bodyElement = screen.getByText('Mocked Body with groupName: Group 1');
    // expect(bodyElement).toBeInTheDocument();

    const footerElement = screen.getByText('Mocked Footer');
    expect(footerElement).toBeInTheDocument();
  });
});

