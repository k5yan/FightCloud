import { ScaledSheet } from 'react-native-size-matters';
import { PublicationHeader } from './PublicationHeader';
import { PublicationText } from './PublicationText';
import { PublicationImage } from './PublicationContent/PublicationImage/PublicationImage';
import { PublicationFooter } from './PublicationFooter/PublicationFooter';
import { yoshimitsuArtPath } from '../../../../constants/imagePath/publicationsPath/publicationsPath';
import { profileImagePath } from '../../../../constants/imagePath/profileImagePath';
import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { PublicationContent } from './PublicationContent';
import { PublicationLoader } from './PublicationLoader';
import { postCall as sendLike } from '../../../../utils/serverCalls';
import { getItem } from '../../../../utils/secureStore';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SinglePublication = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const [isLike, setIsLike] = useState(props.publication.likedByUser);
	const [likes, setLikes] = useState(props.publication.likes);
	const handleLike = async () => {
		setIsLike(!isLike);
		if (isLike) {
			setLikes(likes - 1);
		} else {
			setLikes(likes + 1);
		}
		const token = await getItem('token');
		if (token) {
			await sendLike(`/publications/${props.publication.id}/like`, {
				token: token,
			});
		}
	};
	const likesConfig = {
		amount: likes,
		isLikedByUser: isLike,
		set: async () => await handleLike(),
	};

	const [comments, setComments] = useState(props.publication.comments.length);
	const handleComments = (amount) => {
		if (amount !== comments) {
			setComments(amount);
		}
	};
	const commentsConfig = {
		amount: comments,
		set: (amount) => handleComments(amount),
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 100);
	}, []);
	const author = props.publication.author;

	const handleEditing = () => {
		setIsEditing(!isEditing);
	};

	const navigation = useNavigation();
	const OpenPublication = () => {
		navigation.navigate('Publication', {
			colorPalette: props.colorPalette,
			publicationData: {
				id: props.publication.id,
				authorId: props.publication.authorId,
			},
			type: props.type,
			handleLikeParent: async () => await likesConfig.set(),
			handleCommentsParent: (amount) => commentsConfig.set(amount),
			//перейти к созданию экрана с другим юзером
		});
	};

	const styles = ScaledSheet.create({
		publicationContainer: {
			height: isLoading ? '502@s' : 'auto',
			paddingHorizontal: '6@s',
			paddingVertical: '6@s',
			marginBottom: '4@s',
			marginHorizontal: '4@s',
			borderRadius: 4,
		},
	});

	return (
		<Animated.View
			key={props.publication.id}
			style={[
				{ backgroundColor: props.colorPalette.beta },
				styles.publicationContainer,
			]}
			layout={LinearTransition}
		>
			<TouchableOpacity activeOpacity={1} onPress={() => OpenPublication()}>
				<PublicationHeader
					id={props.publication.id}
					colorPalette={props.colorPalette}
					author={author}
					edit={handleEditing}
					type={props.type}
				/>
				<PublicationText
					id={props.publication.id}
					colorPalette={props.colorPalette}
					text={props.publication.text}
					editing={isEditing}
					edit={handleEditing}
					type={props.type}
				/>
				{props.publication.images.length > 0 && (
					<PublicationContent
						images={props.publication.images}
						publicationId={props.publication.id}
					/>
				)}
				<PublicationFooter
					colorPalette={props.colorPalette}
					publication={props.publication}
					likes={likesConfig}
					comments={commentsConfig}
					type={props.type}
				/>
				{/* {isLoading && <PublicationLoader colorPalette={props.colorPalette} />} */}
			</TouchableOpacity>
		</Animated.View>
	);
};
