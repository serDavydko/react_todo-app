import React, {useState} from 'react';
import { connect } from 'react-redux';

import * as todoApi from './redux/sagas';
import * as todoActions from './redux/todos';
import * as loadingActions from './redux/loading';

const Header = ({ addTodo, enableLoading, disableLoading }) => {
const [title, setTitle] = useState("");

const handleTitleChange = event => {
  setTitle(event.target.value);
  };

const handleSubmit = e => {
    e.preventDefault();
    if (title) {
      addTodo();
    }
  };


    return (
      <header className="header">
        <h1>TaskBar</h1>
        <form onSubmit={handleSubmit}>

          <input
            className="new-todo"
            onChange={handleTitleChange}
            value={title}
            placeholder="What needs to be done?"
          />

          <button type="submit" className="input-button" />
        </form>
      </header>
    );
  };

  const mapDispatchToProps = dispatch => ({
    addTodo: value => dispatch(todoActions.addTodo(value)),
    enableLoading: () => dispatch(loadingActions.enableLoading()),
    disableLoading: () => dispatch(loadingActions.disableLoading()),
  });
  
  export default connect(null, mapDispatchToProps)(AddTodoForm);

export default Header;
