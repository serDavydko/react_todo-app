import React, {useState} from 'react';
import { connect } from 'react-redux';

import * as todoActions from '../redux/todos';

const Header = ({ addTodosRequest }) => {
const [title, setTitle] = useState("");

const handleTitleChange = event => {
  setTitle(event.target.value);
  };

const handleSubmit = e => {
    e.preventDefault();
    if (title) {
      addTodosRequest({title:title, isDone: false});
      setTitle("");
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
    addTodosRequest: (body) => dispatch(todoActions.addTodosRequest(body)),
  });
  
  export default connect(null, mapDispatchToProps)(Header);
