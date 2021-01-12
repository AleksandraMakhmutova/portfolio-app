import * as TYPES from "../types/languages"


export const changeLang = (trans)=>{
  return {
    type: TYPES.CHANGE_LANG,
    payload: trans
  }
}
