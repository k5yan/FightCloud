import { View } from 'react-native';
import { Publications } from './Publications/Publications';
import { TabSelector } from '../../../baseComponents/TabSelector';
import { LoginForm } from './LoginForm/LoginForm';
import {
	selectMainScreenStyles,
	selectProfileInfo,
	selectColorPalette,
} from '../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { selectUserPublications } from '../../../../redux/selectors/data/publicationSelectors/publicationSelectors';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { Cap } from '../../../baseComponents/PublicationsList/Cap/Cap';

// const styles = ScaledSheet.create({
// 	screen: {
// 		flex: 1,
// 		paddingTop: '4@s',
// 		backgroundColor: colorPalette.alpha,
// 	},
// });
const Data = () => (
	<View style={{ flex: 1, paddingTop: 4, backgroundColor: 'green' }}>
		<Cap textColor={'yellow'} capText={'your data files'} />
	</View>
);

const UserPublications = () => (
	<Publications contentSelector={selectUserPublications} placeholder={'say hi!'} />
);

export const MidScreen = () => {
	const isLogin = useSelector(selectProfileInfo).isLogin;

	const screens = [
		{
			name: 'posts',
			component: UserPublications,
		},
		{
			name: 'data',
			component: Data,
		},
	];

	return isLogin ? <TabSelector screen={'Profile'} screens={screens} /> : <LoginForm />;
};
