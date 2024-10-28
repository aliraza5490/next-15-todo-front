'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Todo, updateList } from '@/redux/todoSlice';
import { useState } from 'react';
import Line from './Line';
import TodoListFooter from './TodoListFooter';
import TodoListItem from './TodoListItem';

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todo);
  const [activeItem, setActiveItem] = useState<Todo | undefined>(undefined);
  const dispatch = useAppDispatch();

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  // triggered when dragging starts
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveItem(todoList?.find((item) => item.sequence === active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeItem = todoList.find((ex) => ex.sequence === active.id);
    const overItem = todoList.find((ex) => ex.sequence === over.id);

    if (!activeItem || !overItem) {
      return;
    }

    const activeIndex = todoList.findIndex((ex) => ex.sequence === active.id);
    const overIndex = todoList.findIndex((ex) => ex.sequence === over.id);

    if (activeIndex !== overIndex) {
      dispatch(updateList({ activeIndex, overIndex }));
    }
    setActiveItem(undefined);
  };

  const handleDragCancel = () => {
    setActiveItem(undefined);
  };

  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const all = [...todoList].sort((a, b) => b.sequence - a.sequence);

  const todoContainer = {
    all,
    active: all.filter((todo) => !todo.completed),
    completed: all.filter((todo) => todo.completed),
  };

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className="flex flex-col just bg-white dark:bg-secondDark rounded rounded-bl-none rounded-br-none mt-6 shadow-slate-400 relative">
          <SortableContext
            items={todoContainer[filter].map((item) => item.sequence)}
            strategy={verticalListSortingStrategy}
          >
            {todoContainer[filter].map((todo: Todo, i: number) => (
              <div key={todo.id}>
                <TodoListItem
                  id={todo.id}
                  value={todo.value}
                  completed={todo.completed}
                  sequence={todo.sequence}
                />
                {i < todoList.length - 1 && <Line />}
              </div>
            ))}
          </SortableContext>

          <DragOverlay adjustScale style={{ transformOrigin: '0 0' }}>
            {activeItem ? (
              <TodoListItem
                id={activeItem.id}
                value={activeItem.value}
                completed={activeItem.completed}
                sequence={activeItem.sequence}
                forceDragging={true}
              />
            ) : null}
          </DragOverlay>
        </div>
      </DndContext>

      <TodoListFooter
        left={todoContainer.active.length}
        setFilter={setFilter}
        activeFilter={filter}
      />

      {/* DND Hint */}
      <p className="text-[hsl(234,11%,52%)] text-center my-10">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default TodoList;
