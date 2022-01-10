
export const AddPressedCharAction = (lastPressedChar) => async (dispatch) => {
    try {
        dispatch({
            type: 'Calculator/AddChar',
            payload: lastPressedChar
        })
    }catch(error)
    {
        console.log('Calculator/AddChar: actions/CalculatorAction/AddPressedChar: Add pressed char failed!');
    }
}