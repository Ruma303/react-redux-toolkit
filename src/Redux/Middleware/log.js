// const log = (store, next, action) => {}

const log = store => next => action => {
    console.log(action, next, store);
    next(action);
}
export default log;
