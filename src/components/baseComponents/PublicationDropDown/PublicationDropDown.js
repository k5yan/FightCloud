import { View, findNodeHandle } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../ActionButton';
import {
	ACTION_BUTTON_DELETE,
	ACTION_BUTTON_EDIT,
	ACTION_BUTTON_MEATBALLS,
	ACTION_BUTTON_REPORT,
	DELETE_BUTTON_COLOR,
	REPORT_BUTTON_COLOR,
} from '../../../constants/icons';
import { selectProfileInfo } from '../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { deletePublication, deleteComment } from './dropDownUtils.js';
import Animated, { LinearTransition, Easing } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Animations } from '../Animations/Animations.js';
import { useToast } from 'react-native-toast-notifications';

export const PublicationDropDown = (props) => {
	const navigation = useNavigation();
	const user = useSelector(selectProfileInfo).id;
	const publicationAuthor = props.authorId;
	const isAuthor = user === publicationAuthor;
	const type = props.type;
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const Animation = Animations();
	const menuToggle = () => {
		setShowMenu(!showMenu);
		Animation.rotation.onPress();
		Animation.rotation.onPressOut();
	};

	const dropMenuBackground = {
		true: props.colorPalette.alpha,
		false: 'transparent',
	};

	const toast = useToast();
	const deletingProps = {
		dispatch: dispatch,
		publicationId: props.publicationId,
		type: props.type,
		toast: toast,
		colorPalette: props.colorPalette,
	};

	const handleDelete = {
		discoverPublication: async () => await deletePublication(deletingProps),
		discoverPublicationOpen: async () => {
			await deletePublication(deletingProps);
			navigation.goBack();
		},
		userPublication: async () => await deletePublication(deletingProps),
		userPublicationOpen: async () => {
			await deletePublication(deletingProps);
			navigation.goBack();
		},
		comment: async () =>
			await deleteComment(
				dispatch,
				props.publicationId,
				props.commentId,
				toast,
				props.colorPalette,
			),
	};
	return (
		<Animated.View
			layout={LinearTransition.easing(Easing.ease).duration(300)}
			style={[
				type === 'comment'
					? styles.publicationButtonContainer_comment
					: styles.publicationButtonContainer,
				{ backgroundColor: dropMenuBackground[showMenu] },
			]}
		>
			<Animated.View style={Animation.rotation.style}>
				<ActionButton
					font={'Icons'}
					icon={ACTION_BUTTON_MEATBALLS}
					color={props.colorPalette.gamma}
					onPress={async () => {
						try {
							menuToggle();
						} catch (error) {
							console.log('toggleDropDown: ', error);
						}
					}}
					animation={'none'}
				/>
			</Animated.View>
			{showMenu && (
				<View
					style={
						type === 'comment'
							? styles.dropDownContainer_comment
							: styles.dropDownContainer
					}
				>
					{isAuthor && (
						<View
							style={
								type === 'comment'
									? styles.menuButton_comment
									: styles.menuButton
							}
						>
							<ActionButton
								font={'Icons'}
								icon={ACTION_BUTTON_EDIT}
								color={REPORT_BUTTON_COLOR}
								onPress={async () => {
									try {
										props.edit();
										menuToggle();
									} catch (error) {
										console.log('dropDownEdit: ', error);
									}
								}}
								animation={'grow'}
							/>
						</View>
					)}
					{isAuthor && (
						<View
							style={
								type === 'comment'
									? styles.menuButton_comment
									: styles.menuButton
							}
						>
							<ActionButton
								font={'Icons'}
								icon={ACTION_BUTTON_DELETE}
								color={DELETE_BUTTON_COLOR}
								onPress={async () => {
									await handleDelete[type]();
								}}
								animation={'grow'}
							/>
						</View>
					)}

					{!isAuthor && (
						<View
							style={
								type === 'comment'
									? styles.reportButton_comment
									: styles.reportButton
							}
						>
							<ActionButton
								font={'Icons'}
								icon={ACTION_BUTTON_REPORT}
								color={REPORT_BUTTON_COLOR}
								onPress={async () => {
									try {
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
		position: 'absolute',
		right: 0,
		paddingHorizontal: '3@s',
		paddingVertical: '6@s',
		justifyContent: 'center',
		borderRadius: 10,
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
	publicationButtonContainer_comment: {
		transform: [{ rotateY: '180deg' }],
		position: 'absolute',
		right: 0,
		paddingLeft: '3@s',
		paddingVertical: '2@s',
		justifyContent: 'center',
		borderRadius: 10,
		overflow: 'hidden',
		flexDirection: 'row',
	},
	dropDownContainer_comment: {
		flexDirection: 'row',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	menuButton_comment: {
		marginRight: '6@s',
		transform: [{ rotateY: '180deg' }],
	},
	reportButton_comment: {
		marginRight: '6@s',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
});
