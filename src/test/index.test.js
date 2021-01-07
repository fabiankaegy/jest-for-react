import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Counter } from '../index';

describe( 'testing the test suite', () => {

    test( 'it works', () => {
        expect( true ).toBe( true );
    } )

    test( 'example', () => {
        const { getByTestId, getByText } = render(
            <Counter />
        );

        expect(getByTestId('current-count').textContent).toBe('0');
        
        fireEvent.click( getByText('+') );
        
        expect(getByTestId('current-count').textContent).toBe('1');

    } );

} );
