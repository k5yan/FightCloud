import { ProfileInfo } from './ProfileInfo';
import { ProfileImage } from './ProfileImage';
import { View } from 'react-native';

export const ProfileAccount = (props) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<ProfileImage profileImagePath={props.profileImagePath} />
			<ProfileInfo profileInfo={props.profileInfo} />
		</View>
	);
};
