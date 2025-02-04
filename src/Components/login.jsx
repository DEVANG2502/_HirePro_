import React, { useState } from 'react';

const dummyUsers = [
  { email: 'dev', password: 'pass1' },
  { email: 'user2@test.com', password: 'password2' },
  { email: 'Yukta', password: '1234' },
  { email: 'user4@test.com', password: 'password4' },
  { email: 'user5@test.com', password: 'password5' },
  { email: 'user6@test.com', password: 'password6' },
  { email: 'user7@test.com', password: 'password7' },
  { email: 'user8@test.com', password: 'password8' },
  { email: 'user9@test.com', password: 'password9' },
  { email: 'user10@test.com', password: 'password10' },
];

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleLogin = () => {
    const user = dummyUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError('');
      onLogin();
    } else {
      setError('Incorrect email or password');
    }
  };

  const handleForgotPassword = () => {
    alert(`Password reset link sent to ${email}`);
    setForgotPassword(false);
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-gray-50 pl-96 pt-16 ">
      <div className="flex justify-center items-center w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden mx-100 ">
        
        {/* Image Section */}
        <div className="hidden md:block w-1/2 pr-24 m-10">
          <img 
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-9cMIJAGwROCz1gKBkO5tIZQ4Zy5_rWNmKZ7A5q3jfUmsu38x" 
            alt="Login Illustration" 
            className="object-cover w-full h-full" 
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 px-16 py-10 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Welcome to HirePro!</h2>
          <p className="text-gray-500 text-center mb-6">Please sign in to your account and start the adventure</p>
          
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex items-center justify-between mb-6">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">Remember Me</label>
            </div>
            <button 
              onClick={() => setForgotPassword(true)} 
              className="text-indigo-600 text-sm"
            >
              Forgot Password?
            </button>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white text-lg py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
          <p className="text-center text-gray-500 mt-4">
            New on our platform? <a href="#" className="text-indigo-600">Create an account</a>
          </p>
          <div className="mt-4 text-center">
            <p className="text-gray-500">or sign in with</p>
            <div className="flex justify-center mt-2">
              <a href="#" className="mx-2">
                <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="mx-2">
                <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="mx-2">
                <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="#" className="mx-2">
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="Google" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl mb-4">Reset Password</h3>
            <p className="mb-4">Enter your email to receive a password reset link.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <button 
                onClick={handleForgotPassword} 
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg"
              >
                Send Reset Link
              </button>
              <button 
                onClick={() => setForgotPassword(false)} 
                className="ml-2 text-gray-500 py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
