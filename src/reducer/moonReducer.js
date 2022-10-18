export default function moonReducer(state,action){
    // console.log(action)
    switch (action.type) {
        case "ADD_FOOD_ITEMS":
            return {...state,allFood:action.payload}
        case "FILTER_FOOD":
            return {...state,food:action.payload}
        case "FILTER_WATER":
            return {...state,water:action.payload}
        // case "SERVIAL_FOOD_AND_WATER":
        //     return {...state,servivalFoodAndWater:action.payload}
        default:
            break;
    }
}