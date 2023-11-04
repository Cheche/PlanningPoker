import CardListView from '@/app/components/CardList/CardListView'
import Loading from '@/app/loading'
import { Suspense } from 'react'

export default function View () {
  const roomID = 1
  return (
    <main>
      <h1 className='text-3xl font-bold text text-center shadow-xl p-10'>
        Room Viewer
      </h1>
      <div className='min-h-screen bg-gray-50/50'>
        <aside className='bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0'>
          <div className='relative border-b border-white/20'>
            <a className='flex items-center gap-4 py-6 px-8' href='#/'>
              <h6 className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white'>Room Players</h6>
            </a>
          </div>
          <div className='m-4'>
            <ul className='mb-4 flex flex-col gap-1'>
              <li>
                <article className='flex'>
                  <svg aria-hidden='true' role='img' className='h-6 w-5 mr-3 text-white' preserveAspectRatio='xMidYMid meet' viewBox='0 0 256 256'><path fill='currentColor' d='M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z' /></svg>
                  <p className='block antialiased font-sans text-base leading-relaxed text-white font-medium capitalize'>User 1</p>
                </article>
              </li>
            </ul>
          </div>
        </aside>
        <div className='p-4 xl:ml-80'>
          <div className='mt-12'>
            <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4'>
              <Suspense fallback={<Loading />}>
                <CardListView roomID={roomID} />
              </Suspense>
            </div>

            <div className='mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3'>
              <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
                <div className='relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6'>
                  <div>
                    <h6 className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1'>Points</h6>
                    <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4'>
                      <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div className='p-4 text-right'>
                          <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>1</h4>
                        </div>
                      </div>
                      <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div className='p-4 text-right'>
                          <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>2</h4>
                        </div>
                      </div>
                      <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div className='p-4 text-right'>
                          <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>3</h4>
                        </div>
                      </div>
                      <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div className='p-4 text-right'>
                          <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>5</h4>
                        </div>
                      </div>
                      <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div className='p-4 text-right'>
                          <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>8</h4>
                        </div>
                      </div>
                      <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div className='p-4 text-right'>
                          <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>13</h4>
                        </div>
                      </div>
                      <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div className='p-4 text-right'>
                          <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>21</h4>
                        </div>
                      </div>
                      <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div className='p-4 text-right'>
                          <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>34</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
