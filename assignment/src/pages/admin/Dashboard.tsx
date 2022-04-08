type Props = {}
import { Outlet } from 'react-router-dom'

const Dashboard = (props: Props) => {
  return (
    <>
      <div className="container-fluid">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard