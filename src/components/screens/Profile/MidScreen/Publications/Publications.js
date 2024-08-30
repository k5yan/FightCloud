import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { PublicationsList } from '../../../../baseComponents/PublicationsList/PublicationsList';
import { selectColorPalette } from '../../../../../redux/selectors/styles/ProfileSelectors/ProfileSelectors';
import { Bar } from './Bar.js';

export const Publications = ({ contentSelector, placeholder }) => {
	const content = useSelector(contentSelector);
	const colorPalette = useSelector(selectColorPalette);

	//сделать отправку картинок и их хранение на сервере
	//сделать публикации с картинками
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colorPalette.alpha,
				justifyContent: 'flex-start',
			}}
		>
			<Bar placeholder={placeholder} colorPalette={colorPalette} />
			{content && (
				<PublicationsList colorPalette={colorPalette} publications={content} />
			)}
		</View>
	);
};
