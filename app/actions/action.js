import * as types from './actionTypes';


export function add(text){
  return{
    type:types.ADD,
    data:text
  };
}
export function remove(text){
  return{
    type:types.REMOVE,
    data:text
  };
}
