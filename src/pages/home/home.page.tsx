import LogoutButton from "../../components/shared/logout/logout.component";
import UserProfilePage from "../user/user.profile.page";

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <h1>Logged In User</h1>
      <UserProfilePage />
      <LogoutButton />
    </div>
  );
};

export default HomePage;
