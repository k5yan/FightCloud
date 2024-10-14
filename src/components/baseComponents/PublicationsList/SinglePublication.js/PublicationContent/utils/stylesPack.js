export const stylesPack = (side) => {
	return {
		single: {
			container: {
				flex: 1,
			},
			picture: { height: '100%', borderRadius: 4 },
		},
		//index system: first number - summ of pictures,
		// second - number in array(row in column)
		1: {
			0: {
				container: {
					flex: 1,
					flexGrow: 1,
					alignItems: 'center',
					overflow: 'hidden',
					borderTopLeftRadius: 4,
					borderBottomLeftRadius: 4,
				},
				picture: {
					flexGrow: 1,
					width: '100%',
				},
			},
		},
		2: {
			0: {
				container: {
					flex: 1,
					flexGrow: 1,
					maxHeight: '227@s',
					marginBottom: '4@s',
					alignItems: 'center',
					[`borderTop${side}Radius`]: 4,
					overflow: 'hidden',
				},
				picture: {
					flexGrow: 1,
					width: '100%',
				},
			},
			1: {
				container: {
					flex: 1,
					flexGrow: 1,
					maxHeight: '227@s',
					alignItems: 'center',
					[`borderBottom${side}Radius`]: 4,
					overflow: 'hidden',
				},
				picture: {
					flexGrow: 1,
					width: '100%',
				},
			},
		},
		3: {
			0: {
				container: {
					flex: 1,
					flexGrow: 1,
					maxHeight: '150@s',
					marginBottom: '4@s',
					alignItems: 'center',
					[`borderTop${side}Radius`]: 4,
					overflow: 'hidden',
				},
				picture: {
					flexGrow: 1,
					width: '100%',
				},
			},
			1: {
				container: {
					flex: 1,
					flexGrow: 1,
					maxHeight: '150@s',
					marginBottom: '4@s',
					alignItems: 'center',
					overflow: 'hidden',
				},
				picture: {
					flexGrow: 1,
					width: '100%',
				},
			},
			2: {
				container: {
					flex: 1,
					flexGrow: 1,
					maxHeight: '150@s',
					alignItems: 'center',
					[`borderBottom${side}Radius`]: 4,
					overflow: 'hidden',
				},
				picture: {
					flexGrow: 1,
					width: '100%',
				},
			},
		},
	};
};
