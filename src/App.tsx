import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignedOut, SignedIn } from '@clerk/clerk-react';

import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import ProfilePage from './pages/Profile';


function App() {
  const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

  if (!clerkFrontendApi) {
    throw new Error('Clerk API key is not defined in environment');
  }

  return (
      <Router>
        <SignedOut>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<LoginPage />} />
            <Route path="/sign-in/:action" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/sign-up/:action" element={<SignupPage />} />
          </Routes>
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          </Routes>
        </SignedIn>
      </Router>
  );  
}

export default App;
