import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScaledSheet } from 'react-native-size-matters';
import { TabLabel } from './TabLabel';

const Tab = createMaterialTopTabNavigator();

export const TabSelector = (props) => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: props.backgroundColor },
				tabBarPressColor: 'transparent',
				tabBarIndicatorStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			{props.screens.map((List) => {
				return (
					<Tab.Screen
						key={List.name}
						name={List.name}
						component={List.component}
						options={{
							tabBarLabel: ({ focused }) => (
								<TabLabel
									focused={focused}
									label={List.name}
									color={props.labelColor}
								/>
							),
						}}
					/>
				);
			})}
		</Tab.Navigator>
	);
};

const styles = ScaledSheet.create({
	data: {
		backgroundColor: '#006060',
		flex: 1,
	},
	tabbarLabel: {
		fontFamily: 'PixyFont',
		fontSize: '20@s',
		color: 'white',
	},
});
