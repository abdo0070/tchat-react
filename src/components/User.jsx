const User = ({name,last_message,image}) => {
  //
  return (
    <div className="flex p-2 items-center gap-2 border-solid p-2 border-b-2 border-sky-500 cursor-pointer hover:bg-sky-700">
      <div className="w-[50px]">
        <img
          className="object-cover rounded-full"
          src={image}
          alt=""
        />
      </div>
      <div className="text-white">
        <h2 className="text-lg font-bold">{name}</h2>
        <span className="text-sm text-slate-100 font-semibold">{last_message}</span>
      </div>
    </div>
  );
};
export default User;
