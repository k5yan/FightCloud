import { ScaledSheet } from 'react-native-size-matters';
import { selectColorPalette } from '../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../../../../../redux/actions/ProfileActions/ProfileActions';
import {
	View,
	Text,
	TextInput,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
} from 'react-native';
import { AppTitle } from '../../../../baseComponents/ScreenTitle/ScreenTitle';
import { ActionButton } from '../../../../baseComponents/ActionButton';
import {
	postCall as userLogin,
	postCallForm as userRegistration,
} from '../../../../../utils/serverCalls';
import { useState } from 'react';
import { setItem, getItem } from '../../../../../utils/secureStore';
import loadPublications from '../../../../../utils/loaders/loadPublications/loadPublications';
import { profileImagePath } from '../../../../../constants/imagePath/profileImagePath';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { pickFile } from '../../../../baseComponents/Bar/barUtils';
import { ACTION_BUTTON_IMAGE } from '../../../../../constants/icons';
import { defaultAvatar } from './defaultAvatar';

export const LoginForm = () => {
	const [haveAccount, setHaveAccount] = useState(true);
	const [loginValue, changeLogin] = useState('');
	const [passwordValue, changePassword] = useState('');
	const dispatch = useDispatch();
	const colorPalette = useSelector(selectColorPalette);
	const [avatar, setAvatar] = useState(defaultAvatar());

	//submit button requests
	const loginUser = async () => {
		const { user, token } = await userLogin('/user/login', {
			login: loginValue.trim(),
			password: passwordValue.trim(),
		});
		return { user, token };
	};

	const registerUser = async () => {
		const userForm = new FormData();
		userForm.append('login', loginValue.trim());
		userForm.append('password', passwordValue.trim());
		[avatar].forEach((file) => {
			userForm.append('files', file);
		});

		const { user, token } = await userRegistration('/user/register', userForm);

		return { user, token };
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colorPalette.beta,
				justifyContent: 'space-between',
			}}
		>
			<View style={styles.loginFormContainer}>
				<AppTitle title={haveAccount ? 'login' : 'register'} />
				<View style={styles.dataFormContainer}>
					<Animated.View
						style={[
							styles.avatarPickerContainer,
							{
								position: haveAccount ? 'absolute' : 'relative',
								borderColor: colorPalette.delta,
								backgroundColor: colorPalette.delta,
							},
						]}
						layout={LinearTransition.duration(400)}
					>
						<ImageBackground
							source={{ uri: avatar.uri }}
							style={styles.avatarPickerImage}
							imageStyle={{ borderRadius: 5 }}
							onPress={() => console.log('pressed')}
						>
							<View style={styles.avatarPickerButton}>
								<ActionButton
									icon={ACTION_BUTTON_IMAGE}
									color={'rgba(0, 0, 0, 0.2)'}
									font={'Icons'}
									onPress={async () => {
										try {
											const pickedFile = await pickFile();
											pickedFile && setAvatar(pickedFile);
										} catch (error) {
											console.log(
												'ACTION_BUTTON_PICK_AVATAR: ',
												error,
											);
										}
									}}
									animation={'grow'}
								/>
							</View>
						</ImageBackground>
					</Animated.View>

					<Animated.View
						style={[
							styles.inputFormContainer,
							{ backgroundColor: colorPalette.beta },
						]}
						layout={LinearTransition.duration(400)}
					>
						<View
							style={[
								{ backgroundColor: colorPalette.alpha },
								styles.inputContainer,
							]}
						>
							<TextInput
								style={[{ color: colorPalette.gamma }, styles.input]}
								placeholder="Email"
								placeholderTextColor={'#D3D3D3'}
								value={loginValue}
								onChangeText={(text) => changeLogin(text)}
							/>
						</View>
						<View
							style={[
								{ backgroundColor: colorPalette.alpha },
								styles.inputContainer,
							]}
						>
							<TextInput
								style={[{ color: colorPalette.gamma }, styles.input]}
								placeholder="Password"
								placeholderTextColor={'#D3D3D3'}
								value={passwordValue}
								onChangeText={(text) => changePassword(text)}
							/>
						</View>
					</Animated.View>
				</View>
				<ActionButton
					icon={'submit'}
					color={colorPalette.gamma}
					font={'PixyFont'}
					type={'submitButton'}
					onPress={async () => {
						try {
							const { user, token } = haveAccount
								? await loginUser()
								: await registerUser();
							if ((user, token)) {
								await setItem('token', token);
								await loadPublications(dispatch, 'Profile');
								changeLogin('');
								changePassword('');
								dispatch(LOGIN(user));
							}
						} catch (error) {
							console.log(error);
						}
					}}
					animation={'grow'}
				/>
			</View>
			<View style={styles.footerTextContainer}>
				<Text style={[{ color: colorPalette.gamma }, styles.footerText]}>
					{haveAccount ? "don't have account?" : 'already have an account?'}
				</Text>
				<Text
					style={[{ color: colorPalette.gamma }, styles.footerTextHyper]}
					onPress={() => setHaveAccount(!haveAccount)}
				>
					{haveAccount ? '\nRegister' : '\nLogin'}
				</Text>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	avatarPickerContainer: {
		backgroundColor: 'red',
		width: '96@s',
		height: '96@s',
		borderWidth: '5@s',
		borderRadius: 10,
		justifyContent: 'flex-end',
		alignItems: 'top',
		marginRight: '16@s',
	},
	avatarPickerImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	avatarPickerButton: {
		marginLeft: '1@s',
		marginTop: '1@s',
	},
	avatarCancelButton: {
		position: 'absolute',
		backgroundColor: '#2F2F2F',
		borderColor: '#2F2F2F',
		top: '-20@s',
	},
	inputFormContainer: {
		justifyContent: 'center',
		paddingVertical: '2@s',
		// overflow: 'hidden',
	},
	inputContainer: {
		width: '180@s',
		height: '38@s',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: '4@s',
		paddingHorizontal: '12@s',
		borderRadius: 10,
	},
	input: {
		width: '100%',
		fontSize: '20@s',
		fontFamily: 'PixyFont',
	},
	submitButton: {
		borderWidth: '2@s',
		borderRadius: 8,
		paddingLeft: '6@s',
		paddingRight: '2@s',
		paddingVertical: '2@s',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '12@s',
	},
	footerTextContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '30@s',
	},
	footerText: {
		fontSize: '20@s',
		fontFamily: 'PixyFont',
	},
	footerTextHyper: {
		fontFamily: 'PixyFont',
		fontSize: '22@s',
		textDecorationLine: 'underline',
		lineHeight: '15@s',
	},
	dataFormContainer: {
		width: '100%',
		flexDirection: 'row',
		marginVertical: '20@s',
		paddingHorizontal: '30@s',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	loginFormContainer: {
		marginHorizontal: '16@s',
	},
});
