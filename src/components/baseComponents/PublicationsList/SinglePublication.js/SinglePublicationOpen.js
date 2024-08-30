import { ScaledSheet } from 'react-native-size-matters';
import { PublicationHeader } from './PublicationHeader';
import { PublicationText } from './PublicationText';
import { PublicationImage } from './PublicationImage/PublicationImage';
import { yoshimitsuArtPath } from '../../../../constants/imagePath/publicationsPath/publicationsPath';
import { profileImagePath } from '../../../../constants/imagePath/profileImagePath';
import { useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ScrollView, View, Text } from 'react-native';
import { PublicationComments } from './PublicationComments';
import { ActionButton } from '../../ActionButton';
import { ACTION_BUTTON_BURGER } from '../../../../constants/icons';
import { PublicationFooterOpen } from './PublicationFooterOpen/PublicationFooterOpen';

export const SinglePublicationOpen = (props) => {
	const colorPalette = props.route.params.colorPalette;
	const publication = props.route.params.publication;
	const comments = props.route.params.comments;

	const [isEditing, setIsEditing] = useState(false);
	const handleEditing = () => {
		setIsEditing(!isEditing);
	};
	return (
		<View style={{ backgroundColor: colorPalette.beta, flex: 1 }}>
			<View style={[styles.headerContainer, { borderColor: colorPalette.alpha }]}>
				<View style={styles.headerButtonContainer}>
					<ActionButton
						icon={ACTION_BUTTON_BURGER}
						color={colorPalette.gamma}
						font={'Icons'}
						onPress={async () => {
							try {
							} catch (error) {
								console.log('ACTION_BUTTON_SEND: ', error);
							}
						}}
						animation={'grow'}
					/>
				</View>
				<View style={styles.headerTextContainer}>
					<Text style={styles.headerText}>{'Publication'}</Text>
				</View>
			</View>
			<ScrollView contentContainerStyle={{ backgroundColor: colorPalette.beta }}>
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
						author={{ nickname: publication.author, image: profileImagePath }}
						edit={handleEditing}
					/>
					<PublicationText
						id={publication.id}
						colorPalette={colorPalette}
						text={publication.text}
						editing={isEditing}
					/>
					<PublicationImage imagePath={yoshimitsuArtPath} />
					<PublicationFooterOpen
						// id={publication.id}
						colorPalette={colorPalette}
						// comments={publication.comments}
						// likes={publication.likes}
						// likedByUser={publication.likedByUser}
						publication={publication}
					/>
				</Animated.View>
				<PublicationComments comments={comments} colorPalette={colorPalette} />
			</ScrollView>
		</View>
	);
};

///вставить бар для ввода, найти дополнительные иконки
const styles = ScaledSheet.create({
	publicationContainer: {
		paddingHorizontal: '6@s',
		paddingVertical: '6@s',
		// marginTop: '10@s',
		marginHorizontal: '2@s',
		borderRadius: 4,
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
});
