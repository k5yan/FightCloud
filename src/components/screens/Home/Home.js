import {
	ScrollView,
	View,
	Image,
	Text,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { TextInput } from 'react-native-gesture-handler';
import { RosterList } from './RosterList';
import { CloudPanel } from './CloudPanel';

export const Home = () => {
	return (
		<View style={styles.home}>
			<CloudPanel />
			<RosterList />
		</View>
	);
};

const styles = ScaledSheet.create({
	home: {
		backgroundColor: 'rgb(15, 187, 232)',
		flex: 1,
	},
});
