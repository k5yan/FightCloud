import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { PublicationsList } from '../../../../baseComponents/PublicationsList/PublicationsList';
import { selectColorPalette } from '../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { Bar } from '../../../../baseComponents/Bar/Bar';
import { ScaledSheet } from 'react-native-size-matters';

export const Publications = ({ contentSelector, placeholder }) => {
	const colorPalette = useSelector(selectColorPalette);
	//рассмотреть возможность прокидывать token в save и delete utils (достается трижды)
	//CLEAR_TEXT_DRAFT не работает, как ожидалось. попробовать useRef?
	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: colorPalette.alpha,
				},
			]}
		>
			<View style={styles.barContainer}>
				<Bar
					placeholder={placeholder}
					colorPalette={colorPalette}
					type={'userPublication'}
				/>
			</View>  
			<View style={{ flex: 1 }}>
				<PublicationsList
					colorPalette={colorPalette}
					selector={contentSelector}
					type={'userPublication'}
					capText={'tell us something!'}
				/>
			</View>
		</View>
	);
};

const styles = ScaledSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	barContainer: {
		marginVertical: '4@s',
		marginHorizontal: '4@s',
	},
});
