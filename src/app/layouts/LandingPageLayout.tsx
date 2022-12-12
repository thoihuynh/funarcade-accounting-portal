import { Outlet } from 'react-router-dom';
import LandingPageHeader from 'app/components/LandingPageHeader/Loadable';

export default function LandingPageLayout() {
  return (
    <>
      <LandingPageHeader />
      <Outlet />
    </>
  );
}
