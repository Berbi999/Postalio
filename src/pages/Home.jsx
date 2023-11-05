import MenuList from "../components/MenuList";
import NavBar from "../components/NavBar";
import MainSection from "./MainSection";
import CreatePost from "./forms/CreatePostForm";
function HomePage() {
  return (
    <div>
      <div className="flex flex-row">
        <NavBar></NavBar>
        <CreatePost></CreatePost>
        <MenuList></MenuList>
      </div>
      <div className="flex flex-col">
        <MainSection></MainSection>
      </div>
    </div>
  );
}
export default HomePage;
