import { getItem } from '../../../../../../utils/secureStore';
import { patchCall as redactPublication } from '../../../../../../utils/serverCalls';
import toastConfig from '../../../../../../utils/toastConfig/toastConfig';
export default async (textValue, publicationId, toast, colorPalette) => {
	const token = await getItem('token');
	if (token) {
		const editResult = await redactPublication(`/publications/${publicationId}`, {
			publication: { text: textValue },
			token: token,
		});
		const alert = toastConfig(colorPalette, editResult.error);
		toast.show(alert.text[editResult.error]('publication', 'edit '), alert.settings);
	}
};
