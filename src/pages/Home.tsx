function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to the Todo List Application!</h1>
      <p>
        Organize your tasks and stay productive with our simple and intuitive Todo List application. Manage your todos
        efficiently by adding, completing, and filtering your tasks.
      </p>
      <p>
        To get started, please <a href="/login">log in</a>
      </p>
      <div>
        <a href="/todos">View Todos</a>
        <a href="/about">Learn More</a>
      </div>
    </div>
  );
}

export default Home;
