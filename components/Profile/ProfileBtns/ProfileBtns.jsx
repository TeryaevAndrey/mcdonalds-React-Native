import React from "react";
import styled from "styled-components/native";
import ProfileBtn from "./ProfileBtn";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconFeather from "react-native-vector-icons/Feather";
import { View } from "react-native";

const Wrapper = styled.View`
  margin-top: 13px;
`;

const ProfileBtns = () => {
  return (
    <Wrapper>
      <View>
        <ProfileBtn
          img={
            <IconIonicons name="pricetags-outline" size="24" color="#525252" />
          }
          title="My vouchers"
        />
        <ProfileBtn
          img={<IconMaterialIcons name="payment" size="24" color="#525252" />}
          title="Payment"
          mt
        />
        <ProfileBtn
          img={
            <IconIonicons name="pricetags-outline" size="24" color="#525252" />
          }
          title="Address"
          mt
        />
      </View>
      <View style={{marginTop: 15}}>
        <ProfileBtn
          img={
            <IconFeather name="settings" size="24" color="#525252" />
          }
          title="Settings"
        />
        <ProfileBtn
          img={<IconFeather name="info" size="24" color="#525252" />}
          title="About McDonald’s"
          mt
        />
      </View>
    </Wrapper>
  );
};

export default ProfileBtns;
