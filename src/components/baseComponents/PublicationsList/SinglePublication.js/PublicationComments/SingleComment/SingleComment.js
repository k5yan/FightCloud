import { View } from 'react-native';
import { useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { profileImagePath } from '../../../../../../constants/imagePath/profileImagePath';
import { PublicationDropDown } from '../../../../PublicationDropDown/PublicationDropDown';
import { AuthorNickname } from '../../PublicationHeader/AuthorInfo/AuthorNickname';
import { CommentText } from './CommentText';
import { UserImage } from '../../../../UserImage';
import { CommentFooter } from './CommentFooter';
export const SingleComment = ({ comment, colorPalette }) => {
	const [isEditing, setIsEditing] = useState(false);
	const handleEditing = () => {
		setIsEditing(!isEditing);
	};
	const authorData = {
		userId: comment.author.id,
		image: comment.author.avatar,
	};
	const imageStyle = {
		profilePictureContainer: {
			// backgroundColor: 'white',
			width: '48@s',
			height: '48@s',
			borderWidth: '2@s',
			borderRadius: 4,
			borderColor: 'white',
			marginRight: '6@s',
		},
		profilePicture: {
			width: '100%',
			height: '100%',
			borderRadius: 3,
		},
	};
	return (
		<Animated.View
			style={[styles.commentContainer, { borderColor: colorPalette.delta }]}
			layout={LinearTransition}
		>
			<Animated.View style={styles.commentBody} layout={LinearTransition}>
				<UserImage
					userData={authorData}
					type={'publication'}
					style={imageStyle}
				/>

				<View style={styles.allTextContainer}>
					<AuthorNickname
						colorPalette={colorPalette}
						nickname={comment.author.login}
					/>
					<CommentText
						id={comment.id}
						publicationId={comment.publicationId}
						colorPalette={colorPalette}
						text={comment.text}
						editing={isEditing}
						edit={handleEditing}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<PublicationDropDown
						edit={handleEditing}
						colorPalette={colorPalette}
						commentId={comment.id}
						publicationId={comment.publicationId}
						authorId={comment.author.id}
						type={'comment'}
					/>
				</View>
			</Animated.View>
			<CommentFooter colorPalette={colorPalette} comment={comment} />
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	commentContainer: {
		flex: 1,
		alignItems: 'flex-end',
		marginVertical: '4@s',
		marginHorizontal: '8@s',
		paddingTop: '4@s',
		paddingHorizontal: '4@s',
		borderWidth: '2@s',
		borderRadius: 4,
	},
	commentBody: {
		flexDirection: 'row',
		// alignItems: 'flex-start',
		zIndex: 1,
	},
	allTextContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginHorizontal: '6@s',
	},
	buttonContainer: {},
});
