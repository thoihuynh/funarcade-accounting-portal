import { Route, Routes } from 'react-router-dom';
import UserLayout from './UserLayout/Loadable';
import NotFoundPage from 'app/pages/NotFoundPage/Loadable';

const UserPage = () => {
  return (
    <Routes>
      <Route path="/*" element={<UserLayout />} />
      <Route path="" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UserPage;
