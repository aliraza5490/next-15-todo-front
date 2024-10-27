const TodoInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input
      className="w-full outline-none dark:text-[hsl(233,11%,84%)]  dark:bg-secondDark m-0 p-0"
      type="text"
      {...props}
    />
  );
};

export default TodoInput;
