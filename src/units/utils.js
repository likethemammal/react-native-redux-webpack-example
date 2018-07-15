import _ from 'underscore'

export const select = (selectors) => (state) => {
	let selected_data = {};

	_.map(
		selectors,
		(selector, key) => (selected_data[key] = selector(state))
	)

	return selected_data;
};