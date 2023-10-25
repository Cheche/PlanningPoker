import Button from './components/Button/Button'

export default function Home () {
  return (
    <main>
      <h1 className='text-3xl font-bold text text-center shadow-xl p-10'>
        Planning Poker
      </h1>
      <br />
      <section>
        <div className='flex justify-around'>
          <Button
            label='Create Room'
            target='/roomCreator'
          />
        </div>
        <div className='flex justify-around'>
          <Button
            label='Join Room'
            target='/roomFinder'
          />
        </div>
      </section>
    </main>
  )
}
