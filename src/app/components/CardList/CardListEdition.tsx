'use client'
import { type Dispatch, type SetStateAction, useRef, useState } from 'react'

interface Props {
    cards: any
}
function TodoListItem ({
  todo,
  setTodos
}: {
  todo: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    text: string;
  };
  setTodos: Dispatch<
    SetStateAction<
      {
        id: `${string}-${string}-${string}-${string}-${string}`;
        text: string;
      }[]
    >
  >;
}): JSX.Element {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        lineHeight: '2rem',
        padding: '0.35rem 1rem',
        backgroundColor: 'rgb(239 239 239 / 70%)'
      }}
    >
      {todo.text}
      <button
        type='button'
        title='Delete this item'
        onClick={() =>
          setTodos((todos) => todos.filter((t) => t.id !== todo.id))}
      >
        🗑️
      </button>
    </li>
  )
}

function CardListEdition ({ rommID }:Props) {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: '🐕 Walk the dog' },
    { id: crypto.randomUUID(), text: '🍔 Eat lunch' },
    { id: crypto.randomUUID(), text: '📚 Study react' },
    { id: crypto.randomUUID(), text: '🏀 Play basketball' },
    { id: crypto.randomUUID(), text: '🔎 Study biology' },
    { id: crypto.randomUUID(), text: '👟 Buy shoes' }
  ])
  const newTodoInput = useRef<HTMLInputElement>(null)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginTop: '1rem'
      }}
    >
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          overflow: 'hidden'
        }}
      >
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: 'flex', gap: '1rem' }}
      >
        <input
          ref={newTodoInput}
          type='text'
          placeholder='Write a new todo 📝'
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.25rem',
            width: '100%',
            backgroundColor: 'rgb(239 239 239)'
          }}
        />

        <button
          type='submit'
          title='Add a new todo'
          style={{
            whiteSpace: 'nowrap',
            padding: '0.5rem 1rem',
            backgroundColor: '#5a70ed',
            color: '#ffffff'
          }}
          onClick={() => {
            if (!newTodoInput.current?.value) return
            setTodos([
              ...todos,
              {
                id: crypto.randomUUID(),
                text: newTodoInput.current.value
              }
            ])
            newTodoInput.current.value = ''
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default CardListEdition
