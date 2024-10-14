import { View, FlatList } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SinglePublication } from './SinglePublication.js/SinglePublication';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { Cap } from './Cap/Cap';
import { selectUserPublications } from '../../../redux/selectors/data/publicationSelectors/publicationSelectors';
export const PublicationsList = (props) => {
	//const publications = props.publications2;
	const publications = useSelector(props.selector);
	console.log(`list publications is: `, publications.length);
	return (
		<Animated.View layout={LinearTransition} style={{ flex: 1 }}>
			{publications.length > 0 ? (
				<FlashList
					// key={'profilePublications'}
					data={publications}
					keyExtractor={(publication) => publication.id}
					renderItem={({ item: publication }) => (
						<SinglePublication
							key={publication.id}
							colorPalette={props.colorPalette}
							publication={publication}
							type={props.type}
						/>
					)}
					contentContainerStyle={{
						backgroundColor: props.colorPalette.alpha,
					}}
					keyboardShouldPersistTaps={'handled'}
					estimatedItemSize={10}
				/>
			) : (
				<Cap textColor={props.colorPalette.beta} capText={props.capText} />
			)}
		</Animated.View>
	);
};
