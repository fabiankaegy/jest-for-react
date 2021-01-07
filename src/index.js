import React, { useState } from 'react';

export function Counter() {
    const [ count, setCount ] = useState( 0 );

    return (
        <div className="counter">
            <p>The current count is: <span data-testid="current-count">{count}</span></p>
            <button onClick={ () => setCount( count - 1 ) }>-</button>
            <button onClick={ () => setCount( count + 1 ) }>+</button>
        </div>
    )
}