import React from "react";
import styled from "styled-components";

import SocialShareButton from "../../components/social-share-button";
import { HomeSocialShareProviders } from "./provider";

const Title = styled.h1``;
const List = styled.ul``;
const ListItem = styled.li``;

export default function Home(): JSX.Element {
  return (
    <>
      <Title>Strategy Pattern</Title>
      <List>
        {Object.entries(HomeSocialShareProviders).map(([key, value]) => (
          <ListItem key={key}>
            <SocialShareButton url={value.url}>{value.text}</SocialShareButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
