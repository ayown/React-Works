const SignInForm = () => (
  <form className="flex flex-col items-center justify-center h-full px-10 relative z-20">
    <h1 className="text-2xl font-bold">Sign In</h1>
    {/* social icons here */}
    <span className="text-sm">or use your email-password</span>
    <div className="relative w-full my-2">
      <input 
        type="email" 
        placeholder="Email" 
        className="pl-10 w-full py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500" 
      />
      <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none"></i>
    </div>
    <div className="relative w-full my-2">
      <input 
        type="password" 
        placeholder="Password" 
        className="pl-10 w-full py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500" 
      />
      <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none"></i>
    </div>
    <a href="#" className="text-xs mt-2">Forget Your Password?</a>
    <button type="submit" className="mt-4 bg-purple-700 text-white px-6 py-2 rounded uppercase text-xs font-semibold hover:bg-purple-800 transition-colors">Sign In</button>
  </form>
);

export default SignInForm;
