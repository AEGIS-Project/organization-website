import React from "react";

import TopNavBar from "../components/top-nav-bar.js";
import BannerPhoto from "../components/banner-photo.js";
import Footer from "../components/footer";

function OurMission() {
  return (
    <div>
      <TopNavBar />
      <BannerPhoto text="We build technologies that allow everyone to have access to hands-on educational experiences" />
      <Footer />
    </div>
  );
}

export default OurMission;
