import React from 'react';
import styled from "styled-components/native";
import ProfileBtns from '../../components/Profile/ProfileBtns/ProfileBtns';
import ProfileHeader from '../../components/Profile/ProfileHeader';

const Wrapper = styled.View`
  background: #F5F4F4;
`;

const ProfileScreen = ({navigation}) => {
  return (
    <Wrapper>
      <ProfileHeader navigation={navigation} />
      <ProfileBtns />
    </Wrapper>
  );
};

export default ProfileScreen;