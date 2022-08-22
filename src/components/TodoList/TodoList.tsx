import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  selectedTodo: Todo | null,
  setSelectedTodo: CallableFunction,
};

export const TodoList: React.FC<Props> = ({
  todos,
  selectedTodo,
  setSelectedTodo,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => (
        <tr
          data-cy="todo"
          className={classNames({
            'has-background-info-light': false,
          })}
          key={todo.id}
        >
          <td className="is-vcentered">{todo.id}</td>
          <td className="is-vcentered">
            {todo.completed && (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check" />
              </span>
            )}
          </td>
          <td className="is-vcentered is-expanded">
            <p className={todo.completed
              ? 'has-text-success'
              : 'has-text-danger'}
            >
              {todo.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              data-cy="selectButton"
              className="button"
              type="button"
              onClick={() => setSelectedTodo((currentTodo: Todo | null) => {
                if (currentTodo?.id === todo.id) {
                  return null;
                }

                return todo;
              })}
            >
              <span className="icon">
                <i className={`far ${selectedTodo?.id === todo.id
                  ? 'fa-eye-slash'
                  : 'fa-eye'}`}
                />
              </span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
