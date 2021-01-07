import React, { useState } from 'react';

export function Counter(props) {

	const { initialCount = 0 } = props;

	const [ count, setCount ] = useState( initialCount );

	function increaseCount() {
		setCount( count + 1 );
	}

	function decreaseCount() {
		setCount( count - 1 );
	}

	return (
		<div className="counter">
			<p>The current count is: <span data-testid="current-count">{count}</span></p>
			<button onClick={ decreaseCount }>-</button>
			<button onClick={ increaseCount }>+</button>
		</div>
	)
}