import { View, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const SearchBar = (props) => {
	return (
		<View
			style={[
				{ backgroundColor: props.colorPalette.beta },
				styles.searchBarContainer,
			]}
		>
			<TextInput
				style={[{ color: props.colorPalette.gamma }, styles.searchBar]}
				placeholder="#ATL highlight.."
				placeholderTextColor={props.colorPalette.gamma}
			/>
		</View>
	);
};

const styles = ScaledSheet.create({
	searchBarContainer: {
		height: '38@s',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: '16@s',
		marginVertical: '12@s',
		paddingHorizontal: '12@s',
		borderRadius: 10,
	},
	searchBar: {
		width: '100%',

		fontSize: '20@s',
		fontFamily: 'PixyFont',
	},
});
