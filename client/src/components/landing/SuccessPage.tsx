import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Link,
  Button,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import GitHubIcon from "@mui/icons-material/GitHub";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import devpostLogo from "../../assets/devpost-logo.png";

const SuccessPage = () => {
  const socialPosts = [
    {
      likes: 255,
      content:
        "Excited to share Wandr, a web app that helps people moving to new cities find the perfect places for their lifestyle!",
      author: "Team Wandr",
      image: "https://via.placeholder.com/150",
      role: "Development Team",
      link: "#",
    },
    {
      likes: 189,
      content:
        "Amazing to see how Wandr is helping people transition to new cities with ease!",
      author: "Wandr Community",
      image: "https://via.placeholder.com/150",
      role: "User Community",
      link: "#",
    },
    {
      likes: 142,
      content:
        "Wandr has been a game-changer for finding the perfect spots in my new city!",
      author: "Happy User",
      image: "https://via.placeholder.com/150",
      role: "Wandr User",
      link: "#",
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
      maxWidth: "400px",
      display: "inline-block",
      verticalAlign: "top",
    },
    avatar: {
      width: 60,
      height: 60,
      margin: "0 auto 1rem",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  };

  return (
    <Box style={styles.container}>
      <Typography variant="h3" gutterBottom>
        Success Stories
      </Typography>
      <Typography variant="h5" style={{ margin: "1em 0" }}>
        🎉 Wandr is making a difference in people's lives! 🎉
      </Typography>
      <Typography variant="body1" paragraph>
        See what our community is saying about their experience with Wandr.
      </Typography>

      <Box style={{ margin: "2em 0" }}>
        <Carousel
          autoPlay
          interval={5000}
          animation="slide"
          indicators={true}
          navButtonsAlwaysVisible={true}
        >
          {socialPosts.map((post, index) => (
            <Card key={index} style={styles.card}>
              <CardContent>
                <Avatar style={styles.avatar} src={post.image} />
                <Typography variant="h6" gutterBottom>
                  {post.author}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {post.role}
                </Typography>
                <Typography variant="body1" paragraph>
                  {post.content}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Button
                    startIcon={<ThumbUpOffAltIcon />}
                    size="small"
                    disabled
                  >
                    {post.likes}
                  </Button>
                  <Link href={post.link} target="_blank" style={styles.link}>
                    <Button variant="outlined" size="small">
                      View Post
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>

      <Box style={{ margin: "2em 0" }}>
        <Typography variant="h4" gutterBottom>
          Join the Wandr Community
        </Typography>
        <Typography variant="body1" paragraph>
          Wandr helps you move to a new city with ease by matching you with
          places based on your lifestyle. Start your journey today!
        </Typography>
        <Box style={{ marginTop: "2em" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<GitHubIcon />}
            style={{ marginRight: "1rem" }}
            href="https://github.com/your-username/wandr"
            target="_blank"
          >
            View on GitHub
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={
              <img
                src={devpostLogo}
                alt="Devpost"
                style={{ width: "20px", height: "20px" }}
              />
            }
            href="https://devpost.com/software/wandr"
            target="_blank"
          >
            View Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessPage;
