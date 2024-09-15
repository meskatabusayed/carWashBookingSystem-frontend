// Register section start
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../redux/features/user/UserApi";
import { useAppDispatch } from "../../redux/hooks";
import Swal from "sweetalert2";
import { setUser } from "../../redux/features/auth/AuthSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [signUp, { isLoading }] = useSignUpMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { name, email, password, phone, address, role: "user" };

    try {
      const result = await signUp(data).unwrap();
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "You have registered successfully.",
      });

      dispatch(setUser({ user: result.data, token: result.data.token }));
      navigate("/");
    } catch (err) {
      const customError = err as { data?: { message?: string } };
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text:
          customError?.data?.message || "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen mt-16 lg:mt-[62px] p-6">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      ></div>

      {/* Form Container */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-sm w-full z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleRegister}>
          <div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-[#1877F2]   ${
                isLoading ? "bg-gray-400" : "bg-[#1877F2] hover:bg-[#1877F2]"
              } text-white py-2 px-4 rounded hover:bg-[#1877F2] transition duration-300`}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#1877F2] hover:text-[#1877F2]">
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;