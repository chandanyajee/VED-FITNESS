import Home from './pages/Home';
import About from './pages/About';
import Memberships from './pages/Memberships';
import Trainers from './pages/Trainers';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import JoinNow from './pages/JoinNow';
import NotFound from './pages/NotFound';
import DietPlan from './pages/DietPlan';
import Blog from './pages/Blog';
import type { ReactNode } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'About',
    path: '/about',
    element: <About />
  },
  {
    name: 'Memberships',
    path: '/memberships',
    element: <Memberships />
  },
  {
    name: 'Trainers',
    path: '/trainers',
    element: <Trainers />
  },
  {
    name: 'Gallery',
    path: '/gallery',
    element: <Gallery />
  },
  {
    name: 'Diet Plan',
    path: '/diet-plan',
    element: <DietPlan />
  },
  {
    name: 'Blog',
    path: '/blog',
    element: <Blog />
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />
  },
  {
    name: 'Join Now',
    path: '/join-now',
    element: <JoinNow />
  },
  {
    name: 'Not Found',
    path: '/404',
    element: <NotFound />
  }
];

export default routes;

