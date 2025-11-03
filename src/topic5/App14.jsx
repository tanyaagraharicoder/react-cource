import { useFormStatus } from "react-dom";

function App14() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Form submitted!");
  };

  function CustomerForm() {
    const { pending } = useFormStatus(); // returns true while form action is pending
    console.log("Form pending:", pending);

    return (
      <div>
        <input type="text" placeholder="Enter name" />
        <br />
        <br />
        <input type="password" placeholder="Enter password" />
        <br />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    );
  }

  return (
    <>
      <h1>useFormStatus Hook in React 19</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  );
}

export default App14;
