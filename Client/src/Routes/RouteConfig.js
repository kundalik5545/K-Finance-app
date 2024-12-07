import HomePage from "../pages/HomePage";
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CalculatorPage from "../pages/CalculatorPage";
import FixFd_Calc from "../components/calculators/FixFd_Calc";
import Blog from "../pages/Blog";
import KnowledgeSection from "../components/Blog/knowledgeSection";
import TermsAndConditions from "../components/Legal/TermsAndConditions";
import PrivacyPolicy from "../components/Legal/PrivacyPolicy";

//Protected Routes
import Dashboard from "../components/Dashboard/Dashboard";
import CreditCardPage from "../pages/CreditCardPage";
import ServicesPage from "../pages/ServicesPage";
import ContactList from "../components/ContactList/ContactList";

// Public Routes
export const PublicRoutes = [
  { path: "/", Component: HomePage },
  { path: "/sign-up", Component: SignUp },
  { path: "/login", Component: Login },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/Calculators", Component: CalculatorPage },
  { path: "/fix-fd", Component: FixFd_Calc },
  { path: "/blog", Component: Blog },
  { path: "/study-resources", Component: KnowledgeSection },
  { path: "/terms-conditions", Component: TermsAndConditions },
  { path: "/privacy-policy", Component: PrivacyPolicy },
];

// Protected Routes
export const PrivateRoutes = [
  { path: "/dashboard", Component: Dashboard },
  { path: "/credit-card", Component: CreditCardPage },
  { path: "/services", Component: ServicesPage },
  { path: "/contact-list", Component: ContactList },
];
