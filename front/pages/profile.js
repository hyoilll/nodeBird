import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "hyoil" },
    { nickname: "korea" },
    { nickname: "japan" },
  ];
  const followingList = [
    { nickname: "hyoil" },
    { nickname: "korea" },
    { nickname: "japan" },
  ];

  return (
    <div>
      <Head>
        <title>NodeBird | Profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="following list" data={followerList} />
        <FollowList header="follower list" data={followingList} />
      </AppLayout>
    </div>
  );
};

export default Profile;
