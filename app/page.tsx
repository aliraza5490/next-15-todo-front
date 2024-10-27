import AddTodoForm from './components/AddTodoForm';
import ThemeSwitch from './components/ThemeSwitch';

export default function Home() {
  return (
    <div className="relative">
      {/* background */}
      <div className="bg w-full absolute top-0 left-0 -z-10"></div>

      {/* content */}
      <div className="max-w-lg px-6 relative top-10 md:top-20 left-1/2 -translate-x-1/2">
        <div className="flex justify-between pb-8 items-center">
          <h1 className="text-xl md:text-3xl font-[700] text-white tracking-[.6rem] md:tracking-[.8rem]">
            TODO
          </h1>
          <ThemeSwitch />
        </div>

        {/* Add New Tasks */}
        <AddTodoForm />

        {/* Todo List */}
        <div></div>
      </div>
    </div>
  );
}
