import { View } from 'react-native';
import { Publications } from './Publications/Publications';
import { TabSelector } from '../../../baseComponents/TabSelector';
import { LoginForm } from './LoginForm/LoginForm';
import {
	selectMainScreenStyles,
	selectProfileInfo,
	selectProfilePublications,
} from '../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

export const MidScreen = () => {
	const mainScreen = useSelector(selectMainScreenStyles);
	const isLogin = useSelector(selectProfileInfo).isLogin;
	const styles = ScaledSheet.create(mainScreen);
	const Data = () => <View style={styles.data}></View>; //временно
	const UserPublications = () => (
		<Publications
			contentSelector={selectProfilePublications}
			placeholder={'say hi!'}
		/>
	);

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

	// return isLogin ? <TabSelector screen={'Profile'} screens={screens} /> : <LoginForm />;
	return <TabSelector screen={'Profile'} screens={screens} />;
};
