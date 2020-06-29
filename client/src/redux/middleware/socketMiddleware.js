export default function socketMiddleware (socket) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    /*
     * Socket middleware usage.
     * promise: (socket) => socket.emit('MESSAGE', 'hello world!')
     * type: always 'socket'
     * types: [REQUEST, SUCCESS, FAILURE]
     */
    const { promise, type, types, ...rest } = action;

    if (type !== 'socket' || !promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });

    return promise(socket)
      .then((result) => {
        return next({
          type: SUCCESS,
          ...rest,
          payload: result
        });
      })
      .catch((error) => {
        return next({
          type: FAILURE,
          ...rest,
          error
        });
      });
  };
}
