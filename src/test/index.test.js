import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Counter } from '../index';

describe( 'testing the test suite', () => {

    afterEach( cleanup )

    test( 'it works', () => {
        expect( true ).toBe( true );
    } )

    test( 'the increment button increases the current count', () => {
        const { getByTestId, getByText } = render(
            <Counter />
        );

        expect(getByTestId('current-count').textContent).toBe('0');
        fireEvent.click( getByText('+') );
        expect(getByTestId('current-count').textContent).toBe('1');

    } );
    
    test( 'the decrement button decreases the current count', () => {
        const { getByTestId, getByText } = render(
            <Counter />
        );

        expect(getByTestId('current-count').textContent).toBe('0');
        fireEvent.click( getByText('-') );
        expect(getByTestId('current-count').textContent).toBe('-1');

    } );

} );
