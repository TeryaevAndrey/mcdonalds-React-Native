import React from "react";
import styled from "styled-components/native";
import Back from "../Back";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Wrapper = styled.ImageBackground`
  max-height: 338px;
  height: 100%;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px;
  margin-top: 50px;
`;

const WrapperEdit = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const ProfileHeader = ({navigation}) => {
  return (
    <Wrapper source={require("../../assets/Profile/bg.png")} resizeMode="contain">
      <Header>
        <Back onPress={() => navigation.goBack()} />
        <WrapperEdit>
          <IconMaterialIcons name="edit" size="24" color="#fff" />
        </WrapperEdit>
      </Header>
      <ProfileInfo />
    </Wrapper>
  );
};

export default ProfileHeader;
