import { appReducer } from '../reducers'
import general_components from "@likethemammal/general-components"

const configureStore = general_components.store.configure

import * as selectors from '../selectors/example'
import { registerSelectors, getStateWith } from 'reselect-tools'

//used in redux devtools
const STORE_NAME_App = 'App'
const appStore = configureStore(appReducer, STORE_NAME_App)

//used in reselect devtools
registerSelectors(selectors)
getStateWith(() => appStore.getState())

export default appStore