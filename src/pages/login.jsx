import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="space-y-5 w-full lg:w-6/12">
      <div>
        <h2 className="text-2xl font-semibold">Sign in</h2>
      </div>
      <form className="space-y-5 mt-10">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="border-2 border-gray-500 focus-within:border-orange-400 outline-none p-2 rounded-md focus-within:shadow-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="password"
            placeholder="example@gmail.com"
            className="border-2 border-gray-500 focus-within:border-orange-400 outline-none p-2 rounded-md focus-within:shadow-md"
          />
          <div className="flex items-center gap-1 mt-1">
            <input type="checkbox" className="accent-orange-400 text-white size-4 border border-orange-400!" />
            <small>Remeber me</small>
          </div>
        </div>

        <button className="w-full p-2 rounded-md bg-orange-400 text-white font-semibold text-lg hover:opacity-90 transition cursor-pointer hover:shadow-md">
          Sign in
        </button>
      </form>

      <div>
        <div>
          <p className="text-gray-500">
            Dont't have an account?{" "}
            <Link
              to={"/auth/register"}
              className="font-semibold text-orange-400 hover:underline"
            >
              Sign up
            </Link>
          </p>
          <Link
            to={"/auth/forgot-password"}
            className="font-semibold text-orange-400 hover:underline"
          >
            Forgot Password
          </Link>
        </div>

        <div className="mt-20 lg:mt-10 w-3/5 mx-auto lg:w-2/5">
          <div className="relative">
            <div className="border-b-2 border-gray-600"></div>
            <p className="flex justify-center  text-gray-600 font-semibold absolute -top-3 bg-white">
              Sign in with
            </p>
          </div>
          <ul className="mt-8 flex justify-between text-orange-400">
            <li className="w-12 h-12 bg-orange-400 text-white flex justify-center items-center rounded-2xl cursor-pointer">
              {" "}
              <FaGoogle size={25} />
            </li>
            <li className="w-12 h-12 bg-orange-400 text-white flex justify-center items-center rounded-2xl cursor-pointer">
              {" "}
              <FaGithub size={25} />
            </li>
            <li className="w-12 h-12 bg-orange-400 text-white flex justify-center items-center rounded-2xl cursor-pointer">
              {" "}
              <FaFacebook size={25} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
