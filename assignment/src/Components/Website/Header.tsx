
import Nav from './Nav'
import Search from './Search'

type Props = {}

const Headers = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav />
          <Search />
        </div>
      </div>
    </nav>
  )
}

export default Headers