import { Label, DataChanger } from './parts';
import { View } from 'react-native';
export const DefaultBlock = ({ dataChangerProps, label }) => {
	return (
		<>
			<Label text={label} />
			<DataChanger {...dataChangerProps} />
		</>
	);
};
