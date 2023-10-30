import SearchButton from '../../components/SearchButton/SearchButton'

export default function Find () {
  return (
    <main>
      <h1 className='text-3xl font-bold text text-center shadow-xl p-10'>
        Room Finder
      </h1>
      <section className='text-3xl font-bold text text-center m-10'>
        <h3 className='pb-10'>Find Room</h3>
        <SearchButton placeholder='Use the Room ID or Title' />
      </section>
    </main>
  )
}
