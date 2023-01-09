import React from "react";
import styled from "styled-components/native";
import NotificationItem from "./NotificationItem";
import { FlatList, ScrollView, StatusBar } from "react-native";
import { notificationData } from "./notificationData";

const NotificationList = () => {
  return (
    <FlatList
      data={notificationData}
      renderItem={({ item }) => (
        <NotificationItem title={item.title} text={item.text} />
      )}
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        width: "100%",
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        background: "#fff",
      }}
    />
  );
};

export default NotificationList;
