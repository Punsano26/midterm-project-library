import { useAuthContext} from '../contexts/AuthContext'

const Userprofile = () => {
  const { logout } = useAuthContext()
  const handleLogout = async () => {
   logout()
  }
  return (
    <div>
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://pics.craiyon.com/2024-04-15/Ne_ExpINQpmIUGKzazfssA.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Userprofile