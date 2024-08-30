import { View } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { Animations } from '../../../../Animations';
import { ActionButton } from '../../../../ActionButton';
import { request } from '../../../../../../utils/serverCalls/request';
import { updatePublications } from '../../../../../../utils/updatePublications';
import { getItem } from '../../../../../../utils/secureStore';
import {
	ACTION_BUTTON_DELETE,
	ACTION_BUTTON_EDIT,
	ACTION_BUTTON_MEATBALLS,
	ACTION_BUTTON_REPORT,
	DELETE_BUTTON_COLOR,
	REPORT_BUTTON_COLOR,
} from '../../../../../../constants/icons';
import { selectProfileInfo } from '../../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { ActionButton2 } from '../../../../ActionButton/ActionButton';
import Animated, { LinearTransition, Easing } from 'react-native-reanimated';

export const PublicationDropDown = (props) => {
	const user = useSelector(selectProfileInfo).nickname;
	const publicationAuthor = props.author;
	const isAuthor = user === publicationAuthor;

	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const menuToggle = () => {
		// Animation.rolling();
		setShowMenu(!showMenu);
	};

	const dropMenuBackground = {
		true: props.colorPalette.alpha,
		false: 'transparent',
	};
	return (
		<Animated.View
			layout={LinearTransition.easing(Easing.ease).duration(300)}
			style={[
				styles.publicationButtonContainer,
				{ backgroundColor: dropMenuBackground[showMenu] },
			]}
		>
			<ActionButton
				font={'Icons'}
				icon={ACTION_BUTTON_MEATBALLS}
				color={props.colorPalette.gamma}
				onPress={async () => {
					try {
						menuToggle();
					} catch (error) {
						console.log('button: ', error);
					}
				}}
				animation={'rotation'}
			/>
			{showMenu && (
				<View style={styles.dropDownContainer}>
					{!isAuthor && (
						<View style={styles.reportButton}>
							<ActionButton
								font={'Icons'}
								icon={ACTION_BUTTON_REPORT}
								color={REPORT_BUTTON_COLOR}
								onPress={async () => {
									try {
										console.log('report отправлен');
									} catch (error) {
										console.log('button: ', error);
									}
								}}
								animation={'grow'}
							/>
						</View>
					)}

					{isAuthor && (
						<View style={styles.menuButton}>
							<ActionButton
								font={'Icons'}
								icon={ACTION_BUTTON_EDIT}
								color={REPORT_BUTTON_COLOR}
								onPress={async () => {
									try {
										props.edit();
									} catch (error) {
										console.log('button: ', error);
									}
								}}
								animation={'grow'}
							/>
						</View>
					)}

					{isAuthor && (
						<View style={styles.menuButton}>
							<ActionButton
								font={'Icons'}
								icon={ACTION_BUTTON_DELETE}
								color={DELETE_BUTTON_COLOR}
								onPress={async () => {
									try {
										const token = await getItem('token');
										await request(
											`/publications/${props.id}`,
											'DELETE',
											{
												token: token,
											},
										);
										await updatePublications(dispatch);
									} catch (error) {
										console.log('button: ', error);
									}
								}}
								animation={'grow'}
							/>
						</View>
					)}
				</View>
			)}
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	publicationButtonContainer: {
		paddingHorizontal: '3@s',
		borderRadius: 10,
		paddingVertical: '6@s',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	dropDownContainer: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	menuButton: {
		marginTop: '6@s',
	},
	reportButton: {
		marginTop: '6@s',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
});
