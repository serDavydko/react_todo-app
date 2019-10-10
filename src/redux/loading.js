const SET_TODOS_LOADER = 'SET_TODOS_LOADER';
const SET_TODOS_ERROR = 'SET_TODOS_ERROR';
const SET_TODOS_SUCCESS = 'SET_TODOS_SUCCESS';

const initialState = {
  isLoading: false,
  isError: false,
}
export const setTodosRequest = () => ({type: SET_TODOS_LOADER});
export const setTodosError = () => ({type: SET_TODOS_ERROR});
export const setTodosSuccess = () => ({type: SET_TODOS_SUCCESS});

const loadingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TODOS_LOADER:
      return {...state, isLoading: true};

    case SET_TODOS_ERROR:
      return {...state, isError: true};

    case SET_TODOS_SUCCESS:
      return {...state, isLoading: false, isError: false};
    
    default:
      return state;
  }
};

export default loadingReducer;