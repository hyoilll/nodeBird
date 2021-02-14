import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch } from "react-redux";

import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          Twit
          <br />0
        </div>,
        <div key="followings">
          Followings
          <br />0
        </div>,
        <div key="follower">
          Follower
          <br />0
        </div>,
      ]}
    >
      <Card.Meta title="Hyoil" avatar={<Avatar>Hyoil</Avatar>} />
      <Button onClick={onLogOut}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
