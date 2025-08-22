const TogglePanel = ({ isActive, setIsActive }) => (
  <div 
    className={`toggle-container absolute top-0 left-1/2 w-1/2 h-full z-50 transition-all duration-500 ease-in-out rounded-[150px_0_0_100px] pointer-events-none ${isActive ? '-translate-x-full rounded-[0_150px_100px_0]' : ''}`}
    role="complementary"
    aria-label="Authentication toggle panel"
  >
    <div className="toggle bg-gradient-to-r from-indigo-400 to-purple-700 w-[200%] h-full flex">
      <div className={`toggle-panel w-1/2 flex flex-col items-center justify-center text-center px-8 pointer-events-auto ${isActive ? 'translate-x-full' : ''}`}>
        <greetingSignUp />
        <button 
          onClick={() => setIsActive(true)} 
          className="bg-transparent border border-white text-white px-6 py-2 rounded uppercase text-xs font-semibold hover:bg-white hover:text-purple-700 transition-colors duration-300" 
          aria-label="Switch to sign up form"
          aria-pressed={isActive}>
          Sign Up
        </button>
      </div>
      <div className={`toggle-panel w-1/2 flex flex-col items-center justify-center text-center px-8 pointer-events-auto ${isActive ? '' : '-translate-x-full'}`}>
        <greetingSignIn />
        <button 
          onClick={() => setIsActive(false)} 
          className="bg-transparent border border-white text-white px-6 py-2 rounded uppercase text-xs font-semibold hover:bg-white hover:text-purple-700 transition-colors duration-300"
          aria-label="Switch to sign in form"
          aria-pressed={!isActive}>
          Sign In
        </button>
      </div>
    </div>
  </div>
);

export default TogglePanel;
