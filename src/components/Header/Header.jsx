import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { WrapperHeader, WrapperMain } from './Header.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <WrapperHeader title="Navigation panel">
        <Navigation />
      </WrapperHeader>

      <WrapperMain role="main" aria-busy="true">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperMain>
    </>
  );
};
