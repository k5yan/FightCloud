import { ScaledSheet } from 'react-native-size-matters';
import {
	ACTION_BUTTON_FAVORITE,
	ACTION_BUTTON_FAVORITE_FILL,
} from '../../../../../../../constants/icons';
import { ActionButton } from '../../../../../ActionButton';
import { Text } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { useState } from 'react';
import { postCall as sendLike } from '../../../../../../../utils/serverCalls';
import { getItem } from '../../../../../../../utils/secureStore';

export const CommentFooter = (props) => {
	const [isLike, setIsLike] = useState(props.comment.likedByUser);
	const [likes, setLikes] = useState(props.comment.likes);
	const handleLike = async () => {
		const token = await getItem('token');

		if (token) {
			setIsLike(!isLike);
			if (isLike) {
				setLikes(likes - 1);
			} else {
				setLikes(likes + 1);
			}

			await sendLike(
				`/publications/${props.comment.publicationId}/comments/${props.comment.id}/like`,
				{
					token: token,
				},
			);
		}
	};

	return (
		<Animated.View style={styles.commentFooter} layout={LinearTransition}>
			<Animated.View style={styles.microInfoContainer} layout={LinearTransition}>
				<Text style={[styles.counter, { color: props.colorPalette.gamma }]}>
					{likes}
				</Text>
				<ActionButton
					icon={isLike ? ACTION_BUTTON_FAVORITE_FILL : ACTION_BUTTON_FAVORITE}
					color={isLike ? '#CD5C5C' : props.colorPalette.gamma}
					font={'Icons'}
					onPress={async () => {
						try {
							await handleLike();
						} catch (error) {
							console.log(error);
						}
					}}
					animation={'grow'}
				/>
			</Animated.View>
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	commentFooter: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	microInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '2@s',
		marginVertical: '4@s',
	},
	counter: {
		fontFamily: 'sans-serif-medium',
		fontSize: '14@s',
		marginHorizontal: '4@s',
	},
});
