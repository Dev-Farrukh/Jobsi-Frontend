import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchSignup } from '../../lib/auth'
import toast from 'react-hot-toast'
import SignupForm from '../../components/Forms/SignupForm'

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let document = window.document
    document.title = 'Join Jobsi'
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!', {
        style: {
          border: '1px solid  #42A5F5',
          padding: '16px',
          color: ' #42A5F5',
        },
        iconTheme: {
          primary: '#EF5350',
          secondary: '#fff',
        },
      })
      return
    }

    setLoading(true)
    try {
      const response = await fetchSignup(fullName, lastName, email, password)
      if (response.status >= 200 && response.status < 300) {
        toast.success('Signup successful!')
      } else {
        toast.error(response.response.data.error, {
          style: {
            border: '1px solid  #42A5F5',
            padding: '16px',
            color: ' #42A5F5',
          },
          iconTheme: {
            primary: '#EF5350',
            secondary: '#fff',
          },
        })
      }
    } catch (err) {
      toast.error(err.response.data.error, {
        style: {
          border: '1px solid  #42A5F5',
          padding: '16px',
          color: ' #42A5F5',
        },
        iconTheme: {
          primary: '#EF5350',
          secondary: '#fff',
        },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='relative flex justify-between px-10 items-center'>
      {/* Background Image */}
      <motion.img
        src="/logo.png"
        alt="Side profile"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className='absolute top-0 left-5 object-cover z-11 w-28 h-28'
      />

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className='flex flex-col justify-center sm:w-90 mx-auto mt-30 sm:mt-0 '
      >
        <div className='flex flex-col '>
          <h3 className='text-3xl font-semibold'> Join Jobsi</h3>
          <p className='text-gray-500 text-sm my-4'> Register now and Find your dream job!!</p>
        </div>
        <SignupForm states={{ setPassword, setShowPassword, showPassword, setEmail, handleSubmit, email, password }} />

        {/* Forgot Password Link */}
        <div className="text-center mt-4 text-gray-500">
          Already have an account! {" "}
          <a href="/login" className="text-blue-400 hover:text-blue-500 hover:underline transition-colors">
            Login
          </a>
        </div>
      </motion.div>

      {/* Right Image*/}
      <motion.div
        initial={{ opacity: 0, x: 60, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="/sideProfile2.png" alt="Side profile" className='h-screen hidden sm:block' />
      </motion.div>
    </section>
  )
}

export default Signup

