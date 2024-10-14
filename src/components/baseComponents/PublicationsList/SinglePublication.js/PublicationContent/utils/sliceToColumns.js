export const sliceToColumns = (array) => {
	let columnArray = [];
	const halfArray = Math.ceil(array.length / 2);
	for (let i = 0; i < array.length; i += halfArray) {
		const column = array.slice(i, i + halfArray);
		columnArray.push(column);
	}
	return { firstColumn: columnArray[1], secondColumn: columnArray[0] };
};
