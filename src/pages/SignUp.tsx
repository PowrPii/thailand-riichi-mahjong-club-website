import { SignUp } from '@clerk/clerk-react';

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center h-lvh">
        <SignUp path="/sign-up" routing="path"/>
    </div>
  );
};

export default SignupPage;