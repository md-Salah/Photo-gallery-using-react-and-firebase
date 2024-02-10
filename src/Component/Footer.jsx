import { Box, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  const Resources = [
    {
      title: "Article",
      link: "https://dev.to/thenerdydev/10-react-projects-every-beginner-should-try-fk9",
    },
    {
      title: "Youtube Tutorial",
      link: "https://www.youtube.com/watch?v=vUe91uOx7R0",
    },
    {
      title: "Github Source Code",
      link: "https://github.com/iamshaunjp/firegram",
    },
    { title: "My Github", link: "https://github.com/md-Salah/PhotoGallery" },
  ];

  const Topics = [
    {
      title: "React basic & fundamental",
      link: "https://reactjs.org/docs/components-and-props.html",
    },
    { title: "Custom Hook", link: "https://reactjs.org/docs/hooks-intro.html" },
    { title: "Firebase", link: "https://firebase.google.com" },
    { title: "Chakra UI", link: "https://chakra-ui.com/docs" },
  ];

  const Contacts = [
    { title: "Facebook", link: "https://www.facebook.com/salahCuetCse" },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mohammad-salah-uddin-16156a149",
    },
    { title: "Github", link: "https://github.com/md-Salah" },
  ];

  return (
    <Box mt="100px" pb='5' boxShadow='base'>
      <Grid
        mx={[10, 20, 30, 40]}
        py="10"
        textAlign="center"
        templateColumns="repeat(3, 1fr)"
        gap={5}
      >
        <GridItem>
          <Heading size="sm" mb="10px">
            Resources
          </Heading>
          {Resources.map(({ title, link }) => (
            <Text key={link}>
              <Link isExternal href={link}>
                {title}
              </Link>
            </Text>
          ))}
        </GridItem>
        <GridItem>
          <Heading size="sm" mb="10px">
            I have Learnt
          </Heading>
          {Topics.map(({ title, link }) => (
            <Text key={link}>
              <Link isExternal href={link}>
                {title}
              </Link>
            </Text>
          ))}
        </GridItem>
        <GridItem>
          <Heading size="sm" mb="10px">
            Contact me
          </Heading>
          {Contacts.map(({ title, link }) => (
            <Text key={link}>
              <Link isExternal href={link}>
                {title}
              </Link>
            </Text>
          ))}
        </GridItem>
      </Grid>
      <Text mx={[10, 20, 30, 40]} textAlign='center'>Copyright: Copy and Learn, No restriction</Text>
    </Box>
  );
};
