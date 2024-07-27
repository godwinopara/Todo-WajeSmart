function Home() {
  return (
    <div className="text-center py-10 max-w-[900px] mx-auto">
      <h1 className="text-3xl mb-5">Welcome to the Todo List Application!</h1>
      <p className="mb-5">
        Organize your tasks and stay productive with our simple and intuitive Todo List application. Manage your todos
        efficiently by adding, completing, and filtering your tasks.
      </p>
      <p className="mb-5">
        To get started, please <a href="/login">log in</a>
      </p>
      <div className="flex gap-x-5 justify-center">
        <a className="bg-black text-white py-3 px-5 rounded-sm flex items-center" href="/todos">
          View Todos
        </a>
        <a className="bg-black text-white px-5 py-3 rounded-sm flex items-center" href="/about">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Home;
