import { View } from 'react-native';
import { ActionButton } from '../../../../../../../baseComponents/ActionButton';
import { ScaledSheet } from 'react-native-size-matters';
import { Label } from './parts';
import { pickFile } from '../../../../../../../baseComponents/Bar/barUtils';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { UserImage } from '../../../../../../../baseComponents/UserImage';
import {
	ACTION_BUTTON_CANCEL,
	ACTION_BUTTON_RESET,
} from '../../../../../../../../constants/icons';
import { defaultAvatar } from '../../../../../MidScreen/LoginForm/defaultAvatar';

export const AvatarBlock = ({ avatar, currentAvatar, changeAvatar, color }) => {
	const imageStyle = {
		profilePictureContainer: {
			width: '48@s',
			height: '48@s',
			borderWidth: '2@s',
			borderRadius: 4,
			borderColor: 'white',
		},
		profilePicture: {
			width: '100%',
			height: '100%',
			borderRadius: 3,
		},
	};
	return (
		<Animated.View layout={LinearTransition}>
			<Label text={'avatar'} />
			<View style={styles.container}>
				<View style={styles.avatarContainer}>
					<UserImage
						userData={avatar}
						type={'avatarChanger'}
						style={imageStyle}
					/>
					{/* {avatar.avatarId.uri !== defaultAvatar().uri && ( */}
					<Animated.View
						style={[
							styles.removeButton,
							{ backgroundColor: '#2F2F2F', borderColor: '#2F2F2F' },
						]}
					>
						<ActionButton
							icon={ACTION_BUTTON_CANCEL}
							color={'#A9A9A9'}
							font={'Icons'}
							onPress={async () => {
								try {
									changeAvatar({
										...avatar,
										image: defaultAvatar(), //change to default image
										isChanged: true,
									});
									console.log('pressed');
								} catch (error) {
									console.log('ACTION_BUTTON_REMOVE_AVATAR: ', error);
								}
							}}
							animation={'grow'}
							type={'smallButton'}
						/>
					</Animated.View>
					{/* )} */}
				</View>
				<View style={styles.changeButtonsContainer}>
					<View
						style={[
							styles.pickAvatarButtonContainer,
							{
								backgroundColor: color,
								borderColor: color,
							},
						]}
					>
						<ActionButton
							icon={'change'}
							color={'white'}
							font={'PixyFont'}
							onPress={async () => {
								const pickedFile = await pickFile();
								pickedFile &&
									changeAvatar({
										...avatar,
										image: pickedFile,
										isChanged: true,
									});
							}}
							animation={'grow'}
							type={'middleButton'}
						/>
					</View>
					<View style={[styles.resetAvatarButtonContainer]}>
						<ActionButton
							icon={ACTION_BUTTON_RESET}
							color={'white'}
							font={'Icons'}
							onPress={() => {
								changeAvatar(currentAvatar);
							}}
							animation={'grow'}
							// type={'middleButton'}
						/>
					</View>
				</View>
			</View>
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	pickAvatarButtonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: '2@s',
		borderRadius: 4,
		paddingVertical: '2@s',
		paddingRight: '1@s',
		paddingLeft: '2@s',
		marginHorizontal: '6@s',
	},
	resetAvatarButtonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '12@s',
		borderRadius: 4,
	},
	changeButtonsContainer: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		flexDirection: 'row',
	},
	container: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'row',
		marginVertical: '4@s',
	},
	removeButton: {
		borderRadius: '90@s',
		borderWidth: `2@s`,
		position: 'absolute',
		right: `38@s`,
		bottom: '38@s',
	},
	avatarContainer: {
		marginLeft: '12@s',
	},
});
