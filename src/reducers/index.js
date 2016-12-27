export default function ingredientReducer(state=[], action) {
  switch(action.type){
    case 'ADD_INGREDIENT':
      return [
        ...state, action.payload
      ]
    case 'REMOVE_INGREDIENT':
      var array = [...state];
      array.splice(action.payload, 1)
      return [
        ...array
      ]
    default:
      return state;
  }
}
