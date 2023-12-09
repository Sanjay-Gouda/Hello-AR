/* eslint-disable react/prop-types */
export const FormInput = ({ label, onChange, name, value }) => {
  return (
    <>
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          {label}
        </label>
        <input
          type="text"
          placeholder={label}
          onChange={onChange}
          name={name}
          value={value}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
        />
      </div>
    </>
  );
};
