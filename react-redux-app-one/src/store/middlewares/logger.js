function logger(store) {
  return function (next) {
    return function (action) {
      console.log("STATE : ", store.getState());
      console.log("ACTION : ", action);
      return next(action);
    };
  };
}

export default logger;
