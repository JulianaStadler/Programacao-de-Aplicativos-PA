import './App.css'

function App() {
  return (
    <>
      <div className='min-w-screen h-screen'>
        <div className='min-w-screen min-h-1/2 flex justify-center items-center'>
          <div className='text-green-600 text-3xl w-52 h-52 bg-lime-100 flex justify-center items-center text-center font-extrabold border-3'>
            Hello World Tailwind!
          </div>
        </div>
        <div className='min-w-screen min-h-1/2 flex justify-center items-center flex-col gap-4'>
          <div className='border-2 min-w-2/3 flex gap-2.5 justify-between'>
            <div className='w-16 h-16 bg-blue-400  flex justify-between items-center flex-wrap flex-col'>
              <div className='w-5 h-5 bg-orange-400 '></div>
              <div className='w-5 h-5 bg-orange-400 '></div>
            </div>
            <div className='w-16 h-16 bg-blue-400  flex justify-center items-center'>
              <div className='w-5 h-5 bg-orange-400 '></div>
            </div>
            <div className='w-16 h-16 bg-blue-400  flex justify-end items-end relative'>
              <div className='w-5 h-5 bg-orange-400 '></div>
              <div className='w-5 h-5 bg-orange-400  absolute top-0 left-0'></div>
            </div>
            <div className='w-16 h-16 bg-blue-400  flex justify-center items-end'>
              <div className='w-5 h-5 bg-orange-400 '></div>
            </div>
          </div>
          <div className='border-2 min-w-2/3 flex gap-2.5 justify-between'>
            <div className='w-16 h-16 bg-blue-400  flex justify-between items-center flex-wrap flex-col'>
              <div className='w-5 h-5 bg-orange-400 '></div>
            </div>
            <div className='w-16 h-16 bg-blue-400  flex justify-center items-center'>
              <div className='w-5 h-5 bg-orange-400 '></div>
            </div>
            <div className='w-16 h-16 bg-blue-400 flex justify-center'>
              <div className='w-5 h-5 bg-orange-400 mt-1'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
