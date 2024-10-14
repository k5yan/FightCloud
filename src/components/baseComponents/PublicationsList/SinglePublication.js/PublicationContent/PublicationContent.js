import Animated, { LinearTransition } from 'react-native-reanimated';
import { ScaledSheet } from 'react-native-size-matters';
import { PublicationImage } from './PublicationImage/PublicationImage';
import { View } from 'react-native';
import { stylesPack, sliceToColumns } from './utils';
export const PublicationContent = (props) => {
	const { firstColumn, secondColumn } = sliceToColumns(props.images);
	return (
		<Animated.View
			style={{
				flex: 1,
			}}
			layout={LinearTransition}
		>
			{props.images.length === 1 ? (
				<Animated.View
					style={{
						flex: 1,
					}}
					layout={LinearTransition}
				>
					{props.images.map((image, index) => {
						return (
							<PublicationImage
								key={index}
								image={image}
								id={props.publicationId}
								style={stylesPack().single}
							/>
						);
					})}
				</Animated.View>
			) : (
				<Animated.View style={{ flexDirection: 'row' }}>
					<Animated.View
						style={styles.firstColumnContainer}
						layout={LinearTransition}
					>
						{firstColumn.map((image, index) => {
							return (
								<PublicationImage
									key={index}
									image={image}
									id={props.publicationId}
									style={
										stylesPack('Left')[
											sliceToColumns(props.images).firstColumn
												.length
										][index]
									}
								/>
							);
						})}
					</Animated.View>
					<Animated.View
						style={{
							flex: 1,
							overflow: 'hidden',
						}}
						layout={LinearTransition}
					>
						{secondColumn.map((image, index) => {
							return (
								<PublicationImage
									key={index}
									image={image}
									id={props.publicationId}
									style={
										stylesPack('Right')[
											sliceToColumns(props.images).secondColumn
												.length
										][index]
									}
								/>
							);
						})}
					</Animated.View>
				</Animated.View>
			)}
		</Animated.View>
	);
};

const styles = ScaledSheet.create({
	firstColumnContainer: {
		flex: 1,
		marginRight: '4@s',
		overflow: 'hidden',
	},
});
