import CardListEdition from '@/app/components/CardList/CardListEdition'
import Loading from '@/app/loading'
import { Suspense } from 'react'

export default function Create () {
  const roomID = 1
  return (
    <main>
      <h1 className='text-3xl font-bold text text-center shadow-xl p-10'>
        Room Creator
      </h1>
      <section className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full max-w-[550px]'>
          <form action='room/create' method='POST'>
            {/* Title Block */}
            <div className='-mx-3 flex flex-wrap'>
              <div className='w-full px-3 sm:w-1/2'>
                {/* TODO: este div tiene que mostrarse si RoomID existe */}
                <div className='mb-5'>
                  <label
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Room ID
                  </label>
                  <input
                    type='text'
                    name='roomID'
                    id='roomID'
                    className='w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    disabled
                  />
                </div>
              </div>
              {/* TODO: este div tiene que ser disabled si RoomID existe () */}
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label
                    for='roomTitle'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Title
                  </label>
                  <input
                    type='text'
                    name='roomTitle'
                    id='roomTitle'
                    placeholder='Room Title'
                    className='w-full rounded-md border border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
              </div>
            </div>
            {/* Cards Block */}
            {/* TODO: Hay que agregar un condicional para que este bloque se muestre si Room esta creado */}
            <label className='flex text-3xl mb-5'>Cards</label>
            <Suspense fallback={<Loading />}>
              <CardListEdition cards={roomID} />
            </Suspense>
            <div>
              {/* TODO: Ver el mejor approach para que el boton mute dependiendo la necesidad */}
              {/* Variaciones:
              - Next (crear Room)
              - Open Room (go to the Room)
              */}
              <button
                className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
