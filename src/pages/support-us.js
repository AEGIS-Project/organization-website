import React from "react";

import TopNavBar from "../components/top-nav-bar.js";
import BannerPhoto from "../components/banner-photo.js";
import Footer from "../components/footer";

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

      <h1> Coming Soon! Stay Tuned. </h1>
      <Footer />
    </div>
  );
}

export default SupportUs;
