import { Outlet } from 'react-router-dom';
import Header from 'app/components/Header/Loadable';
import Sidebar from 'app/components/Sidebar';
import { AppPageLayoutWrapper } from './style';

export default function AppPageLayout() {
  return (
    <AppPageLayoutWrapper>
      <Header />
      <div className="d-flex app-page-content">
        <Sidebar />
        <Outlet />
      </div>
    </AppPageLayoutWrapper>
  );
}
