import React from "react";

import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";
import { MainContent } from "./styled/global";

const Layout = ({
  seoData,
  isHomePage,
  children,
  currentPageSlug,
  isPrimaryPage,
}) => {
  return (
    <div
      className={`body-wrapper ${currentPageSlug} ${
        isPrimaryPage ? "primary" : "secondary"
      }`}
    >
      <Seo
        title={seoData?.title}
        description={seoData?.metaDesc}
        facebookDescription={seoData?.facebookDescription}
        facebookTitle={seoData?.facebookTitle}
        twitterDescription={seoData?.twitterDescription}
        twitterTitle={seoData?.twitterTitle}
      />
      <Header currentPageSlug={currentPageSlug} />

      <MainContent home={isHomePage}>{children}</MainContent>

      <Footer />
    </div>
  );
};

export default Layout;
