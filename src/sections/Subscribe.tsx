import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section 
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up Form
        <span className='text-coral-red'> Update </span>
        Newsletters
      </h3> 

      <div className='lg:max-w-[45%] w-full flex items-center 
      max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input 
          className='input'
          type="text" 
          placeholder='subscribe@nike.com'
        />
        <div className='flex max-sm:justify-end max-sm:w-full items-center'>
          <Button label='Subscribe' fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
