import { View, Image, Text, TextInput, PixelRatio } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import {
	selectColorPalette,
	selectInfoStyles,
} from '../../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { selectProfileInfo } from '../../../../../../redux/selectors/data/ProfileSelectors/ProfileSelectors';
import { ActionButton } from '../../../../../baseComponents/ActionButton';
import {
	ACTION_BUTTON_SETTINGS,
	PROFILE_BUTTON_COLOR,
} from '../../../../../../constants/icons';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../../../../utils/secureStore';
import { useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { Animations } from '../../../../../baseComponents/Animations';
import { SettingsMenu } from './SettingsMenu';
export const ProfileInfo = () => {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);
	const closeSettings = () => {
		Animation['release'].onPress(0, 0);
		setTimeout(() => setIsSettingsOpen(false), 300);
	};

	const colorPalette = useSelector(selectColorPalette);
	const infoStyles = useSelector(selectInfoStyles);
	const profileInfo = useSelector(selectProfileInfo);
	const styles = ScaledSheet.create(infoStyles);
	const Animation = Animations();
	const menuStyles = ScaledSheet.create({
		menuContainer: {
			toWidth: '212@s',
			toHeight: '550@s',
		},
	});
	const animationStyle = Animation['release'].style(
		menuStyles.menuContainer.toWidth,
		menuStyles.menuContainer.toHeight,
	);
	return (
		<View style={styles.infoBox}>
			<View style={styles.infoBoxHeader}>
				<View style={styles.profileTitleContainer}>
					<Text style={[{ color: colorPalette.gamma }, styles.profileTitle]}>
						{profileInfo.title}
					</Text>
				</View>
				{profileInfo.isLogin && (
					<View>
						<ActionButton
							icon={ACTION_BUTTON_SETTINGS}
							color={PROFILE_BUTTON_COLOR}
							font={'Icons'}
							onPress={() => {
								setIsSettingsOpen(true);
								Animation['release'].onPress(
									menuStyles.menuContainer.toWidth,
									menuStyles.menuContainer.toHeight,
								);
							}}
							animation={'none'}
						/>
						{isSettingsOpen && (
							<SettingsMenu
								colorPalette={colorPalette}
								animationStyle={animationStyle}
								closeSettings={closeSettings}
							/>
						)}
					</View>
				)}
			</View>
			<View
				style={[
					{
						backgroundColor: colorPalette.delta,
						borderColor: colorPalette.delta,
						zIndex: 1,
					},
					styles.profileNicknameContainer,
				]}
			>
				<Text
					style={[{ color: colorPalette.gamma }, styles.profileNickname]}
					adjustsFontSizeToFit
					numberOfLines={1}
				>
					{profileInfo.login}
				</Text>
			</View>
		</View>
	);
};
