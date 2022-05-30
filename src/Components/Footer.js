import React from 'react'
import { Link } from 'react-router-dom'

let url = "https://www.youtube.com/channel/UCF5oO43y67XYOfJRiPif1rw";
const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
<footer className="p-4 flex justify-between bg-purple-500 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
<span className="text-sm text-white sm:text-center dark:text-gray-400">© {year} <Link to={url} className="hover:underline text-red-600">Technical krish</Link>. All Rights Reserved.
</span>
<ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
<li>
<Link to="/" className="mr-4 hover:underline md:mr-6 ">About</Link>
</li>
<li>
<Link to="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
</li>
<li>
<Link to="/" className="mr-4 hover:underline md:mr-6">Licensing</Link>
</li>
<li>
<Link to="/" className="hover:underline">Contact</Link>
</li>
</ul>
</footer>
    </div>
  )
}

export default Footer