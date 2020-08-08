import React from "react";

import TopNavBar from "../components/top-nav-bar.js";
import BannerPhoto from "../components/banner-photo.js";
import Footer from "../components/footer";

function SupportUs() {
  return (
    <div className="site-layout-content">
      <TopNavBar />
      <BannerPhoto text="Support our work" />

      <h1> Coming Soon! Stay Tuned. </h1>
      <Footer />
    </div>
  );
}

export default SupportUs;
