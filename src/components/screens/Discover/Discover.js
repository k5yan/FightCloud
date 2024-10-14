import { View, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { TabSelector } from '../../baseComponents/TabSelector';
import { PublicationsList } from '../../baseComponents/PublicationsList/PublicationsList';
import { Cap } from '../../baseComponents/PublicationsList/Cap/Cap';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectMainScreenStyles,
	selectColorPalette,
} from '../../../redux/selectors/styles/DiscoverSelectors/DiscoverSelectors';
import { ScreenTitle } from '../../baseComponents/ScreenTitle';
import { DiscoverHeader } from './DiscoverHeader/DiscoverHeader';
import { selectProfileInfo } from '../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { selectDiscoverPublications } from '../../../redux/selectors/data/publicationSelectors/publicationSelectors';
import loadPublications from '../../../utils/loaders/loadPublications/loadPublications';
import safeArea from '../../../utils/safeArea/safeArea';

export const Discover = () => {
	const colorPalette = useSelector(selectColorPalette);
	const mainScreen = useSelector(selectMainScreenStyles);
	const isLogin = useSelector(selectProfileInfo).isLogin;
	const dispatch = useDispatch();

	// console.log(content);
	useEffect(() => {
		loadPublications(dispatch, 'Discover');
	}, []);

	const PublicationsGlobal = () => (
		<View style={stylesScreen.screen}>
			<PublicationsList
				selector={selectDiscoverPublications}
				type={'discoverPublication'}
				colorPalette={colorPalette}
				capText={'the world is waiting...'}
			/>
		</View>
	);
	const PublicationsFollowed = () => (
		<View style={stylesScreen.screen}>
			<Cap textColor={colorPalette.beta} capText={'your subs!'} />
		</View>
	);
	const PublicationsRecomendations = () => (
		<View style={stylesScreen.screen}>
			<Cap textColor={colorPalette.beta} capText={'check popular!'} />
		</View>
	);

	const userScreens = [
		{
			name: 'global',
			component: PublicationsGlobal,
		},
		{ name: 'subs', component: PublicationsFollowed },
		{
			name: 'popular',
			component: PublicationsRecomendations,
		},
	];

	const guestScreens = [
		{
			name: 'global',
			component: PublicationsGlobal,
		},
		{
			name: 'popular',
			component: PublicationsRecomendations,
		},
	];
	const stylesScreen = ScaledSheet.create({
		screen: {
			flex: 1,
			paddingTop: '4@s',
			backgroundColor: colorPalette.alpha,
		},
	});
	const styles = ScaledSheet.create(mainScreen);

	return (
		<SafeAreaView
			style={[styles.discoverContainer, safeArea(colorPalette.alpha).style]}
		>
			<ScreenTitle title={'discover'} />
			<DiscoverHeader />
			<View style={{ backgroundColor: colorPalette.alpha, flex: 1 }}>
				<TabSelector
					screen={'Discover'}
					screens={isLogin ? userScreens : guestScreens}
				/>
			</View>
		</SafeAreaView>
	);
};
