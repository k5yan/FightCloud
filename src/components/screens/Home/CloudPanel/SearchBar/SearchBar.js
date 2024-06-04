import { View, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const SearchBar = () => {
	return (
		<View style={styles.searchBarContainer}>
			<TextInput style={styles.searchBar} placeholder="Search..." />
		</View>
	);
};

const styles = ScaledSheet.create({
	searchBar: {
		backgroundColor: 'transparent',
		height: '38@s',
		border: '2@s',
		paddingBottom: '4@s',
		paddingTop: '2@s',
		paddingHorizontal: '8@s',
		borderRadius: 10,
		fontSize: '20@s',
	},
	searchBarContainer: {
		width: '70%',
	},
});
