const express = require("express");
const cors = require("cors");

const app = express({ extended: false });

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

const profileRoutes = require("./routes/profile");
const workExperienceRoutes = require("./routes/work_experience");
const skillsRoutes = require("./routes/skills");
const projectsRoutes = require("./routes/projects");
const myServicesRoutes = require("./routes/my_Services");
const educationRoutes = require("./routes/education");
const contactMeRoutes = require("./routes/contact_me");

app.use("/api/profiles", profileRoutes);
app.use("/api/workexperience", workExperienceRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/myservices", myServicesRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/contactme", contactMeRoutes);
app.use("/api",(req, res) => {
  res.status(200).send("this is api url");
});

const initApp = async () => {
  try {
    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}/`);
    });
  } catch (error) {
    console.error("Error initializing app :", error);
  }
};

initApp();
