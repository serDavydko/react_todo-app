import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => (
  <footer className="footer">
    <span className="todo-count">
      {` items left`}
    </span>

    <ul className="filters">
      <li>
        <a
          href="#/"
          className={'All' && 'selected'}
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          className={'Active' && 'selected'}
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          className={true === 'Completed' && 'selected'}
        >
          Completed
        </a>
      </li>
    </ul>

    {(
      <button
        type="button"
        className="clear-completed"
      >
        Clear completed
      </button>
    )}

  </footer>
);

export default Footer;
