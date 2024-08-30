import { ScaledSheet } from 'react-native-size-matters';
import { PublicationHeader } from './PublicationHeader';
import { PublicationText } from './PublicationText';
import { PublicationImage } from './PublicationImage/PublicationImage';
import { PublicationFooter } from './PublicationFooter/PublicationFooter';
import { yoshimitsuArtPath } from '../../../../constants/imagePath/publicationsPath/publicationsPath';
import { profileImagePath } from '../../../../constants/imagePath/profileImagePath';
import { useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';

export const SinglePublication = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const handleEditing = () => {
		setIsEditing(!isEditing);
	};
	return (
		<Animated.View
			layout={LinearTransition}
			style={[
				{ backgroundColor: props.colorPalette.beta },
				styles.publicationContainer,
			]}
		>
			<PublicationHeader
				id={props.publication.id}
				colorPalette={props.colorPalette}
				author={{ nickname: props.publication.author, image: profileImagePath }}
				edit={handleEditing}
			/>
			<PublicationText
				id={props.publication.id}
				colorPalette={props.colorPalette}
				text={props.publication.text}
				editing={isEditing}
			/>
			<PublicationImage imagePath={yoshimitsuArtPath} />
			<PublicationFooter
				// id={props.publication.id}
				colorPalette={props.colorPalette}
				// comments={props.publication.comments}
				// likes={props.publication.likes}
				// likedByUser={props.publication.likedByUser}
				publication={props.publication}
			/>
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	publicationContainer: {
		paddingHorizontal: '6@s',
		paddingVertical: '6@s',
		marginVertical: '4@s',
		marginHorizontal: '4@s',
		borderRadius: 4,
	},
});
