import { ProfileInfo } from './ProfileInfo';
import { ProfileImage } from './ProfileImage';
import { View } from 'react-native';

export const ProfileAccount = (props) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<ProfileImage
				colorPalette={props.colorPalette}
				profileImagePath={props.profileImagePath}
			/>
			<ProfileInfo
				colorPalette={props.colorPalette}
				profileInfo={props.profileInfo}
			/>
		</View>
	);
};
