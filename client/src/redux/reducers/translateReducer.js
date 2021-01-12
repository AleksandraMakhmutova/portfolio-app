import * as TYPES from "../types/languages"


const translateReducer = (state = [true], action) => {
  switch (action.type) {
			case TYPES.CHANGE_LANG:
			return action.payload
			default: 
			return state
	}
	
}

export default translateReducer
