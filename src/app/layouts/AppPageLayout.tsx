import { Outlet } from 'react-router-dom';
import Header from 'app/components/Header/Loadable';

export default function AppPageLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
