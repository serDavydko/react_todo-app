import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Todo from './components/Todo';
import Footer from './components/Footer';
import Header from './components/Header';

import * as todoApi from './redux/sagas';
import * as todoActions from './redux/todos';
import * as loadingActions from './redux/loading';
import * as selectors from './redux/store';

const App = ( {
  activeTodos,
  setTodosRequest,
} ) => {

  useEffect(() => {
    setTodosRequest();
  }, []);
  
  console.log(activeTodos)
    return (
      <section className="todoapp">
        <Header />

        {activeTodos.length!==0 &&(
          <div className="content-group">

            <section className="main">
              <input
                type="checkbox"
                id="toggle-all"
                className="toggle-all"
              />
              <label
                htmlFor="toggle-all"
                id="label"
              >
                Mark all as complete
              </label>

              <ul className="todo-list">
                {activeTodos.map(todo => (
                  <Todo key={todo.id} todo={todo}/>
                ))}
              </ul>
            </section>

            <Footer
            />
          </div>)
        }
      </section>
    );
  };

  const mapStateToProps = state => ({
    activeTodos: selectors.getActiveTodos(state),
  });
  
  const mapDispatchToProps = dispatch => ({
    setTodosRequest: () => dispatch(todoActions.setTodosRequest()),
    setTodos: todos => dispatch(todoActions.setTodos(todos)),
    toggleAll: isToggleAll => dispatch(todoActions.toggleAll(isToggleAll)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);

