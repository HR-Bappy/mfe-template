'use client'
import { useState } from 'react';

export default () => {
	const [count, setCount] = useState<number>(0);

	return (
		<button
			style={{
				border: '0 solid red',
				marginTop: '10px',
				backgroundColor: 'rgb(246, 179, 182)',
				borderRadius: '.25rem',
				fontWeight: '700',
				padding: '.5rem 1rem .5rem 1rem',
				color: 'rgb(24, 24, 24)',
			}}
			onClick={() => setCount(count + 1)}
		>
			Counter from remote 2: {count}
		</button>
	);
};
