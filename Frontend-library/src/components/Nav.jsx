import { useState } from "react";
import Loginbtn from "./Loginbtn";
import Registerbtn from "./Registerbtn";
import UserProfile from "./UserProfile";
import { useAuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { user } = useAuthContext();

  const navmenu = {
    ROLE_ADMIN: [
      { name: "Home", link: "/" },
      {
        name: (
          <span className="flex items-center space-x-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add a Book
          </span>
        ),
        link: "/add",
      },
    ],
    ROLE_MODERATOR: [
      { name: "Home", link: "/" },
      {
        name: (
          <span className="flex items-center space-x-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add a Book
          </span>
        ),
        link: "/add",
      },
    ],
    ROLE_USER: [{ name: "Home", link: "/" }],
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            <span className="text-base-100 font-bold text-red-600 text-3xl font-thin">
              LIBRARY
            </span>{" "}
            Manage
          </a>
        </div>

        <div className="navbar-end space-x-2">
          <ul className="menu menu-horizontal px-1">
            {user &&
              navmenu[user.roles[0]].map((menuItem) => (
                <li key={menuItem.name}>
                  <a
                    href={menuItem.link}
                    className="text-base hover:text-emerald-800"
                  >
                    {menuItem.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* User Profile or Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6 p-4 ">
          {user ? (
            <>
              {/* Welcome Message and Roles */}
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-gray-800">
                  Welcome,
                </span>
                <span className="text-lg font-bold text-blue-600">
                  {user.username}
                </span>

                {/* Display Roles with Styled Badges */}
                {user.roles?.length > 0 && (
                  <div className="flex space-x-2">
                    {user.roles.map((role, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-medium rounded-full shadow-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* User Profile Button */}
              <UserProfile />
            </>
          ) : (
            <div className="flex space-x-4">
              {/* Register and Login Buttons */}
              <Registerbtn />
              <Loginbtn />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
