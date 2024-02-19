import './styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignedOut, SignedIn } from '@clerk/clerk-react';

import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home';
import SignInPage from './pages/SignIn';
import SignupPage from './pages/SignUp';
import ProfilePage from './pages/Profile';
import PrivacyAndPolicy from './pages/PrivacyAndPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUsPage from './pages/ContactUs';


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
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-in/:action" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/sign-up/:action" element={<SignupPage />} />
            <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </SignedIn>
      </Router>
  );  
}

export default App;
