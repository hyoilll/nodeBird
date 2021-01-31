import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Profile = () => {
  return (
    <div>
      <Head>
        <title>NodeBird | Profile</title>
      </Head>
      <AppLayout>
        <div>my profile</div>
      </AppLayout>
    </div>
  );
};

export default Profile;
