import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

function Counter() {
	const [count, setCount] = useState<number>(0);

	function increment() {
		setCount(currentState => currentState + 1);
	}

	function decrement() {
		setCount(currentState => currentState - 1);
	}

	function reset() {
		setCount(0);
	}
	return (
		<div>
			<CountDisplay>Count: {count}</CountDisplay>
			<Button text="Increment" handleClick={increment} />
			<Button text="Decrement" handleClick={decrement} />
			<Button text="Reset" handleClick={reset} />
		</div>
	);
}

export default Counter;

const CountDisplay = styled.p`
	margin: 2rem 0;
	font-size: 2.2rem;
`;
