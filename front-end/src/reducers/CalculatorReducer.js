const initialState = {
    lastCalculateArray: []
};

const CalculatorReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'Calculator/AddChar': {
            const lastPressedChar = payload;
            const tempArray = state?.lastCalculateArray;
            if(tempArray.length < 5)
            {
                tempArray[tempArray.length] = lastPressedChar
            }
            else
            {
                tempArray.shift();
                tempArray[4] = lastPressedChar;
            }

            return {...state, lastCalculateArray: tempArray}
        }
        case 'Calculator/Clear': {
            return {...state, lastCalculateArray: []}
        }
        default:
            return {...state};
    }
}

export default CalculatorReducer;