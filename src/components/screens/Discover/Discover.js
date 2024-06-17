import { View, Image, Picker, Text, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { SearchBar } from './SearchBar';
import { TabSelector } from '../../baseComponents/TabSelector';
import { PublicationsList } from '../../baseComponents/PublicationsList/PublicationsList';

export const Discover = () => {
	const discoverColorPalette = {
		alpha: '#088EA4', //фон
		beta: '#035A6B', //фон публикаций
		gamma: 'white', //текст, кнопки
		delta: '#00353F', //фон никнейма автора
	};

	const PublicationsGlobal = () => (
		<PublicationsList colorPalette={discoverColorPalette} />
	);
	const PublicationsFollowed = () => (
		<PublicationsList colorPalette={discoverColorPalette} />
	);
	const PublicationsRecomendations = () => (
		<PublicationsList colorPalette={discoverColorPalette} />
	);
	const screens = [
		{
			name: 'global',
			component: PublicationsGlobal,
		},
		{
			name: 'subs',
			component: PublicationsFollowed,
		},
		{
			name: 'popular',
			component: PublicationsRecomendations,
		},
	];

	return (
		<View style={styles.discoverContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{'Discover'}</Text>
			</View>
			<SearchBar colorPalette={discoverColorPalette} />
			<TabSelector
				backgroundColor={discoverColorPalette.beta}
				labelColor={{
					focused: discoverColorPalette.gamma,
					unfocused: discoverColorPalette.delta,
				}}
				screens={screens}
			/>
		</View>
	);
};

const styles = ScaledSheet.create({
	discoverContainer: {
		flex: 1,
		backgroundColor: '#088ea4',
	},
	titleContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '30@s',
	},
	title: {
		fontFamily: 'PixyFont',
		fontSize: '25@s',
		color: '#fff',
	},
	searchBarContainer: {
		height: '38@s',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lime',
		marginHorizontal: '16@s',
		marginVertical: '12@s',
		borderRadius: 10,
	},
	searchBar: {},
});
