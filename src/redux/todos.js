const SET_TODOS = 'SET_TODOS';
const SET_TODOS_REQUEST = 'SET_TODOS_REQUEST';
const ADD_TODO = 'ADD_TODO';
const ADD_TODOS_REQUEST = 'ADD_TODOS_REQUEST';
const TOGGLE_TODO = 'TOGGLE_TODO';
const TOGGLE_TODO_REQUEST = 'TOGGLE_TODO_REQUEST';
const TOGGLE_ALL = 'TOGGLE_ALL';
const RENAME_TODO = 'RENAME_TODO';
const DELETE_TODO = 'DELETE_TODO';
const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';

export const setTodosRequest = () => ({type: SET_TODOS_REQUEST});
export const addTodosRequest = body => ({type: ADD_TODOS_REQUEST, body});
export const toggleTodoRequest = body=> ({type: TOGGLE_TODO_REQUEST, body});
export const deleteTodoRequest = id => ({type: DELETE_TODO_REQUEST, id});
export const setTodos = todos => ({ type: SET_TODOS, todos });
export const addTodo = (title, id) => ({ type: ADD_TODO, title, id });
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
export const toggleAll = allCompleted => ({ type: TOGGLE_ALL, allCompleted });
export const renameTodo = (todoId, newTitle) => (
  { type: RENAME_TODO, todoId, newTitle }
);
export const deleteTodo = id => ({ type: DELETE_TODO, id });

const todosReducer = (todos = [], action = {}) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;
      
    case ADD_TODO:
      return [...todos, {
        id: action.id,
        title: action.title,
        isDone: false,
      }];

    case TOGGLE_TODO:
      return todos.map(todo => (
        (action.id !== todo.id)
          ? todo
          : { ...todo, isDone: !todo.isDone }
      ));

    case TOGGLE_ALL:
      return todos.map(todo => ({
        ...todo,
        isDone: !action.allCompleted,
      }));

    case RENAME_TODO:
      return todos.map(todo => (
        (action.todoId !== todo.id)
          ? todo
          : { ...todo, title: action.newTitle }
      ));

    case DELETE_TODO:
      return todos
        .filter(todo => todo.id !== action.id);

    default:
      return todos;
  }
};

export default todosReducer;