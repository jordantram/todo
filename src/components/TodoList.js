import React from 'react';
import '../App.css';
import { Checkbox, Icon } from 'semantic-ui-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoList = ({ todos, deleteItem, markTodoAs, selectedFilter, onDragEnd }) => {
  let todosFiltered;

  if (selectedFilter === 'all') {
    todosFiltered = todos;
  } else {
    todosFiltered = todos.filter(todo => todo.status === selectedFilter);
  }

  const todoItems = todosFiltered.map((todo, index) => {
    const isCompleted = todo.status === 'completed';
    const statusOnChange = isCompleted ? 'active' : 'completed';

    return (
      <Draggable key={todo.id} draggableId={todo.id} index={index}>
        {(provided) => (
          <li className='todo-box f-space-between' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Checkbox className='checkbox' checked={isCompleted} onChange={() => markTodoAs(todo.id, statusOnChange)} />
            <span className={isCompleted ? 'todo-text completed' : 'todo-text'}>{todo.text}</span>
            <Icon className='pointer' style={{ marginBottom: '0.35rem' }} name='trash' 
                  onClick={() => deleteItem(todo.id)} />
          </li>
        )}
      </Draggable>
    );
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (<ul className='todo-list' {...provided.droppableProps} ref={provided.innerRef}>
                          {todoItems}
                          {provided.placeholder}
                        </ul>)}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;