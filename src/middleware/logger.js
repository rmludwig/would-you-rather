// This middleware is used for this test project to display changing state
// over time. These console logs would be removed from a production app.

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('Action = ', action);
    const returnValue = next(action);
    console.log('New State = ', store.getState());
    console.groupEnd();
    return returnValue;
}

export default logger;