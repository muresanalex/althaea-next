import Script from "next/script";
import { useEffect, useState } from "react";

const GoogleAnalytics = () => {
  const [consentCookie, setConsentCookie] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});

    setConsentCookie(Boolean(cookies.consentCookie));
  }, []);

  if (!consentCookie) {
    return "";
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />
      <Script strategy="lazyOnload" id="ga">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
