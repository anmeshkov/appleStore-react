import Navigation from '../Navigation/Navigation';
import Filter from '../Filter/Filter';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Navigation></Navigation>
      <Filter></Filter>
    </aside>
  );
};

export default Sidebar;
