import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <Link className="btn-xs" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="btn-xs" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="btn-xs" to="/order/salad">
          Order Food
        </Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link className="btn-xs" to="/dashboard/adminHome">
            Dashboard
          </Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link className="btn-xs" to="/dashboard/userHome">
            Dashboard
          </Link>
        </li>
      )}
      <li>
        <Link className="btn-xs" to="/dashboard/cart">
          <button className="btn btn-ghost btn-xs">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-extrabold">
            Bite Hub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex flex-col items-end">
                <h6 className="px-2 font-bold">{user.displayName}</h6>
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost btn-xs text-red-500 font-extrabold"
                >
                  LogOut
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-ghost btn-sm">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
