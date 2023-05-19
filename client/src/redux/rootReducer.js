

import { combineReducers } from "redux";
import {userReducer} from "./reduxAuth/reducerAuth";
import reducer from "./reduxapp/reducerApp";
import taskReducer from "./reducer"

export default combineReducers({taskReducer,reducer,userReducer  })