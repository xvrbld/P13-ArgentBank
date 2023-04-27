import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getToken } from 'features/user/userSlice'

export const LoggedOutGuard = ({ Page }: { Page: React.FC }): JSX.Element => {
  const token = useSelector(getToken)

  return token && token.length > 3 ? <Navigate to="/user"/> : <Page />
}