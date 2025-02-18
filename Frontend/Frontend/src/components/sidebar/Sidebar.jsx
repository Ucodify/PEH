import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
  console.log("Sidebar rendered");
  return (
    <div className="border-r border-slate-200 p-50 flex flex-col sm:w-[240px] md:w-[250px] md:h-72">
      <SearchInput />
      <div className="divider p-0 m-1 bg-gray "></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
