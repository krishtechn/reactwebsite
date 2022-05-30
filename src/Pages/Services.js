import React from 'react'
import Cards from '../Components/Cards'

const Services = () => {
  return (
    <div>
      <div className="btns flex justify-center items-center mt-3 mb-3">
           <button className='text-white m-2 hover:bg-purple-500 bg-purple-800 font-bold py-2 px-4 rounded'>All</button>
           <button className='text-white m-2 hover:bg-purple-500 bg-purple-800 font-bold py-2 px-4 rounded'>Web Development</button>
           <button className='text-white m-2 hover:bg-purple-500 bg-purple-800 font-bold py-2 px-4 rounded'>App development</button>
       </div>
     <Cards />
     </div>
  )
}

export default Services