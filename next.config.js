/** @type {import('next').NextConfig} */

const nextConfig = {
  publicRuntimeConfig: {
    domainUrl: process.env.DOMAIN_URL,
    gtmMeasurementId: process.env.GTM_MEASUREMENT_ID
  },
  serverRuntimeConfig: {
    domainUrl: process.env.DOMAIN_URL
  }
};

module.exports = nextConfig;
