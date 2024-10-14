import Animated, { LinearTransition, Easing } from 'react-native-reanimated';
import { View, Text } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../../../ActionButton';
import { DOWNLOAD_COMMENTS } from '../../../../../redux/actions/publicationActions';
import { getItem } from '../../../../../utils/secureStore';
import {
	postCall as getData,
	postCall as sendLike,
} from '../../../../../utils/serverCalls';
import {
	ACTION_BUTTON_COMMENTS,
	ACTION_BUTTON_FAVORITE,
	ACTION_BUTTON_FAVORITE_FILL,
} from '../../../../../constants/icons';

export const PublicationFooter = (props) => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

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
							const token = await getItem('token');
							if (token) {
								navigation.navigate('Publication', {
									colorPalette: props.colorPalette,
									publicationData: {
										id: props.publication.id,
										authorId: props.publication.authorId,
									},
									// publication: publication,
									type: props.type,
									handleLikeParent: async () => await props.likes.set(),
									handleCommentsParent: (amount) =>
										props.comments.set(amount),
									//добавить toast в момент удаления, создания, редактирования
									//перейти к созданию экрана с другим юзером
								});
							}
						} catch (error) {
							console.log(error);
						}
					}}
					animation={'grow'}
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
