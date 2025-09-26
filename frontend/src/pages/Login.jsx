import { useState } from "react"
import { Link } from "react-router-dom"
import loginImage from "../assets/login.webp"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`user login!\n${email}, ${password}`);
  };

  return (
    <section>
      <div className="flex items-center justify-between gap-2.5">
        <div className="flex w-full md:w-1/2 flec-col justify-center items-center p-8 md:p-12">
          <form onSubmit={handleSubmit} action="" className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-200 shadow-sm shadow-gray-200">
            <div className="flex justify-center mb-6">
              <h2 className="text-xl font-medium">Rabbit</h2>
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2>
            <p className="text-center mb-6">
              Enter your username and password to login
            </p>
            <div className="mb-4">
              <label htmlFor="" className="block text-sm font-semibold mb-2">Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}
                className="w-full p-2 border border-gray-200 rounded"
                placeholder="Enter your email adress"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="block text-sm font-semibold mb-2">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)}
                className="w-full p-2 border border-gray-200 rounded"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="w-full mb-6 bg-black text-white p-2 text-sm rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer">Sign In</button>
            <p className="text-center text-sm">
              Don't have an account?
              <Link className="ml-1 text-rabbit-red" to={"/register"}>Register</Link>
            </p>
          </form>
        </div>
        <div className="hidden md:block w-1/2 bg-gray-800">
          <div className="h-full flex flex-col justify-center items-center">
            <img src={loginImage} alt="login image" className="h-[750px] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
