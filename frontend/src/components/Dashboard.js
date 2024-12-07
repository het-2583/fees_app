import React, { useState } from "react";
import { Grid, Button, Typography, Card, CardContent, IconButton, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
  },
  card: {
    textAlign: "center",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#f7f7f7",
  },
  icon: {
    fontSize: "50px",
  },
  reloadButton: {
    backgroundColor: "#ff7043",
    color: "#fff",
    margin: "20px auto",
    padding: "10px 20px",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
  menuButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    backgroundColor: "#333", // Dark background color for the menu
    color: "#fff", // White text
    padding: "20px",
    borderRight: "none",
    transition: "all 0.3s ease-in-out", // Smooth transition for the drawer
  },
  drawerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  menuItem: {
    fontSize: "18px",
    fontWeight: "500",
    padding: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#444", // Darker shade on hover
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false); // State to control drawer visibility
  const navigate = useNavigate(); // Define navigate using useNavigate

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const features = [
    { label: "Inbox", icon: "✉" },
    { label: "Batch Schedules", icon: "🕒" },
    { label: "Live Classes", icon: "📡" },
    { label: "Attendance", icon: "📅" },
    { label: "Exam", icon: "🎓" },
    { label: "Result", icon: "📈" },
    { label: "Study Material", icon: "📚" },
    { label: "externalfac", icon: "📘", action: () => navigate("/externalfac") },
    { label: "Payment", icon: "💳", action: () => navigate("/payment-details") }, // Add navigate for Payment
    { label: "StudentInfo", icon: "📘", action: () => navigate("/studentinfo") },
  ];

  return (
    <div className={classes.container}>
      {/* Hamburger Menu Button */}
      <IconButton className={classes.menuButton} onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      {/* Slide-out Drawer */}
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContent}>
          <Typography variant="h6" style={{ color: "#fff", marginBottom: "20px" }}>
            Menu
          </Typography>
          {features.map((feature, index) => (
            <div
              key={index}
              className={classes.menuItem}
              onClick={feature.action} // Trigger the action on click
            >
              {feature.icon} {feature.label}
            </div>
          ))}
        </div>
      </Drawer>

      {/* Dashboard Content */}
      <Typography variant="h4" align="center" gutterBottom>
        Student/Parent Dashboard
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h2" className={classes.icon}>
                  {feature.icon}
                </Typography>
                <Typography variant="subtitle1">{feature.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button className={classes.reloadButton}>RELOAD SUBSCRIPTION</Button>
      </div>
      <div className={classes.footer}>
        <img
          src="logo.png"
          alt="Learner's Point"
          style={{ height: "60px", marginBottom: "10px" }}
        />
        <Typography variant="body1">
          Helping children to achieve their GOAL
        </Typography>
        <Typography variant="body2">
          Email: jaindhiren@gmail.com | Mobile: +91-8999905111, +91-9825018098,
          079-25471227
        </Typography>
      </div>
    </div>
  );
};

export default Dashboard;
