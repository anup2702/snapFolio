const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/github/login";
  };

  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
    >
      Login with GitHub
    </button>
  );
};

export default LoginButton;
