import { Outlet } from 'react-router-dom';
import Sidebar from 'app/components/Sidebar';
import { AppPageLayoutWrapper } from './style';
// import Header from 'app/components/Header';

export default function AppPageLayout() {
  return (
    <AppPageLayoutWrapper>
      <Sidebar />
      <div className="app-page-content">
        {/* <Header /> */}
        <Outlet />
      </div>
    </AppPageLayoutWrapper>
  );
}
