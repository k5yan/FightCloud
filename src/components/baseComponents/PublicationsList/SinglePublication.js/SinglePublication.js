import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { PublicationHeader } from './PublicationHeader';
import { PublicationText } from './PublicationText';
import { PublicationImage } from './PublicationImage/PublicationImage';

export const SinglePublication = (props) => {
	return (
		<View
			style={[
				{ backgroundColor: props.colorPalette.beta },
				styles.publicationContainer,
			]}
		>
			<PublicationHeader colorPalette={props.colorPalette} author={props.author} />
			<PublicationText colorPalette={props.colorPalette} text={props.text} />
			<PublicationImage imagePath={props.imagePath} />
		</View>
	);
};

const styles = ScaledSheet.create({
	publicationContainer: {
		// backgroundColor: '#006060',
		paddingHorizontal: '6@s',
		paddingVertical: '6@s',
		marginHorizontal: '4@s',
		marginVertical: '4@s',
		borderRadius: 4,
	},
});
