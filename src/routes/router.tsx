import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Splash from '@/components/loader/Splash';
import PageLoader from '@/components/loader/PageLoader';
import paths, { rootPaths } from './paths';


// Lazy imports
const App = lazy(() => import('@/App'));
const MainLayout = lazy(() => import('@/layouts/main-layout'));
const AuthLayout = lazy(() => import('@/layouts/auth-layout'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const SignIn = lazy(() => import('@/pages/authentication/SignIn'));
const SignUp = lazy(() => import('@/pages/authentication/SignUp'));
const ResetPassword = lazy(() => import('@/pages/authentication/ResetPassword'));
const Error404 = lazy(() => import('@/pages/errors/Error404'));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: rootPaths.auth,
        element: (
          <Suspense fallback={<Splash />}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: paths.signin,
            element: (
              <AuthLayout>
                <SignIn />
              </AuthLayout>
            ),
          },
          {
            path: paths.signup,
            element: (
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            ),
          },
              {
            path: paths.resetPassword,
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: '*',
        element: <Error404 />,
      },
          ],
  },
]);

export default router;