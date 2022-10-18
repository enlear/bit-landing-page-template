import { NextPage } from "next";
import { Main as MainWrapper } from "@enlear/bit-landing-page-template.layouts.main";
import { Container } from "@enlear/bit-landing-page-template.layouts.container";
import {
  UserCard,
  User,
} from "@enlear/bit-landing-page-template.widgets.user-card";
import { navBarItems } from "../utils/nav-bar-items";
import { Box, Divider, Grid, Typography } from "@mui/material";

const team: User[] = [
  {
    name: "Lakindu Hewawasam",
    bio: "Designer & Developer",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/68411742?s=400&u=02f1a5b7666f90a080609c5d4ad74772d65764bc&v=4",
    social: {
      twitter: "https://twitter.com/lakinduhewa",
      linkedIn: "https://www.linkedin.com/in/lakindu-hewawasam/",
    },
  },
];

const AboutPage: NextPage = () => {
  return (
    <Box>
      <MainWrapper
        headerItems={navBarItems.headerItems}
        footerItems={navBarItems.footerItems}
        footerBrand={navBarItems.footerBrand}
      >
        <Container maxWidth="lg">
          <Box>
            <Box>
              <Typography color="textPrimary" variant="h3">
                About Us
              </Typography>
            </Box>
            <Box>
              <Typography
                color="textPrimary"
                variant="body1"
                sx={{
                  my: 3,
                }}
              >
                This landing page is designed and maintained by Enlear
              </Typography>
              <Divider />
            </Box>
            <Typography color="textPrimary" variant="h4" sx={{ my: 4 }}>
              Our Team
            </Typography>
            <Box
              sx={{
                my: 3,
              }}
            >
              <Grid container spacing={3}>
                {team.map((member, index) => (
                  <Grid item md={4} xs={12} key={index}>
                    <UserCard user={member} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </MainWrapper>
    </Box>
  );
};

export default AboutPage;
