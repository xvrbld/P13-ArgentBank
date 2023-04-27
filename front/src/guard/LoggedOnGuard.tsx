import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getToken } from 'features/user/userSlice'

export const LoggedOnGuard = ({ Page }: { Page: React.FC }): JSX.Element => {
  const token = useSelector(getToken)

  return token && token.length > 3 ? <Page /> : <Navigate to="/" />
}