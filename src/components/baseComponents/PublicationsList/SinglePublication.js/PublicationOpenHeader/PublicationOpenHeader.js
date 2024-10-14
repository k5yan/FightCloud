import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ActionButton } from '../../../ActionButton';
import { ACTION_BUTTON_BACK } from '../../../../../constants/icons';
import { useNavigation } from '@react-navigation/native';

export const PublicationOpenHeader = ({ colorPalette }) => {
	const navigation = useNavigation();

	return (
		<View style={[styles.headerContainer, { borderColor: colorPalette.alpha }]}>
			<View style={styles.headerButtonContainer}>
				<ActionButton
					icon={ACTION_BUTTON_BACK}
					color={colorPalette.gamma}
					font={'Icons'}
					onPress={async () => {
						try {
							navigation.goBack();
						} catch (error) {
							console.log('ACTION_BUTTON_BACK: ', error);
						}
					}}
					animation={'grow'}
				/>
			</View>
			<View style={styles.headerTextContainer}>
				<Text style={styles.headerText}>{'Publication'}</Text>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	headerContainer: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: '10@s',
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
