// import React from 'react'

const Breadcrumb = () => {
  return (
    <>
      <ol
        className="flex items-center whitespace-nowrap"
        aria-label="Breadcrumb"
      >
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-sm text-gray-500  hover:text-blue-600 focus:outline-none focus:text-blue-600 "
            href="#"
          >
            First-level Menu
          </a>
          <span className="m-1"> / </span>
        </li>
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-sm  text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 "
            href="#"
          >
            Second-level Menu
          </a>
          <span className="m-1"> / </span>
        </li>
        <li
          className="inline-flex items-center text-sm  font-semibold text-gray-800 truncate"
          aria-current="page"
        >
          Current Page
        </li>
      </ol>
    </>
  );
};

export default Breadcrumb;
