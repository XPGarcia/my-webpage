import getConfig from 'next/config';
import Script from 'next/script';

export const GoogleTagManager = () => {
  const { publicRuntimeConfig } = getConfig();
  const measurementId = publicRuntimeConfig.gtmMeasurementId;

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <Script id='google-tag-manager'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${measurementId}');`}
      </Script>
    </>
  );
};
