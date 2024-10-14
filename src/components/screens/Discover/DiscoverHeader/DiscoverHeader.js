import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { selectColorPalette } from '../../../../redux/selectors/styles/DiscoverSelectors/DiscoverSelectors';
import { selectProfileInfo } from '../../../../redux/selectors/data/ProfileSelectors/ProfileSelectors';
import { useSelector } from 'react-redux';
import { Bar } from '../../../baseComponents/Bar/Bar';
import { UserImage } from '../../../baseComponents/UserImage';
export const DiscoverHeader = () => {
	const colorPalette = useSelector(selectColorPalette);
	const imageStyle = {
		profilePictureContainer: {
			width: '48@s',
			height: '48@s',
			borderWidth: '2@s',
			borderRadius: 4,
			borderColor: 'white',
			marginLeft: '12@s',
		},
		profilePicture: {
			width: '100%',
			height: '100%',
			borderRadius: 3,
		},
	};
	const profileInfo = useSelector(selectProfileInfo);
	const userData = {
		userId: profileInfo.id,
		image: profileInfo.avatar,
		isLogin: profileInfo.isLogin,
	};
	return (
		<View style={styles.header}>
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Bar
					placeholder={'#EVO2024'}
					colorPalette={colorPalette}
					type={'discoverPublication'}
				/>
			</View>
			<UserImage userData={userData} type={'avatar'} style={imageStyle} />
		</View>
	);
};

const styles = ScaledSheet.create({
	header: {
		// backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: '12@s',
		marginVertical: '12@s',
	},
});
