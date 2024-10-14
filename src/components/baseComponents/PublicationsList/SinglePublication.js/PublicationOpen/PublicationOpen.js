import { useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';
import { PublicationHeader } from '../PublicationHeader';
import { PublicationText } from '../PublicationText';
import { PublicationContent } from '../PublicationContent';
import { PublicationOpenFooter } from '../PublicationOpenFooter';
import { PublicationComments } from '../PublicationComments';

export const PublicationOpen = ({
	publication,
	colorPalette,
	type,
	handleLikeParent,
	handleCommentsParent,
	isLoaded,
}) => {
	const [isLike, setIsLike] = useState(publication.likedByUser);
	const [likes, setLikes] = useState(publication.likes);
	const handleLike = async () => {
		setIsLike(!isLike);
		if (isLike) {
			setLikes(likes - 1);
		} else {
			setLikes(likes + 1);
		}
		await handleLikeParent();
	};
	const likesConfig = {
		amount: likes,
		isLikedByUser: isLike,
		set: async () => await handleLike(),
	};

	const [comments, setComments] = useState();
	const handleComments = (amount) => {
		if (amount !== comments) {
			setComments(amount);
			handleCommentsParent(amount);
		}
	};
	const commentsConfig = {
		amount: comments,
		set: () => handleComments(),
	};

	const [isEditing, setIsEditing] = useState(false);
	const handleEditing = () => {
		setIsEditing(!isEditing);
	};

	const styles = ScaledSheet.create({
		publicationContainer: {
			paddingHorizontal: '6@s',
			paddingVertical: '6@s',
			marginTop: '2@s',
			marginHorizontal: '2@s',
			borderRadius: 4,
			justifyContent: 'space-between',
		},
		headerContainer: {
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginTop: '40@s',
			paddingBottom: '12@s',
			flexDirection: 'row',
			borderBottomWidth: '2@s',
		},
		headerTextContainer: {
			// marginLeft: '8@s',
			alignItems: 'flex-start',
			justifyContent: 'center',
		},
		headerText: { fontFamily: 'PixyFont', fontSize: '25@s', color: '#fff' },
		headerButtonContainer: {
			marginHorizontal: '16@s',
		},
		barContainer: {
			borderTopWidth: '2@s',
			borderRightWidth: '2@s',
			borderLeftWidth: '2@s',
			borderTopRightRadius: 10,
			borderTopLeftRadius: 10,
			paddingBottom: '4@s',
		},
	});

	return (
		<Animated.ScrollView
			contentContainerStyle={{ backgroundColor: colorPalette.beta }}
			keyboardShouldPersistTaps={'handled'}
			layout={LinearTransition}
		>
			<Animated.View
				layout={LinearTransition}
				style={[
					{ backgroundColor: colorPalette.beta },
					styles.publicationContainer,
				]}
			>
				<PublicationHeader
					id={publication.id}
					colorPalette={colorPalette}
					author={publication.author}
					edit={handleEditing}
					type={type + 'Open'}
				/>
				{/* {publication.text.length > 0 && ( */}
				<PublicationText
					id={publication.id} //сделать проверку на наличие
					colorPalette={colorPalette}
					text={publication.text}
					editing={isEditing}
					edit={handleEditing}
					type={type}
				/>
				{/* )} */}
				{publication && publication.images.length > 0 && (
					<PublicationContent
						images={publication.images}
						publicationId={publication.id}
					/>
				)}
				<PublicationOpenFooter
					colorPalette={colorPalette}
					publication={publication}
					handleLike={handleLike}
					likes={likesConfig}
					comments={commentsConfig}
				/>
			</Animated.View>
			{isLoaded && (
				<PublicationComments
					colorPalette={colorPalette}
					handleComments={handleComments}
				/>
			)}
		</Animated.ScrollView>
	);
};
