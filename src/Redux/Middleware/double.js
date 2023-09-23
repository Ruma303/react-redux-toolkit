const double = store => next => action => {
    let number = parseInt(action.payload);

    if (number && typeof number === "number") {
        let double = number * 2;
        console.log(double);
        next({ ...action, payload: double });

    } else {
        next(action);
    }
}
export default double;

