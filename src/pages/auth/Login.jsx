import React, { useEffect, useState } from 'react'
import LoginForm from '../../components/Forms/LoginForm'
import { motion } from 'framer-motion'

const Login = () => {
  useEffect(() => {
    let document = window.document
    document.title = 'Welcome to Jobsi'
  }, [])

  return (
    <section className='relative flex justify-between px-10  items-center'>
      {/* Background Image */}
      <motion.img src="/logo.png"
        alt="Side profile"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" , delay : 0.4}}
        className='absolute top-0 left-5 object-cover z-11 w-28 h-28'
      />

      {/* Left Image*/}
      <motion.div initial={{ opacity: 0, x: -60, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} >
      <img src="/sideProfile.png" alt="Side profile" className='h-screen hidden sm:block' />
      </motion.div>

      {/* Right Section */}
      <motion.div  initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} className='flex flex-col justify-center mx-auto mt-30 sm:mt-0 sm:w-90 '>
        <div className='flex flex-col mx-auto'>
          <h3 className='text-3xl font-semibold'> Welcome Back To Jobsii</h3>
          <p className='text-gray-500 text-sm my-4'>  Enter your email and password to access your account.</p>
        </div>
        <LoginForm />

        {/* Forgot Password Link */}
        <div className="text-center mt-4 text-gray-500">
          Didn't have an account! {" "}
          <a href="/signup" className="text-blue-400 hover:text-blue-500 hover:underline transition-colors">
            Signup
          </a>
        </div>
        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-gray-500 hover:text-blue-500  text-sm transition-colors">
            Forgot your password?
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Login
