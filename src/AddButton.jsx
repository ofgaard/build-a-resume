const AddButton = ({ add, toggleAdd }) => {
  return (
    <div className="flex flex-row justify-center">
      <button
        className="mt-10 text-sm border border-yellow-500 rounded-md px-2 py-0.5 hover:scale-105"
        onClick={toggleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddButton;
