import ContentLoader, { Rect } from 'react-content-loader/native';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export const PublicationOpenLoader = ({ colorPalette }) => {
	const background = {
		'#088EA4': '#08667c',
		'#008080': '#005858',
	};

	return (
		<View style={[styles.loaderContainer, { backgroundColor: colorPalette.beta }]}>
			<ContentLoader
				speed={2}
				backgroundColor={background[colorPalette.alpha]}
				foregroundColor={colorPalette.alpha}
			>
				<Rect
					x="0"
					y="0"
					rx="4"
					ry="4"
					width={styles.loader.avatar}
					height={styles.loader.avatar}
				/>
				<Rect
					x={styles.loader.avatar + styles.loader.indent}
					y="0"
					rx="4"
					ry="4"
					width={styles.loader.nickname.width}
					height={styles.loader.nickname.height}
				/>
				<Rect
					x={styles.loader.text.leftIndent}
					y={styles.loader.avatar + styles.loader.text.topIndent}
					rx="4"
					ry="4"
					width={styles.loader.text.widthFirst}
					height={styles.loader.text.height}
				/>
				<Rect
					x={styles.loader.text.leftIndent}
					y={styles.loader.text.indentForSecond}
					rx="4"
					ry="4"
					width={styles.loader.text.widthSecond}
					height={styles.loader.text.height}
				/>
				<Rect
					x="0"
					y={styles.loader.imageBlock.topIndent}
					rx="4"
					ry="4"
					width="100%"
					height={styles.loader.imageBlock.height}
				/>
				<Rect
					x="0"
					y={styles.loader.footer.topIndent}
					rx="4"
					ry="4"
					width={styles.loader.footer.width}
					height={styles.loader.footer.height}
				/>
				<Rect
					x={styles.loader.footer.leftIndentForSecond}
					y={styles.loader.footer.topIndent}
					rx="4"
					ry="4"
					width={styles.loader.footer.width}
					height={styles.loader.footer.height}
				/>
				{/* commentaries ↓ */}
				<Rect
					x="0"
					y={styles.loader.commentsLine.topIndent}
					rx="0"
					ry="0"
					width="100%"
					height={styles.loader.commentsLine.height}
				/>
				<Rect
					x={styles.loader.comment.leftIndent}
					y={styles.loader.comment.topIndent}
					rx="4"
					ry="4"
					width={styles.loader.avatar}
					height={styles.loader.avatar}
				/>
				<Rect
					x={
						styles.loader.avatar +
						styles.loader.indent +
						styles.loader.comment.leftIndent
					}
					y={styles.loader.comment.topIndent}
					rx="4"
					ry="4"
					width={styles.loader.nickname.width}
					height={styles.loader.nickname.height}
				/>
				<Rect
					x={
						styles.loader.avatar +
						styles.loader.indent +
						styles.loader.comment.leftIndent
					}
					y={
						styles.loader.commentText.topIndent +
						styles.loader.commentText.extraIndent
					}
					rx="4"
					ry="4"
					width={styles.loader.text.widthSecond}
					height={styles.loader.text.height}
				/>
				<Rect
					x={
						styles.loader.avatar +
						styles.loader.indent +
						styles.loader.comment.leftIndent
					}
					y={styles.loader.commentText.topIndent}
					rx="4"
					ry="4"
					width={styles.loader.text.widthThird}
					height={styles.loader.text.height}
				/>
				<Rect
					x={styles.loader.commentFooter.leftIndent}
					y={styles.loader.commentFooter.topIndent}
					rx="4"
					ry="4"
					width={styles.loader.footer.width}
					height={styles.loader.footer.height}
				/>
			</ContentLoader>
		</View>
	);
};

const styles = ScaledSheet.create({
	loaderContainer: {
		top: '74@s',
		position: 'absolute',
		paddingVertical: '8@s',
		paddingHorizontal: '8@s',
		height: '590@s',
		width: '100%',
		zIndex: 2,
	},
	loader: {
		indent: '6@s',
		avatar: '48@s',
		nickname: {
			height: '16@s',
			width: '56@s',
		},
		text: {
			topIndent: '18@s',
			indentForSecond: '88@s',
			leftIndent: '8@s',
			height: '12@s',
			widthFirst: '112@s',
			widthSecond: '86@s',
			widthThird: '140@s',
			widthFour: '42@s',
		},
		imageBlock: {
			topIndent: '124@s',
			height: '334@s',
		},
		footer: {
			topIndent: '464@s',
			leftIndentForSecond: '46@s',
			width: '40@s',
			height: '26@s',
		},
		commentsLine: {
			topIndent: '496@s',
			height: '2@s',
		},
		comment: {
			leftIndent: '6@s',
			topIndent: '502@s',
		},
		commentText: {
			topIndent: '536@s',
			extraIndent: '22@s',
		},
		commentFooter: {
			topIndent: '544@s',
			leftIndent: '292@s',
		},
	},
});
