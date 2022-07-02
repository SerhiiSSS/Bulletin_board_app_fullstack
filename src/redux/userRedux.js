/* selectors */
export const getUserData = ({ user }) => user;
export const getLoginStatus = ({ user }) => user.loggedIn;
console.log(getLoginStatus);
export const getRole = ({ user }) => user.role;

/* action name creator */
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const LOGIN_START = createActionName('LOGIN_START');
const LOGIN_SUCCESS = createActionName('LOGIN_SUCCESS');
const LOGIN_ERROR = createActionName('LOGIN_ERROR');

/* action creators */
export const loginStarted = payload => ({ payload, type: LOGIN_START });
export const loginSuccess = payload => ({ payload, type: LOGIN_SUCCESS });
export const loginError = payload => ({ payload, type: LOGIN_ERROR });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...statePart,
        loggedIn: true,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
