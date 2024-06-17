import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const PublicationText = (props) => {
	return (
		<View style={styles.publicationTextContainer}>
			<Text style={[{ color: props.colorPalette.gamma }, styles.publicationText]}>
				{props.text}
			</Text>
		</View>
	);
};

const styles = ScaledSheet.create({
	publicationTextContainer: {
		marginVertical: '6@s',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	publicationText: {
		// color: 'white',
		fontFamily: 'sans-serif-medium',
		fontSize: '16@s',
	},
});
