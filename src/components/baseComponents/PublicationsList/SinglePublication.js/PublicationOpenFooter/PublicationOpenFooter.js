import { View, Text } from 'react-native';
import { ActionButton } from '../../../ActionButton';
import { ScaledSheet } from 'react-native-size-matters';
import {
	ACTION_BUTTON_COMMENTS,
	ACTION_BUTTON_FAVORITE,
	ACTION_BUTTON_FAVORITE_FILL,
} from '../../../../../constants/icons';
import { useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';

export const PublicationOpenFooter = (props) => {
	const [isLike, setIsLike] = useState(props.publication.likedByUser);
	const [likes, setLikes] = useState(props.publication.likes);
	const handleLikeOpen = async () => {
		await props.handleLike();
		setIsLike(!isLike);
		if (isLike) {
			setLikes(likes - 1);
		} else {
			setLikes(likes + 1);
		}
	};
	return (
		<Animated.View layout={LinearTransition} style={styles.footerContainer}>
			<View style={styles.microInfoContainer}>
				<ActionButton
					icon={
						props.likes.isLikedByUser
							? ACTION_BUTTON_FAVORITE_FILL
							: ACTION_BUTTON_FAVORITE
					}
					color={
						props.likes.isLikedByUser ? '#CD5C5C' : props.colorPalette.gamma
					}
					font={'Icons'}
					onPress={async () => {
						try {
							await props.likes.set();
						} catch (error) {
							console.log(error);
						}
					}}
					animation={'grow'}
				/>
				<Text style={[styles.counter, { color: props.colorPalette.gamma }]}>
					{props.likes.amount}
				</Text>
			</View>
			<View style={styles.microInfoContainer}>
				<ActionButton
					icon={ACTION_BUTTON_COMMENTS}
					color={props.colorPalette.gamma}
					font={'Icons'}
					onPress={async () => {
						try {
							console.log('pressed');
						} catch (error) {
							console.log(error);
						}
					}}
					animation={'none'}
				/>
				<Text style={[styles.counter, { color: props.colorPalette.gamma }]}>
					{props.comments.amount}
				</Text>
			</View>
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	footerContainer: {
		flexDirection: 'row',
		marginTop: '6@s',
	},
	microInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '4@s',
	},
	counter: {
		fontFamily: 'sans-serif-medium',
		fontSize: '14@s',
		marginHorizontal: '4@s',
	},
});
