import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { AuthorInfo } from './AuthorInfo';
import { ActionButton } from '../../../ActionButton';
import { ACTION_BUTTON_MEATBALLS } from '../../../../../constants/icons';

export const PublicationHeader = (props) => {
	return (
		<View style={styles.publicationHeaderContainer}>
			<AuthorInfo author={props.author} colorPalette={props.colorPalette} />
			<View style={styles.publicationButtonContainer}>
				<ActionButton
					icon={ACTION_BUTTON_MEATBALLS}
					color={props.colorPalette.gamma}
				/>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	publicationHeaderContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	publicationButtonContainer: {
		marginRight: '6@s',
	},
});
