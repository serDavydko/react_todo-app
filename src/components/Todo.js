import React from 'react';
import { connect } from 'react-redux';

import * as todoApi from './redux/sagas';
import * as todoActions from '../redux/todos';
import * as loadingActions from './redux/loading';
import * as selectors from './redux/store';

const Todo = ({deleteTodoRequest, toggleTodoRequest, todo }) => {

  return (
    <li className="todo">
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id={todo.id}
          onClick={() => toggleTodoRequest(todo)}
          checked={todo.isDone}
        />
        <label
          htmlFor={todo.id}
          className={todo.isDone && 'completed-item'}
        >
          {todo.title}

          <input
            type="checkbox"
            className="toggle"
            id={todo.id}
            onClick={() => toggleTodoRequest(todo)}
            checked={todo.isDone}
          />
        </label>

        <button
          type="button"
          className="destroy"
          onClick={() => deleteTodoRequest(todo.id)}
        />
      </div>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleTodoRequest: body => dispatch(todoActions.toggleTodoRequest(body)),
  deleteTodoRequest: id => dispatch(todoActions.deleteTodoRequest(id)),
});

export default connect(false, mapDispatchToProps)(Todo);