import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

const Home = lazy(() => import('../pages/Home/Home'));

const Router: React.FC = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen"><Spin size="large" /></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
    </Suspense>
  );
};

export default Router;
