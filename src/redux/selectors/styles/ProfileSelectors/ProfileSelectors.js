export const selectMainScreenStyles = (state) =>
	state.styles.ProfileStyles.shapes.mainScreen;
export const selectHeaderStyles = (state) =>
	state.styles.ProfileStyles.shapes.profileHeader;
export const selectImageStyles = (state) =>
	state.styles.ProfileStyles.shapes.profileImage;
export const selectSearchBarStyles = (state) =>
	state.styles.ProfileStyles.shapes.searchBar;
export const selectInfoStyles = (state) => state.styles.ProfileStyles.shapes.profileInfo;
export const selectColorPalette = (state) => state.styles.ProfileStyles.colorPalette;

export const selectProfileInfo = (state) => state.profileInfo;
export const selectProfilePublications = (state) => state.profileInfo.userPublications;
export const selectPublicationDraft = (state) => state.profileInfo.userPublicationDraft;
