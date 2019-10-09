const SET_TODOS = 'SET_TODOS';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const TOGGLE_ALL = 'TOGGLE_ALL';
const RENAME_TODO = 'RENAME_TODO';
const DELETE_TODO = 'DELETE_TODO';
const DELETE_COMPLETED = 'DELETE_COMPLETED';

export const setTodos = todos => ({ type: SET_TODOS, todos });
export const addTodo = title => ({ type: ADD_TODO, title });
export const toggleTodo = todoId => ({ type: TOGGLE_TODO, todoId });
export const toggleAll = allCompleted => ({ type: TOGGLE_ALL, allCompleted });
export const renameTodo = (todoId, newTitle) => (
  { type: RENAME_TODO, todoId, newTitle }
);
export const deleteTodo = todoId => ({ type: DELETE_TODO, todoId });
export const deleteCompleted = () => ({ type: DELETE_COMPLETED });

const todosReducer = (todos = [], action = {}) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;

    case ADD_TODO:
      return [...todos, {
        title: action.title,
        isDone: false,
      }];

    case TOGGLE_TODO:
      return todos.map(todo => (
        (action.todoId !== todo.id)
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
        .filter(todo => todo.id !== action.todoId);

    case DELETE_COMPLETED:
      return todos.filter(todo => !todo.completed);

    default:
      return todos;
  }
};

export default todosReducer;