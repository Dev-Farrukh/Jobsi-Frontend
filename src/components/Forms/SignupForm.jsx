import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { showErrorToast, showSuccessToast } from '../../utils/toast'
import { fetchSignup } from '../../lib/auth'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) => {

    e.preventDefault()
    if (password !== confirmPassword) {
      showErrorToast('Passwords do not match!')
      return;
    }
    setLoading(true)

    try {
      const payload = { firstName, lastName, email, password }
      console.log("payload", payload);
      const response = await fetchSignup(payload)
      if (response.status) {
        showSuccessToast('Signup successful!')
        navigate('/login')
      }
    } catch (err) {
      showErrorToast(err.error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* First Name Field */}
      <div className="relative">
        <input
          type="text"
          id="firstName"
          placeholder=" "
          pattern="[A-Za-z]+"
          title="Only alphabets allowed"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="peer w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-gray-900"
          required
        />
        <label
          htmlFor="firstName"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium transition-all duration-300 pointer-events-none peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
        >
          First Name
        </label>
      </div>
      {/* Last Name Field */}
      <div className="relative">
        <input
          type="text"
          id="lastName"
          placeholder=" "
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="peer w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-gray-900"
          required
        />
        <label
          htmlFor="lastName"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium transition-all duration-300 pointer-events-none peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
        >
          Last Name
        </label>
      </div>

      {/* Email Field */}
      <div className="relative">
        <input
          type="email"
          id="email"
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-gray-900"
          required
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium transition-all duration-300 pointer-events-none peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
        >
          Email
        </label>
      </div>

      {/* Password Field */}
      <div className="relative">
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer w-full px-3 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-gray-900"
            required
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium transition-all duration-300 pointer-events-none peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Password
          </label>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors z-10"
          >
            {showPassword ? (
              <Eye size={20} />
            ) : (
              <EyeOff size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="relative">
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="peer w-full px-3 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-gray-900"
            required
          />
          <label
            htmlFor="confirmPassword"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium transition-all duration-300 pointer-events-none peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
          >
            Confirm Password
          </label>
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors z-10"
          >
            {showConfirmPassword ? (
              <Eye size={20} />
            ) : (
              <EyeOff size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Sign Up Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white  py-2 rounded-full transition-all duration-300 transform hover:scale-101 cursor-pointer mt-2 flex justify-center items-center ${loading ? 'cursor-not-allowed' : ''
          }`}
      >
        {loading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white border-t-transparent"></div>
        ) : (
          'SIGN UP'
        )}
      </button>
    </form>
  )
}

export default SignupForm