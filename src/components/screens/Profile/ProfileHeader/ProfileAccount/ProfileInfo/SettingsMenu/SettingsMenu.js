import { ScaledSheet } from 'react-native-size-matters';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, getItem } from '../../../../../../../utils/secureStore';
import { selectProfileInfo } from '../../../../../../../redux/selectors/data/ProfileSelectors/ProfileSelectors';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { View, PixelRatio } from 'react-native';
import { postCallForm as editUser } from '../../../../../../../utils/serverCalls';
import {
	AvatarBlock,
	HeaderBlock,
	DefaultBlock as NicknameBlock,
	DefaultBlock as TitleBlock,
	DefaultBlock as EmailBlock,
	DefaultBlock as PasswordBlock,
	FooterBlock,
} from './blocks';
import { updatePublicationStorage } from '../../../../../../../utils/updaters';

export const SettingsMenu = ({ colorPalette, animationStyle, closeSettings }) => {
	const [count, setCount] = useState(0);
	const handleCount = (type) => {
		const set = {
			['+']: () => setCount(count + 1),
			['-']: () => setCount(count - 1),
		};
		set[type]();
	};

	const editingCounter = {
		current: count,
		increase: () => handleCount('+'),
		decrease: () => handleCount('-'),
	};

	const [isOpen, setIsOpen] = useState(false);
	const close = () => {
		setIsOpen(false);
		closeSettings();
	};
	useEffect(() => {
		setTimeout(() => setIsOpen(true), 300);
	}, []);

	const profileInfo = useSelector(selectProfileInfo);
	const currentAvatar = {
		userId: profileInfo.id,
		image: profileInfo.avatar,
		isChanged: false,
	};
	const [avatar, setAvatar] = useState(currentAvatar);
	const handleAvatar = (data) => setAvatar(data);

	const [userNickname, setUserNickname] = useState(profileInfo.login);
	const currentUserNickname = profileInfo.login;
	const handleNickname = (data) => setUserNickname(data);

	const [userTitle, setUserTitle] = useState(profileInfo.title);
	const currentUserTitle = profileInfo.title;
	const handleTitle = (data) => setUserTitle(data);

	const makeNewUserData = (avatar, userNickname, userTitle) => {
		const userForm = new FormData();
		const conditions = [
			{
				condition: avatar.image !== currentAvatar.image,
				field: 'avatar',
				value: avatar.image,
			},
			{
				condition: userNickname !== currentUserNickname,
				field: 'login',
				value: userNickname,
			},
			{
				condition: userTitle !== currentUserTitle,
				field: 'title',
				value: userTitle,
			},
		];
		conditions.forEach((current) => {
			if (current.condition) {
				userForm.append(
					current.field === 'avatar' ? 'files' : current.field,
					current.value,
				);
			}
		});

		return userForm;
	};

	const dispatch = useDispatch();
	const handleSubmit = async () => {
		const userForm = makeNewUserData(avatar, userNickname, userTitle);
		if (userForm._parts.length > 0) {
			const token = await getItem('token');
			userForm.append('token', token);
			const newUserData = await editUser('/user/edit', userForm);
			updatePublicationStorage(dispatch, 'userPublication');
			dispatch({ type: 'EDIT_USER', payload: newUserData });
		}
	};
	const handleOut = () => {
		dispatch({ type: 'LOGOUT' });
		deleteItem('token');
	};

	const makeProps = (initialTextValue, textValue, handleText, type = 'default') => ({
		initialTextValue,
		textValue,
		handleText,
		editingCounter,
		colorPalette,
		type,
	});
	const nicknameProps = makeProps(currentUserNickname, userNickname, handleNickname);
	const titleProps = makeProps(currentUserTitle, userTitle, handleTitle);
	const emailProps = makeProps(
		currentUserNickname,
		userNickname,
		handleNickname,
		'secure',
	);
	const passwordProps = makeProps(
		currentUserNickname,
		userNickname,
		handleNickname,
		'secure',
	);

	const styles = ScaledSheet.create({
		menuContainer: {
			position: 'absolute',
			right: 0,
			borderRadius: 4,
			zIndex: 2,
			overflow: 'hidden',
		},
		miniView: {
			position: 'absolute',
			right: 0,
			width: '212@s',
			minHeight: '394@s',
			borderRadius: 4,
			overflow: 'hidden',
		},
		miniViewBorderWidth: '2@s',
	});
	return (
		<Animated.View style={[styles.menuContainer, animationStyle]}>
			<Animated.View
				style={[
					styles.miniView,
					{
						backgroundColor: colorPalette.beta,
						borderColor: colorPalette.delta,
						borderWidth: PixelRatio.roundToNearestPixel(
							styles.miniViewBorderWidth,
						),
					},
				]}
				layout={isOpen ? LinearTransition : null}
			>
				<HeaderBlock closeSettings={close} />
				<AvatarBlock
					avatar={avatar}
					currentAvatar={currentAvatar}
					changeAvatar={handleAvatar}
					color={colorPalette.alpha}
				/>
				<NicknameBlock dataChangerProps={nicknameProps} label={'nickname'} />
				<TitleBlock dataChangerProps={titleProps} label={'title'} />
				<EmailBlock dataChangerProps={emailProps} label={'email'} />
				<PasswordBlock dataChangerProps={passwordProps} label={'password'} />
				<FooterBlock
					submit={handleSubmit}
					logout={handleOut}
					colorPalette={colorPalette}
					closeSettings={close}
				/>
			</Animated.View>
		</Animated.View>
	);
};
