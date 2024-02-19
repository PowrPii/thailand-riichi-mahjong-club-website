import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-lvh">
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
};

export default SignInPage;