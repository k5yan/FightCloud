import { View } from 'react-native';
import { useEffect } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { request } from '../../../utils/serverCalls/request';
import { TabSelector } from '../../baseComponents/TabSelector';
import { PublicationsList } from '../../baseComponents/PublicationsList/PublicationsList';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectMainScreenStyles,
	selectColorPalette,
} from '../../../redux/selectors/styles/DiscoverSelectors/DiscoverSelectors';
import { AppTitle } from '../../baseComponents/AppTitle';
import { DiscoverHeader } from './DiscoverHeader/DiscoverHeader';
import { selectProfileInfo } from '../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { selectAllPublications } from '../../../redux/selectors/data/DiscoverSelectors/DiscoverSelectors';

export const Discover = () => {
	const colorPalette = useSelector(selectColorPalette);
	const mainScreen = useSelector(selectMainScreenStyles);
	const isLogin = useSelector(selectProfileInfo).isLogin;
	const content = useSelector(selectAllPublications);
	const dispatch = useDispatch();

	// console.log(content);
	useEffect(() => {
		async function start() {
			const publications = await request('/publications', 'GET');
			dispatch({
				type: 'DOWNLOAD_ALL_PUBLICATIONS',
				payload: publications.data.publications,
			});
			console.log(publications.data.publications);
		}
		start();
	}, []);

	const PublicationsGlobal = () => (
		<View style={{ backgroundColor: colorPalette.alpha, flex: 1 }}>
			<PublicationsList colorPalette={colorPalette} publications={content} />
		</View>
	);
	const PublicationsFollowed = () => (
		<View style={{ backgroundColor: colorPalette.alpha, flex: 1 }}>
			<PublicationsList colorPalette={colorPalette} publications={content} />
		</View>
	);
	const PublicationsRecomendations = () => (
		<View style={{ backgroundColor: colorPalette.alpha, flex: 1 }}>
			<PublicationsList colorPalette={colorPalette} publications={content} />
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

	const styles = ScaledSheet.create(mainScreen);

	return (
		<View style={styles.discoverContainer}>
			<AppTitle title={'discover'} />
			<DiscoverHeader />
			<View style={{ backgroundColor: colorPalette.alpha, flex: 1 }}>
				<TabSelector
					screen={'Discover'}
					screens={isLogin ? userScreens : guestScreens}
				/>
			</View>
		</View>
	);
};
