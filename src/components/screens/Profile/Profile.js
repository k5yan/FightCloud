import { SafeAreaView, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectMainScreenStyles,
	selectColorPalette,
} from '../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { useEffect } from 'react';
import { MidScreen } from './MidScreen/MidScreen';
import loadPublications from '../../../utils/loaders/loadPublications/loadPublications';
import safeArea from '../../../utils/safeArea/safeArea';
export const Profile = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		loadPublications(dispatch, 'Profile'); // добавить обработчик состояния загрузки и анимацию загрузки
	}, []);

	const mainScreen = useSelector(selectMainScreenStyles);
	const styles = ScaledSheet.create(mainScreen);
	const colorPalette = useSelector(selectColorPalette);
	return (
		<SafeAreaView
			style={[styles.profileContainer, safeArea(colorPalette.alpha).style]}
		>
			<View style={[styles.profileInfo]}>
				<ProfileHeader />
			</View>
			<View style={{ zIndex: 1, flex: 1 }}>
				<MidScreen />
			</View>
		</SafeAreaView>
	);
};
