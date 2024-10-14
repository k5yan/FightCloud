import { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';
import { PublicationOpenHeader } from './PublicationOpenHeader';
import { PublicationHeader } from './PublicationHeader';
import { PublicationText } from './PublicationText';
import { PublicationContent } from './PublicationContent';
import { PublicationOpenFooter } from './PublicationOpenFooter';
import { PublicationComments } from './PublicationComments';
import { Bar } from '../../Bar/Bar';
import { postCall as getData } from '../../../../utils/serverCalls';
import { getItem } from '../../../../utils/secureStore';
import { PublicationOpenLoader } from './PublicationOpenLoader';
import { PublicationOpen } from './PublicationOpen/PublicationOpen';
import safeArea from '../../../../utils/safeArea/safeArea';
import { useDispatch } from 'react-redux';
import { DOWNLOAD_COMMENTS } from '../../../../redux/actions/publicationActions';
export const SinglePublicationOpen = (props) => {
	const [publication, setPublication] = useState(null);
	const [publicationloaded, setPublicationLoaded] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		async function donwloadCurrentPublication() {
			try {
				const token = await getItem('token');
				if (token) {
					const publicationId = props.route.params.publicationData.id;
					const authorId = props.route.params.publicationData.authorId;
					const publication = await getData(`/publications/${publicationId}`, {
						authorId: authorId,
						token: token,
					});
					setPublication(publication);
					// setIsLike(publication.likedByUser);
					// setLikes(publication.likes);
					// setComments(publication.comments.length);
					dispatch(DOWNLOAD_COMMENTS(publication.comments));
				}
			} catch (error) {
				console.log('download publication error', error);
			} finally {
				setTimeout(() => setPublicationLoaded(true), 100);
				//setPublicationLoaded(true);
			}
		}
		donwloadCurrentPublication();
	}, []);

	const colorPalette = props.route.params.colorPalette;
	const type = props.route.params.type;
	const handleLikeParent = props.route.params.handleLikeParent;
	const handleCommentsParent = props.route.params.handleCommentsParent;

	return (
		<SafeAreaView
			style={[
				safeArea(colorPalette.beta).style,
				{ backgroundColor: colorPalette.beta, flex: 1 },
			]}
		>
			<PublicationOpenHeader colorPalette={colorPalette} />
			{!publicationloaded && <PublicationOpenLoader colorPalette={colorPalette} />}
			{publication && (
				<PublicationOpen
					publication={publication}
					colorPalette={colorPalette}
					type={type}
					handleLikeParent={handleLikeParent}
					handleCommentsParent={handleCommentsParent}
					isLoaded={publicationloaded}
				/>
			)}
			{publicationloaded && (
				<Animated.View
					style={[styles.barContainer, { borderColor: colorPalette.alpha }]}
					layout={LinearTransition}
				>
					<Bar
						placeholder={'type...'}
						colorPalette={colorPalette}
						type={'comment'}
						publicationId={publication.id}
					/>
				</Animated.View>
			)}
		</SafeAreaView>
	);
};

const styles = ScaledSheet.create({
	barContainer: {
		borderTopWidth: '2@s',
		borderRightWidth: '2@s',
		borderLeftWidth: '2@s',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingBottom: '4@s',
	},
});
