//const log = (store, next, action) => {}

const log = store => next => action => {
    console.log(action);
    if (action.payload === 'Ciao') {
        console.error('Tu non puoi passare');
    } else {
        next(action);
    }
}
export default log;