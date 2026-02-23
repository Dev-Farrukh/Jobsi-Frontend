import { Eye, EyeOff } from 'lucide-react'
import { FaGoogle, FaMicrosoft } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchLogin } from '../../lib/auth'
import { showErrorToast, showSuccessToast } from '../../utils/toast'

export const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = { email, password }
      const response = await fetchLogin(payload)
      console.log("res", response)
      if (response.status === true) {
        showSuccessToast('Login successful!')
        navigate('/')
      } else {
        showErrorToast(response.response.data.error || 'Invalid credentials')
      }
    } catch (err) {
      showErrorToast('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      {/* Sign In Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-101 flex justify-center items-center ${loading ? 'cursor-not-allowed' : ''}`}
      >
        {loading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white border-t-transparent"></div>
        ) : (
          'SIGN IN'
        )}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-sm text-gray-500 font-medium">
          OR CONTINUE WITH
        </span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Social Buttons */}
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="w-15 flex justify-center items-center text-blue-400 border border-gray-300 hover:border-blue-400 hover:shadow-xl py-4 rounded-lg font-medium transition-all duration-300"
        >
          <FaMicrosoft />
        </button>

        <button
          type="button"
          className="w-15 flex justify-center items-center text-blue-400 border border-gray-300 hover:border-blue-400 hover:shadow-xl py-4 rounded-lg font-medium transition-all duration-300"
        >
          <FaGoogle />
        </button>
      </div>
    </form>
  )
}

export default LoginForm