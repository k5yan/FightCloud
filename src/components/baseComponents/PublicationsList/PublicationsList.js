import { SinglePublication } from './SinglePublication.js/SinglePublication';
import Animated, { LinearTransition } from 'react-native-reanimated';
export const PublicationsList = (props) => {
	return (
		<Animated.ScrollView
			layout={LinearTransition}
			contentContainerStyle={{
				backgroundColor: props.colorPalette.alpha,
			}}
		>
			{props.publications.map((publication) => {
				return (
					<SinglePublication
						key={publication.id}
						colorPalette={props.colorPalette}
						publication={publication}
					/>
				);
			})}
		</Animated.ScrollView>
	);
};
