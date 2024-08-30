import { ScaledSheet } from 'react-native-size-matters';
import { selectColorPalette } from '../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../../../../../redux/actions/ProfileActions/ProfileAcrions';
import { View, TextInput } from 'react-native';
import { AppTitle } from '../../../../baseComponents/AppTitle/AppTitle';
import { ActionButton } from '../../../../baseComponents/ActionButton';
import { login } from '../../../../../utils/serverCalls/login';
import { request } from '../../../../../utils/serverCalls/request';
import { useState } from 'react';
import { setItem, getItem } from '../../../../../utils/secureStore';
import { updatePublications } from '../../../../../utils/updatePublications';
export const LoginForm = () => {
	const stylesS = {
		inputContainer: {
			height: '38@s',
			justifyContent: 'center',
			alignItems: 'center',
			marginHorizontal: '16@s',
			marginVertical: '8@s',
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
		loginFormContainer: { marginHorizontal: '16@s' },
	};
	const dispatch = useDispatch();
	const [loginValue, changeLogin] = useState('');
	const [passwordValue, changePassword] = useState('');
	const colorPalette = useSelector(selectColorPalette);

	const styles = ScaledSheet.create(stylesS);
	return (
		<View style={{ flex: 1, backgroundColor: colorPalette.beta }}>
			<View style={styles.loginFormContainer}>
				<AppTitle title={'login'} />
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
				<ActionButton
					icon={'submit'}
					color={colorPalette.gamma}
					font={'PixyFont'}
					type={'submitButton'}
					onPress={async () => {
						try {
							const { user, token } = await request('/user/login', 'POST', {
								login: loginValue.trim(),
								password: passwordValue.trim(),
							});
							await setItem('token', token);
							dispatch(LOGIN(user.login));
							await updatePublications(dispatch);
							changeLogin('');
							changePassword('');
						} catch (error) {
							console.log(error);
						}
					}}
					animation={'grow'}
				/>
			</View>
		</View>
	);
};
