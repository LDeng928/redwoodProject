import { Link, routes } from "@redwoodjs/router"
import logo from '../../../public/img/logo.webp'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
} from '@redwoodjs/forms';

const BlogLayout = ({ children }) => {
  return <>
  <header>
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center  flex-shrink-0 text-white mr-6">
          <span className="font-bold text-xl">NTST</span>
      </div>
      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="uppercase text-sm sm:flex-grow">
            <Link to={routes.home()} className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4">Home</Link>
            <Link to={routes.about()} className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4">About</Link>
            <Link to={routes.shop()} className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4">Shop</Link>
            <Link to={routes.contact()} className="block mt-5 text-lg sm:inline-block sm:mt-0 text-ntst-white hover:text-ntst-purple mr-4">Contact</Link>
          </div>
          {/* Search function */}
          <a href="#" className="block cursor-pointer px-4 py-2"><i className="text-xl text-ntst-white hover:text-ntst-purple fas fa-search"></i></a>
          {/* Login */}
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">Login</a>
      </div>
    </nav>
  </header>
  <main>{children}</main>

</>
}

export default BlogLayout;
