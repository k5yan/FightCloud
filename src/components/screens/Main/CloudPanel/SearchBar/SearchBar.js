import { View, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import { selectSearchBarStyles } from '../../../../../redux/selectors/styles/MainSelectors/MainSelectors';

export const SearchBar = () => {
	const searchBar = useSelector(selectSearchBarStyles);
	const styles = ScaledSheet.create(searchBar);

	return (
		<View style={styles.searchBarContainer}>
			<TextInput style={styles.searchBar} placeholder="Search..." />
		</View>
	);
};
