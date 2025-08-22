import { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import TogglePanel from './TogglePanel';

const AuthContainer = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container relative w-[768px] max-w-full min-h-[480px] rounded-[30px] shadow-xl overflow-hidden bg-white transition-all duration-500 ${isActive ? 'active' : ''}`}>
      <div className={`form-container sign-in absolute top-0 h-full transition-all duration-500 ease-in-out ${
        isActive 
          ? 'translate-x-full opacity-0 pointer-events-none' 
          : 'left-0 w-1/2 opacity-100 pointer-events-auto'
      } z-20`}>
        <SignInForm />
      </div>
      <div className={`form-container sign-up absolute top-0 h-full transition-all duration-500 ease-in-out ${
        isActive 
          ? 'left-0 w-1/2 opacity-100 pointer-events-auto' 
          : 'left-1/2 w-1/2 opacity-0 pointer-events-none'
      } z-20`}>
        <SignUpForm />
      </div>
      <TogglePanel isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default AuthContainer;
