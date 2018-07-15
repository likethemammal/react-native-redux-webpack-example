import { combineReducers } from "redux";
import * as example from "../reducers/example";

const createReducer = function(initialState, actions) {

    return function(state = initialState, action) {
        const reaction = actions[action.type]

        if (reaction) {
            return reaction(state, action)
        }

        return state
    }
}

export const appReducer = combineReducers({
    example: createReducer(example.initialState, example.actions)
})