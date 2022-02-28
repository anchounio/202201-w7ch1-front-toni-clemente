export function Login() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Login user");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Login</button>
      </form>
      ;
    </>
  );
}
