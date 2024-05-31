import {
	ScrollView,
	View,
	Image,
	Text,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { TextInput } from 'react-native-gesture-handler';

export const Home = ({ navigation }) => {
	return (
		<View style={styles.home}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>FIGHTCLOUD</Text>
			</View>
			<ImageBackground
				source={require('../../../image/CloudBarBackground2.png')}
				resizeMode="cover"
				style={styles.imageBackground}
			>
				<View style={styles.topMenu}>
					<View style={styles.topMenuIconContainer}>
						<TouchableOpacity>
							<Text style={styles.topMenuIcon}>&#xe903;</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.searchBarContainer}>
						<TextInput style={styles.searchBar} placeholder="search..." />
					</View>
					<View style={styles.topMenuIconContainer}>
						<Text style={styles.topMenuIcon}>&#xe902;</Text>
					</View>
				</View>
			</ImageBackground>

			<ScrollView contentContainerStyle={styles.rosterContainer}>
				<View style={styles.charPanelContainer}>
					<Image
						style={styles.charPanelImage}
						source={require('../../../image/charIcon/lidiaPanelArt.jpg')}
					></Image>
					<Text style={styles.charPanelTitle}>Lidia</Text>
				</View>

				<View style={styles.charPanelContainer}>
					<Image
						style={styles.charPanelImage}
						source={require('../../../image/charIcon/lidiaPanelArt.jpg')}
					></Image>
					<Text style={styles.charPanelTitle}>Lidia</Text>
				</View>

				<View style={styles.charPanelContainer}>
					<Image
						style={styles.charPanelImage}
						source={require('../../../image/charIcon/lidiaPanelArt.jpg')}
					></Image>
					<Text style={styles.charPanelTitle}>Lidia</Text>
				</View>

				<View style={styles.charPanelContainer}>
					<Image
						style={styles.charPanelImage}
						source={require('../../../image/charIcon/lidiaPanelArt.jpg')}
					></Image>
					<Text style={styles.charPanelTitle}>Lidia</Text>
				</View>

				<View style={styles.charPanelContainer}>
					<Image
						style={styles.charPanelImage}
						source={require('../../../image/charIcon/lidiaPanelArt.jpg')}
					></Image>
					<Text style={styles.charPanelTitle}>Lidia</Text>
				</View>

				<View style={styles.charPanelContainer}>
					<Image
						style={styles.charPanelImage}
						source={require('../../../image/charIcon/lidiaPanelArt.jpg')}
					></Image>
					<Text style={styles.charPanelTitle}>Lidia</Text>
				</View>

				<View style={styles.charPanelContainer}>
					<Image
						style={styles.charPanelImage}
						source={require('../../../image/charIcon/lidiaPanelArt.jpg')}
					></Image>
					<Text style={styles.charPanelTitle}>Lidia</Text>
				</View>

				<View style={styles.charPanelContainer}>
					<Image
						style={styles.charPanelImage}
						source={require('../../../image/charIcon/lidiaPanelArt.jpg')}
					></Image>
					<Text style={styles.charPanelTitle}>Lidia</Text>
				</View>

				<View style={styles.charPanelContainer}>
					<Image
						style={styles.charPanelImage}
						source={require('../../../image/charIcon/lidiaPanelArt.jpg')}
					></Image>
					<Text style={styles.charPanelTitle}>Lidia</Text>
				</View>
			</ScrollView>

			{/* <View style={styles.navBarContainer}>
				<TouchableOpacity>
					<Text style={styles.navBarIcon}>&#xe900;</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.navBarIcon}>&#xe906;</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
					<Text style={styles.navBarIcon}>&#xe904;</Text>
				</TouchableOpacity>
			</View> */}
		</View>
	);
};

//<TitleComponent />
//<BackgroundImageComponent />
//<TopMenuComponent />
//<RosterComponent />
//<CharComponent />
//

const styles = ScaledSheet.create({
	home: {
		backgroundColor: 'rgb(15, 187, 232)',
		flex: 1,
	},
	title: {
		fontFamily: 'PixyFont',
		fontSize: '25@s',
		color: '#fff',
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '30@vs',
	},
	topMenu: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: '47@vs',
		marginBottom: '20@vs',
	},
	topMenuIconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '10%',
	},
	topMenuIcon: {
		color: '#0000FF',
		fontSize: '25@s',
		fontFamily: 'Icons',
	},
	imageBackground: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: '5@vs',
		marginHorizontal: '14@s',
	},
	searchBar: {
		backgroundColor: 'transparent',
		height: '38@vs',
		border: '2@s',
		paddingBottom: '4@s',
		paddingTop: '2@s',
		paddingHorizontal: '8@s',
		borderRadius: 10,
		fontSize: '20@s',
	},
	searchBarContainer: {
		width: '70%',
		marginHorizontal: '14@s',
	},
	rosterContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	charPanelImage: {
		borderRadius: 10,
		width: '100%',
		height: '100%',
	},
	charPanelTitle: {
		fontFamily: 'PixyFont',
		fontSize: '20@s',
		color: 'white',
		position: 'absolute',
		bottom: '5@s',
	},
	charPanelContainer: {
		backgroundColor: 'white',
		width: '150@s',
		height: '150@vs',
		marginVertical: '8@vs',
		marginHorizontal: '8@s',
		borderWidth: 8,
		borderColor: 'white',
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		justifyContent: 'center',
		alignItems: 'center',
	},
	navBarContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#e7e7ff',
	},
	navBarIcon: {
		color: 'rgb(15, 187, 232)',
		fontSize: '25@s',
		fontFamily: 'Icons',
		marginVertical: '8@vs',
	},
});
