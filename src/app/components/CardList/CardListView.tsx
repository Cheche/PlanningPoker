function TodoListItem ({
  todo
}: {
  todo: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    text: string;
  };
}): JSX.Element {
  return (
    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
      <div className='p-4 text-right'>
        <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>{todo.id}</h4>
        <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>{todo.text}</p>
      </div>
    </div>
  )
}

function CardListView ({ roomID }) {
  // Get cards related with the roomID

  const todos = [
    { id: crypto.randomUUID(), text: '🐕 Walk the dog' },
    { id: crypto.randomUUID(), text: '🍔 Eat lunch' },
    { id: crypto.randomUUID(), text: '📚 Study react' },
    { id: crypto.randomUUID(), text: '🏀 Play basketball' },
    { id: crypto.randomUUID(), text: '🔎 Study biology' },
    { id: crypto.randomUUID(), text: '👟 Buy shoes' }
  ]

  return (
    <>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </>
  )
}

export default CardListView
