import { toast } from 'react-hot-toast'

const baseStyle = {
  border: '1px solid #42A5F5',
  padding: '8px',
  color: '#42A5F5',
}

const errorIconTheme = {
  primary: '#EF5350',
  secondary: '#fff',
}

export const showErrorToast = (message) => {
  toast.error(message || 'Something went wrong', {
    style: baseStyle,
    iconTheme: errorIconTheme,
  })
}

export const showSuccessToast = (message) => {
  toast.success(message || 'Success!')
}
