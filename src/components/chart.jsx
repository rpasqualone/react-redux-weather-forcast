import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
	return (
		<div>
			<Sparklines data={props.data} height={150} width={200}>
				<SparklinesLine color={props.color} />
			</Sparklines>
		</div>
	);
}
