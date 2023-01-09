import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import LogoutBtn from "../../components/Profile/LogoutBtn";
import ProfileBtns from "../../components/Profile/ProfileBtns/ProfileBtns";
import ProfileHeader from "../../components/Profile/ProfileHeader";

const Wrapper = styled.View`
  background: #f5f4f4;
  position: relative;
  height: 100%;
  justify-content: space-between;
`;

const ProfileScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <ProfileHeader navigation={navigation} />
      <ProfileBtns />
      <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 50}}>
        <LogoutBtn />
      </View>
    </Wrapper>
  );
};

export default ProfileScreen;
