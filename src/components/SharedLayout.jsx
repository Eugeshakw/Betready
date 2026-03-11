import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loading } from './CustomLoaders/CustomLoaders';
import { Navigation } from './Layout/Navigation';
import Footer from './Layout/Footer';

export const SharedLayout = () => {
  return (
    <>
      {/* Navigation with logo and menu */}
      <Navigation />
      <Suspense fallback={<Loading />}>    
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};