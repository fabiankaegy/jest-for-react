import React, {useState} from 'react';

function useCounter( initial = 0 ) {
	const [count, setCount] = useState(initial);
	
	function increaseCount() {
		setCount(count + 1);
	}

	function decreaseCount() {
		setCount(count - 1);
	}

	return [count, increaseCount, decreaseCount];
}

export function Counter({ initial }) {
	const [count, increase, decrease] = useCounter(initial);

	return (
		<div className="counter">
			<p>The current count is: <span data-testid="current-count">{count}</span></p>
			<button onClick={decrease}>-</button>
			<button onClick={increase}>+</button>
		</div>
	)
}