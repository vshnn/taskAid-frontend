import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'
import Cookies from 'js-cookie'

export const RequireAuth = ({ children }) => {
	const details = JSON.parse(Cookies.get("taskaid_details"));
  	const auth = useAuth()
	if (details === undefined) {
		return <Navigate to='/login' replace='true' />
	}
	return children
}