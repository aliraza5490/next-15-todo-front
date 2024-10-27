const TodoInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input
      className="w-full rounded-md p-3 md:p-4 outline-none dark:bg-secondDark dark:text-white"
      type="text"
      {...props}
    />
  );
};

export default TodoInput;
