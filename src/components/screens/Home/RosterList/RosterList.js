import { CharFrame } from './CharFrame';
import { ScrollView } from 'react-native';
import { roster } from '../../../../databases/demo-roster';
import { ScaledSheet } from 'react-native-size-matters';

export const RosterList = () => {
	return (
		<ScrollView contentContainerStyle={styles.rosterContainer}>
			{roster.map((char) => (
				<CharFrame key={char.id} nameTitle={char.name} />
			))}
		</ScrollView>
	);
};

const styles = ScaledSheet.create({
	rosterContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		overflow: 'visible',
		marginTop: '8@s',
	},
});
