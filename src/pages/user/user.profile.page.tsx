import { useAuth0 } from "@auth0/auth0-react";

interface UserProfilePageProps {}

const UserProfilePage: React.FunctionComponent<UserProfilePageProps> = () => {
  const { user } = useAuth0();
  return (
    <>
      <div>
        <span>{user?.name}</span>
        <br />
        <span>{user?.email}</span> <br />
        <span>{user?.birthdate}</span> <br />
      </div>
    </>
  );
};

export default UserProfilePage;
