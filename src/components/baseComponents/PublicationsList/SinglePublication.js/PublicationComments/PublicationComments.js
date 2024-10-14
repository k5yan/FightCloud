import Animated, { LinearTransition } from 'react-native-reanimated';
import { SingleComment } from './SingleComment/SingleComment';
import { Cap } from '../../Cap/Cap';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectComments } from '../../../../../redux/selectors/data/publicationSelectors/publicationSelectors';
export const PublicationComments = ({ colorPalette, handleComments }) => {
	const comments = useSelector(selectComments);
	useEffect(() => {
		if (comments) handleComments(comments.length);
	}, [comments, handleComments]);
	return (
		<Animated.View
			layout={LinearTransition}
			style={{
				borderTopWidth: 2,
				borderColor: colorPalette.alpha,
			}}
		>
			<Animated.View
				layout={LinearTransition}
				style={{ backgroundColor: colorPalette.beta }}
			>
				{comments.length !== 0 ? (
					comments.map((comment) => (
						<SingleComment
							key={comment.id}
							comment={comment}
							colorPalette={colorPalette}
						/>
					))
				) : (
					<Cap textColor={colorPalette.alpha} capText={'no comments yet'} />
				)}
			</Animated.View>
		</Animated.View>
	);
};
