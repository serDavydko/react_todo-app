import { put, takeLatest, all } from 'redux-saga/effects';

const API_URL = 'https://user-hobby-api.herokuapp.com';

function* watchFetchTodos() {
    yield takeEvery('ADD_TODO_REQUEST', fetchTodosAsync);
  }
  
function* fetchTodosAsync() {
    try {
      yield put(requestTodos());
      const data = yield call(() => {
        return fetch(`${API_URL}/tasks`)
                .then(res => res.json())
        }
      );
      yield put(requestTodosSuccess(data));
    } catch (error) {
      yield put(requestTodosError());
    };
  };

export default function* rootSaga() {
    yield all([
    watchFetchTodos(),
    ]);
 };

/* 
const patchToServer = async(todoId, body) => fetch(
  `${API_URL}/tasks/${todoId}`,
  {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  }
);

export const getTodos = async() => {
  const response = await fetch(`${API_URL}/tasks`);

  return response.json();
};

export const updateTodoTitle = (todoId, newTitleOfTodo) => {
  patchToServer(todoId, { title: newTitleOfTodo });
};

export const toggleAll = async(allCompleted, todoIds) => {
  try {
    const fetchedTodo = async(todoId) => {
      await patchToServer(todoId, { completed: !allCompleted });
    };

    await Promise.all(
      todoIds.map(todoId => fetchedTodo(todoId))
    );

    return 'success fetching toggleAll';
  } catch {
    return 'error while fetching toggleAll';
  }
};

export const toggleTodo = async(todo) => {
  try {
    await patchToServer(todo.id, { completed: !todo.completed });

    return 'success fetching todoToggle';
  } catch {
    return 'error while fetching todoToggle';
  }
};

export const removeTodo = async(id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE',
  });

  return response.json();
};

export const removeCompleted = async(completed) => {
  try {
    await Promise.all(
      completed.map(todo => removeTodo(todo.id))
    );

    return 'success remove completed todos';
  } catch {
    return 'error while remove completed todos';
  }
};

export const addTodoOnServer = async(title) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    body: JSON.stringify({ title }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  return response.json();
}; */