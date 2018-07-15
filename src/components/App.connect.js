import { connect } from "react-redux"
import { changeAction } from '../actions/example'

import * as selectors from '../selectors/example'

import { select } from '../units/utils'

export default (Component) => connect(select(selectors), {
    changeAction,
})(Component)
