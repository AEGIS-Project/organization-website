import React from "react";
import { Divider } from "antd";

import TopNavBar from "../components/top-nav-bar.js";
import BannerPhoto from "../components/banner-photo.js";
import Footer from "../components/footer";
import TextSection from "../components/text-section.js";
import ContentContainer from "../components/content-container";

function SupportUs() {
  return (
    <div className="site-layout-content">
      <div style={{ height: "100vh" }}>
        <TopNavBar />
        <BannerPhoto
          title="Support Us"
          text="Our work is driven by the open-source community, volunteers, and people like you"
        />
      </div>
      <ContentContainer>
        <TextSection
          title="Contribute to our projects"
          description={
            <div>
              <Divider />
              <h2 style={{ color: "black" }}> For Developers </h2>
              <p>
                All of our work is open-sourced on github:
                <ul>
                  <li>
                    <a href="https://github.com/The-AEGIS-Initiative/lernrobotics">
                      LERNRobotics
                    </a>{" "}
                    - An educational robotics coding platform ( React.js / Unity
                    / AWS Amplify )
                  </li>
                  <li>
                    <a href="https://github.com/The-AEGIS-Initiative/lernrobotics-code-sandboxs">
                      CodeSandbox
                    </a>
                    - A cloud service for sandboxing and executing code (
                    Node.js / Docker )
                  </li>
                </ul>
                We welcome all motivated devleopers to join our open-source
                community!
              </p>
              <Divider />
              <h2 style={{ color: "black" }}>
                {" "}
                For Artists / Graphic Designers{" "}
              </h2>
              <p>
                LERNRobotics is an educational robotics platform based on{" "}
                <a href="https://unity.com/">Unity</a>. We are constantly
                seeking ways to improve and diversify the visuals of our
                robotics sandbox. If you are interested in ways to contribute
                your artistic knowledge, please reach out to us on our{" "}
                <a href="https://discord.gg/ZKxAyu">Discord server</a>!
              </p>
              <Divider />
              <h2 style={{ color: "black" }}> For Educators </h2>
              <p>
                Your thoughts are invaluable to us (and to students worldwide)
                for continuing to improve our educational technologies. We want
                to hear from you about what we do well and what we can do
                better. Join our{" "}
                <a href="https://discord.gg/ZKxAyu">Discord server</a> to get
                involved!
              </p>
              <Divider />
              <h2 style={{ color: "black" }}>
                {" "}
                Want to help but not sure how?{" "}
              </h2>
              <p>
                There are many more ways you can get involved in our projects.
                Join the community on our{" "}
                <a href="https://discord.gg/ZKxAyu">Discord server</a> to learn
                more about how you can help!
              </p>
            </div>
          }
        />
      </ContentContainer>
      <Footer />
    </div>
  );
}

export default SupportUs;
