import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Counter } from '../index';

describe( 'Testsuite', () => {

    test( 'the testsuite works', () => {
        expect( true ).toBe( true );
    } );

} )

describe( 'Counter', () => {

    afterEach( cleanup );

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
            <Counter initialCount={25} />
        );

        expect(getByTestId('current-count').textContent).toBe('25');
        fireEvent.click( getByText('-') );
        expect(getByTestId('current-count').textContent).toBe('24');
    } );

} );
