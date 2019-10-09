import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import filterReducer, {
  FILTER_VALUE_ALL,
  FILTER_VALUE_COMPLETED,
  FILTER_VALUE_ACTIVE,
} from './filter';
import todosReducer from './todos';
import loadingReducer from './loading';
import rootSaga from './sagas';

const rootReducer = (state = {}, action = {}) => ({
  todos: todosReducer(state.todos, action),
  filter: filterReducer(state.filter, action),
  isLoading: loadingReducer(state.isLoading, action),
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const getIsLoading = state => state.isLoading;
export const getTodos = state => state.todos;
export const getActiveTodos = state => state.todos
  .filter(todo => !todo.completed);
export const getCompletedTodos = state => state.todos
  .filter(todo => todo.completed);
export const getAllCompleted = state => state.todos
  .every(todo => todo.completed === true);

export const getVisibleTodos = (state) => {
  switch (state.filter) {
    case FILTER_VALUE_ALL:
      return getTodos(state);

    case FILTER_VALUE_COMPLETED:
      return getCompletedTodos(state);

    case FILTER_VALUE_ACTIVE:
      return getActiveTodos(state);

    default:
      return state.todos;
  }
};

export default store;