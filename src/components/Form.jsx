const Form = ({children}) => {
  return (
    <form action="" class="space-y-6 text-white">
      {children }
      <button class="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2">
        Sign in
      </button>
    </form>
  );
};

export default Form;
