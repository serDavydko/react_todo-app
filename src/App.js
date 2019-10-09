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
  setTodos,
  enableLoading,
  disableLoading,
  isLoading,
} ) => {

  useEffect(() => {
    enableLoading();

    todoApi.getTodos()
      .then(setTodos)
      .finally(disableLoading);
  }, []);
  
    return (
      <section className="todoapp">
        <Header />

        {(
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
    isLoading: selectors.getIsLoading(state),
  });
  
  const mapDispatchToProps = dispatch => ({
    setTodos: todos => dispatch(todoActions.setTodos(todos)),
    enableLoading: () => dispatch(loadingActions.enableLoading()),
    disableLoading: () => dispatch(loadingActions.disableLoading()),
    toggleAll: isToggleAll => dispatch(todoActions.toggleAll(isToggleAll)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
