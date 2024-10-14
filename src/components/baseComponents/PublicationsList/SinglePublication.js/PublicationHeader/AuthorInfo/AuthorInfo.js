import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { AuthorNickname } from './AuthorNickname';
import { UserImage } from '../../../../UserImage';

export const AuthorInfo = (props) => {
	const authorData = {
		userId: props.author.id,
		image: props.author.avatar,
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
		<View style={styles.authorInfoContainer}>
			<UserImage userData={authorData} type={'publication'} style={imageStyle} />
			<AuthorNickname
				colorPalette={props.colorPalette}
				nickname={props.author.login}
			/>
		</View>
	);
};

const styles = ScaledSheet.create({
	authorInfoContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
});
