import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

interface PrivateRouteProps {
  children: JSX.Element; 
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isSignedIn } = useUser();
  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children; 
};

export default PrivateRoute;