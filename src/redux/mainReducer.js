import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4000Reducer from '../features/EmailAuth4000/redux/reducers';
import EmailAuth3983Reducer from '../features/EmailAuth3983/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4000: EmailAuth4000Reducer,
EmailAuth3983: EmailAuth3983Reducer,
EmailAuth: EmailAuthReducer,

});