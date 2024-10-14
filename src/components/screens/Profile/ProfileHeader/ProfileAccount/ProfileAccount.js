import { ProfileInfo } from './ProfileInfo';
import { UserImage } from '../../../../baseComponents/UserImage';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectProfileInfo } from '../../../../../redux/selectors/data/ProfileSelectors/ProfileSelectors';
import { selectImageStyles } from '../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
export const ProfileAccount = () => {
	const imageStyles = useSelector(selectImageStyles);
	const profileInfo = useSelector(selectProfileInfo);
	const userData = {
		userId: profileInfo.id,
		image: profileInfo.avatar,
		isLogin: profileInfo.isLogin,
	};
	return (
		<View style={{ flexDirection: 'row' }}>
			<UserImage userData={userData} type={'avatar'} style={imageStyles} />
			<ProfileInfo />
		</View>
	);
};
