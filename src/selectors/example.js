import {
	createSelectorWithDependencies as createSelector
} from 'reselect-tools'

import {
	on as _on,
} from '../units/example'

export const example = (state, props) => state.example

export const on = createSelector(
	example,
	_on
)