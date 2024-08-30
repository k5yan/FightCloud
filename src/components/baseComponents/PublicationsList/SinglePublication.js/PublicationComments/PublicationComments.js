import { View, ScrollView, Text, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { profileImagePath } from '../../../../../constants/imagePath/profileImagePath';
export const PublicationComments = (props) => {
	return (
		<Animated.View
			layout={LinearTransition}
			style={{
				borderTopWidth: 2,
				borderColor: props.colorPalette.alpha,
			}}
		>
			<Animated.ScrollView
				layout={LinearTransition}
				contentContainerStyle={{ backgroundColor: props.colorPalette.beta }}
			>
				{props.comments.map((comment) => (
					<View
						key={comment.id}
						style={[
							styles.commentContainer,
							{ borderColor: props.colorPalette.delta },
						]}
					>
						<View
							style={[
								{ backgroundColor: props.colorPalette.gamma },
								styles.authorPictureContainer,
							]}
						>
							<Image
								source={profileImagePath}
								style={styles.authorPicture}
							/>
						</View>

						<View style={styles.allTextContainer}>
							<View
								style={[
									{
										backgroundColor: props.colorPalette.delta,
										borderColor: props.colorPalette.delta,
									},
									styles.authorNicknameContainer,
								]}
							>
								<Text
									style={[
										{ color: props.colorPalette.gamma },
										styles.authorNickname,
									]}
								>
									{comment.author}
								</Text>
							</View>
							<View style={styles.commentTextContainer}>
								<Text style={styles.comment}>{comment.text}</Text>
							</View>
						</View>
					</View>
				))}
			</Animated.ScrollView>
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	comment: {
		color: 'white',
		fontFamily: 'sans-serif-medium',
		fontSize: '14@s',
	},
	commentTextContainer: {
		paddingTop: '4@s',
	},
	authorInfoContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	commentContainer: {
		marginVertical: '4@s',
		marginHorizontal: '8@s',
		paddingVertical: '4@s',
		paddingHorizontal: '4@s',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		borderWidth: '2@s',
		borderRadius: 4,
		flexDirection: 'row',
	},
	allTextContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: '6@s',
	},
	authorPictureContainer: {
		width: '48@s',
		height: '48@s',
		borderWidth: '2@s',
		borderRadius: 4,
		borderColor: 'white',
	},
	authorPicture: {
		width: '100%',
		height: '100%',
		borderRadius: 3,
	},
	authorNicknameContainer: {
		backgroundColor: '#2F2F2F',
		borderWidth: '1@s',
		borderRadius: 4,
		paddingLeft: '3@s',
		paddingRight: '1@s',
		paddingVertical: '1@s',
		justifyContent: 'center',
		alignItems: 'center',
	},
	authorNickname: {
		fontFamily: 'PixyFont',
		fontSize: '18@s',
	},
});
