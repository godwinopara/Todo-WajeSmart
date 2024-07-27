function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">About Todo List Application</h1>
      <p className="text-lg mb-6 leading-relaxed">
        Welcome to the Todo List Application! This app allows you to manage your tasks efficiently by adding, marking as
        completed, removing, and filtering your todo items. Whether you're managing personal tasks or professional
        projects, this application provides a simple and intuitive interface to keep you organized.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Display a list of todo items.</li>
        <li>Adding new todo items.</li>
        <li>Remove todo items.</li>
        <li>Marking todo items as completed or active.</li>
        <li>Filter todo items by all, active, and completed.</li>
        <li>Fetching and displaying todos from an external API.</li>
        <li>User authentication to secure access to your todos.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>React:</strong> A JavaScript library for building user interfaces.
        </li>
        <li>
          <strong>TypeScript:</strong> A typed superset of JavaScript that provides static types.
        </li>
        <li>
          <strong>React Router:</strong> A library for handling routing in React applications.
        </li>
        <li>
          <strong>JSONPlaceholder API:</strong> Used for fetching initial todo items.
        </li>
        <li>
          <strong>CSS:</strong> For styling the application and ensuring it is responsive.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Developer Information</h2>
      <p className="text-lg mb-6 leading-relaxed">
        This application was developed by [Your Name]. I am a web developer with a passion for building user-friendly
        and efficient applications.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Usage Instructions</h2>
      <p className="text-lg mb-6 leading-relaxed">
        To get started, log in to the application using the login page. Once logged in, you can start adding, viewing,
        and managing your todo items.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <p className="text-lg mb-6 leading-relaxed">For any questions or feedback, please reach out to us at:</p>
      <ul className="list-disc list-inside pl-5 space-y-2">
        <li>Email: support@yourapp.com</li>
        <li>Phone: +123456789</li>
      </ul>
    </div>
  );
}

export default About;
