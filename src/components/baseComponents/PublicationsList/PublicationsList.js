import { ScrollView } from 'react-native';
import { SinglePublication } from './SinglePublication.js/SinglePublication';
import { yoshimitsuArtPath } from '../../../constants/imagePath/publicationsPath/publicationsPath';
import { profileImagePath } from '../../../constants/imagePath/profileImagePath';
export const PublicationsList = (props) => {
	const text = 'New Yoshimitsu 1.05 patch tags and commments! Check my files and enjoy';
	const text2 = 'Great art by Zughy';
	const text3 = 'full movelist commentaries by Knee coming soon!';

	const publicationsList = [
		{
			id: '1',
			text: text,
			author: { nickname: '@k5yan', image: profileImagePath },
		},
		{
			id: '2',
			text: text2,
			author: { nickname: '@k5yan', image: profileImagePath },
			imagePath: yoshimitsuArtPath,
		},
		{
			id: '3',
			text: text3,
			author: { nickname: '@k5yan', image: profileImagePath },
		},
	];

	return (
		<ScrollView contentContainerStyle={{ backgroundColor: props.colorPalette.alpha }}>
			{publicationsList.map((publication) => {
				return (
					<SinglePublication
						key={publication.id}
						text={publication.text}
						author={publication.author}
						imagePath={publication.imagePath}
						colorPalette={props.colorPalette}
					/>
				);
			})}
		</ScrollView>
	);
};
