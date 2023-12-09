/* eslint-disable react/prop-types */
const LgButton = ({ onButtonClick, label }) => {
  return (
    <>
      <button
        type="button"
        onClick={onButtonClick}
        className="text-white w-full bg-purple-800 text-[18px] hover:bg-purple-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
      >
        {label}
      </button>
    </>
  );
};

export default LgButton;
