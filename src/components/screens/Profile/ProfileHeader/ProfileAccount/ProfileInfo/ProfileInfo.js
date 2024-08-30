import { View, Image, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import {
	selectColorPalette,
	selectInfoStyles,
} from '../../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { ActionButton } from '../../../../../baseComponents/ActionButton';
import {
	ACTION_BUTTON_SETTINGS,
	PROFILE_BUTTON_COLOR,
} from '../../../../../../constants/icons';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../../../../utils/secureStore';

export const ProfileInfo = (props) => {
	const colorPalette = useSelector(selectColorPalette);
	const infoStyles = useSelector(selectInfoStyles);
	const styles = ScaledSheet.create(infoStyles);
	const dispatch = useDispatch();

	return (
		<View style={styles.infoBox}>
			<View style={styles.infoBoxHeader}>
				<View style={styles.profileTitleContainer}>
					<Text style={[{ color: colorPalette.gamma }, styles.profileTitle]}>
						{props.profileInfo.title}
					</Text>
				</View>
				<ActionButton
					icon={ACTION_BUTTON_SETTINGS}
					color={PROFILE_BUTTON_COLOR}
					font={'Icons'}
					onPress={() => {
						dispatch({ type: 'LOGOUT' });
						deleteItem('token');
					}}
					animation={'grow'}
				/>
			</View>
			<View
				style={[
					{
						backgroundColor: colorPalette.delta,
						borderColor: colorPalette.delta,
					},
					styles.profileNicknameContainer,
				]}
			>
				<Text
					style={[{ color: colorPalette.gamma }, styles.profileNickname]}
					adjustsFontSizeToFit
					numberOfLines={1}
				>
					{props.profileInfo.nickname}
				</Text>
			</View>
		</View>
	);
};
