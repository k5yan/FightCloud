import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {
	profileImagePath,
	defaultProfileImagePath,
} from '../../../constants/imagePath/profileImagePath';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectMainScreenStyles,
	selectProfileInfo,
} from '../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { useEffect, useState } from 'react';
import { getItem } from '../../../utils/secureStore';
import { request } from '../../../utils/serverCalls/request';
import { MidScreen } from './MidScreen/MidScreen';

export const Profile = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectProfileInfo).nickname;

	useEffect(() => {
		async function start() {
			const token = await getItem('token');
			if (user && token) {
				const publications = await request('/user/publications', 'POST', {
					token: token,
				});
				console.log(publications.data.publications);
				dispatch({
					type: 'DOWNLOAD_USER_PUBLICATIONS',
					payload: publications.data.publications,
				});
			}
		}
		start();
	}, []);

	const mainScreen = useSelector(selectMainScreenStyles);
	const styles = ScaledSheet.create(mainScreen);
	const profileInfo = useSelector(selectProfileInfo);

	return (
		<View style={styles.profileContainer}>
			<View style={styles.profileInfo}>
				<ProfileHeader
					profileImagePath={
						profileInfo.isLogin ? profileImagePath : defaultProfileImagePath
					}
					profileInfo={profileInfo}
				/>
			</View>
			<MidScreen />
		</View>
	);
};
