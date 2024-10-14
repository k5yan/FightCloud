export const selectDiscoverPublications = (state) =>
	state.publications.discoverPublications;
export const selectUserPublications = (state) => state.publications.userPublications;
export const selectComments = (state) => state.publications.comments;
export const selectUserPublicationDraft = (state) =>
	state.publications.userPublicationDraft;
export const selectDiscoverPublicationDraft = (state) =>
	state.publications.discoverPublicationDraft;
