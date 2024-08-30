import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabLabel } from './TabLabel';
import { useSelector } from 'react-redux';

const Tab = createMaterialTopTabNavigator();

export const TabSelector = (props) => {
	const colorPalette = useSelector(
		(state) => state.styles[`${props.screen}Styles`].colorPalette,
	);

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: colorPalette.beta },
				tabBarPressColor: 'transparent',
				tabBarIndicatorStyle: {
					backgroundColor: colorPalette.gamma,
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
									colorPalette={colorPalette}
									focused={focused}
									label={List.name}
								/>
							),
						}}
					/>
				);
			})}
		</Tab.Navigator>
	);
};
