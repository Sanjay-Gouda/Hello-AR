/* eslint-disable react/prop-types */
const PhoneNumber = ({ onChange, value }) => {
  return (
    <>
      <div className="flex items-center w-full">
        <button
          id="dropdown-phone-button"
          data-dropdown-toggle="dropdown-phone"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 rounded-md border border-gray-300 bg-white p-4 focus:ring-4 focus:outline-none focus:ring-gray-100 "
          type="button"
        >
          +91
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <label
          htmlFor="phone-input"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Phone number:
        </label>
        <div className="relative w-full">
          <input
            type="text"
            onChange={onChange}
            value={value}
            id="phone-input"
            aria-describedby="helper-text-explanation"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-md border border-gray-300 bg-white focus:ring-blue-500 focus:border-blue-500 "
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone number"
            required
          />
        </div>
      </div>
    </>
  );
};

export default PhoneNumber;
