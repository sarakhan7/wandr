import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Wandr Team",
      title: "Development Team",
      imageUrl: "https://via.placeholder.com/150",
      bio: "Our dedicated team is passionate about helping people transition to new cities with ease. We believe that moving should be exciting, not stressful, and we're committed to making that vision a reality through innovative technology and thoughtful design.",
      email: "team@wandr.com",
      github: "https://github.com/wandr",
      linkedin: "https://linkedin.com/company/wandr",
      instagram: "https://instagram.com/wandr",
      twitter: "https://twitter.com/wandr",
    },
  ];

  const styles = {
    container: {
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center" as const,
    },
    card: {
      margin: "1rem",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    avatar: {
      width: 120,
      height: 120,
      margin: "0 auto 1rem",
    },
    socialButtons: {
      marginTop: "1rem",
    },
  };

  return (
    <Box style={styles.container}>
      <Typography variant="h3" gutterBottom>
        About Wandr
      </Typography>
      <Typography variant="body1" paragraph>
        Wandr is dedicated to making your move to a new city seamless and exciting. 
        Our platform uses advanced technology to help you discover the perfect places 
        that match your lifestyle and preferences.
      </Typography>

      <Box style={{ margin: "2em 0" }}>
        <Typography variant="h4" gutterBottom>
          Our Team
        </Typography>
        {teamMembers.map((member, index) => (
          <Card key={index} style={styles.card}>
            <CardContent>
              <Avatar style={styles.avatar} src={member.imageUrl} />
              <Typography variant="h5" gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                {member.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {member.bio}
              </Typography>
              <Box style={styles.socialButtons}>
                <IconButton
                  href={member.github}
                  target="_blank"
                  color="primary"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href={member.linkedin}
                  target="_blank"
                  color="primary"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href={member.instagram}
                  target="_blank"
                  color="primary"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href={member.twitter}
                  target="_blank"
                  color="primary"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </IconButton>
              </Box>
              <Button
                variant="outlined"
                href={`mailto:${member.email}`}
                style={{ marginTop: "1rem" }}
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default AboutUsPage;
