import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { MainLayout } from '@/components/layout/MainLayout';

import routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <IntersectObserver />
      <Routes>
        <Route element={<MainLayout />}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
