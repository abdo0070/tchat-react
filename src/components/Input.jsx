const Input = (props) => {
  const icon = props.icon || "";
  const type = props.type || "text";
  const placeholder = props.placeholder || "";

  return (
    <div className="relative">
      <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
        <i className={icon}></i>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
      />
    </div>
  );
};

export default Input;
