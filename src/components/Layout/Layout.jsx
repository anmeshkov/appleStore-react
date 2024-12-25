import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

const Layout = () => {
  return (
    <div className="layout">
      <div className="container layout__wrapper">
        {/* Боковая панель */}
        <Sidebar></Sidebar>
        {/* Основной контент */}
        <Main></Main>
      </div>
    </div>
  );
};

export default Layout;
