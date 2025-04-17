import {
  FaPhoneAlt,
  FaBoxOpen,
  FaHome,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/slices/headerSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { links } = useSelector((state) => state.header);

  const isActive = (path) => location.pathname === path;

  // When background overlay is clicked
  const handleOutsideClick = () => {
    dispatch(toggleSidebar());
  };

  // Prevent click from closing sidebar
  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white w-4/5 sm:w-2/5 md:w-1/4 h-full shadow-lg rounded-r-2xl overflow-hidden transition-all"
        onClick={handleInsideClick}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 bg-indigo-600">
          <h2 className="text-white text-lg font-bold tracking-wide">Menu</h2>
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="text-white text-xl"
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 mt-6 px-4">
          {links.map(({ path, label }) => {
            const icons = {
              "/": FaHome,
              "/product": FaBoxOpen,
              "/contact": FaPhoneAlt,
              "/About": FaInfoCircle,
            };
            const Icon = icons[path] || FaInfoCircle;

            return (
              <Link
                key={path}
                to={path}
                onClick={() => dispatch(toggleSidebar())}
                className={`flex items-center justify-between gap-3 px-3 py-3 rounded-xl transition-all duration-300 ${
                  isActive(path)
                    ? "bg-indigo-700 text-white"
                    : "text-gray-800 hover:bg-indigo-100"
                }`}
              >
                <div className="flex items-center gap-3 text-base font-medium">
                  <Icon size={20} />
                  {label}
                </div>
                <span className="text-lg">{">"}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
