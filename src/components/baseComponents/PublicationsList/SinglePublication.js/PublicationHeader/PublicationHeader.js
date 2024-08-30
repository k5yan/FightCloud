import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { AuthorInfo } from './AuthorInfo';
import { PublicationDropDown } from './PublicationDropDown/PublicationDropDown';
import Animated, { Easing, LinearTransition } from 'react-native-reanimated';

export const PublicationHeader = (props) => {
	return (
		<Animated.View
			layout={LinearTransition}
			style={styles.publicationHeaderContainer}
		>
			<AuthorInfo author={props.author} colorPalette={props.colorPalette} />
			<PublicationDropDown
				edit={props.edit}
				colorPalette={props.colorPalette}
				id={props.id}
				author={props.author.nickname}
			/>
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	publicationHeaderContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
});
