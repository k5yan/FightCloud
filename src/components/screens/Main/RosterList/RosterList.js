import { CharFrame } from './CharFrame';
import { ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { selectRosterListStyles } from '../../../../redux/selectors/styles/MainSelectors/MainSelectors';
import { useEffect } from 'react';
import { serverAdress } from '../../../../constants/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { postCall as getCharacters } from '../../../../utils/serverCalls';

export const RosterList = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		async function LoadData() {
			const data = await getCharacters('/test');
			// const data = await request('/test', 'GET');
			dispatch({ type: 'UPLOAD_ROSTER_LIST', payload: data });
		}
		LoadData();
	}, []);
	const roster = useSelector((state) => state.roster.roster);
	const rosterList = useSelector(selectRosterListStyles);
	const styles = ScaledSheet.create(rosterList);
	return (
		<GestureHandlerRootView>
			{/* <ScrollView contentContainerStyle={styles.rosterContainer}>
				{roster.map((char) => (
					<CharFrame key={char._id} nameTitle={char.name} />
				))}
			</ScrollView> */}
		</GestureHandlerRootView>
	);
};
