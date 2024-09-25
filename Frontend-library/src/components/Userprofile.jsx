import { useAuthContext} from '../contexts/AuthContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Userprofile = () => {
  const navigate = useNavigate()
  const { logout } = useAuthContext()
  const handleLogout = async () => {
    try {
      // เรียกใช้ฟังก์ชัน logout
      await logout();
  
      Swal.fire({
        icon: "success",
        title: "User logged out successfully",
        text: "Logout success now!",
        timer: 2000,
      });
  
      // ย้ายหน้าไปยังหน้าแรก
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message || error.message,
        timer: 2000,
      });
    }
  };
  
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
          <a href='/userprofile' className="justify-between">
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