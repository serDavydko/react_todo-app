import { put, takeEvery, call, all, fork } from 'redux-saga/effects';
import * as loaders from './loading';
import * as todos from './todos';


const API_URL = 'https://user-hobby-api.herokuapp.com';

function* watchFetchTodos() {
    yield takeEvery('SET_TODOS_REQUEST', fetchTodosAsync);
  }
  
function* fetchTodosAsync() {
    try {
      yield put(loaders.setTodosRequest());
      const data = yield call(() => {
        return fetch(`${API_URL}/tasks`)
                .then(res => res.json())
        }
      );
      yield put(todos.setTodos(data));
      yield put(loaders.setTodosSuccess());
    } catch (error) {
      yield put(loaders.setTodosError());
    };
  };

function* watchSendTodo() {
    yield takeEvery('ADD_TODOS_REQUEST', sendTodoAsync);
}
  
function* sendTodoAsync(action) {

    try {
      yield put(loaders.setTodosRequest());
      const data = yield call(() => {
        return fetch(`${API_URL}/tasks`,{
          method: 'post',
          body: JSON.stringify(action.body),
          headers: {
            'content-type': 'application/json',
          },
        })
             .then(res => res.json())
        }
      );
      yield put(todos.addTodo(data.title, data.id));
      yield put(loaders.setTodosSuccess());
    } catch (error) {
      yield put(loaders.setTodosError());
    };
  };

  function* watchToggleTodo() {
    yield takeEvery('TOGGLE_TODO_REQUEST', toggleTodoAsync);
}
  
function* toggleTodoAsync(action) {

    try {
      yield put(loaders.setTodosRequest());
      const data = yield call(() => {
        return fetch(`${API_URL}/tasks/${action.body.id}`,{
          method: 'put',
          body: {
            'isDone': !action.body.isDone,
          },
          headers: {
            'content-type': 'application/json',
          },
        })
             .then(res => res.json())
        }
      );
      yield put(todos.toggleTodo(action.body.id));
      yield put(loaders.setTodosSuccess());
    } catch (error) {
      yield put(loaders.setTodosError());
    };
  };

export default function* rootSaga() {
    yield all([
    fork(watchFetchTodos),
    fork(watchSendTodo),
    fork(watchToggleTodo),
    ]);
 };