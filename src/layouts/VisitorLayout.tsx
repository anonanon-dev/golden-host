import Navbar from '../components/common/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'

const VisitorLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default VisitorLayout