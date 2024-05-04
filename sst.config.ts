import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';
import { createExperienceTable } from './sst-config';

export default {
  config(_input) {
    return {
      name: 'my-webpage',
      region: 'us-east-1'
    };
  },
  stacks(app) {
    app.stack(function Site({ stack, app }) {
      const site = new NextjsSite(stack, 'site', {
        customDomain:
          app.stage === 'prod' && process.env.DOMAIN_URL
            ? {
                domainName: process.env.DOMAIN_URL,
                domainAlias: `www.${process.env.DOMAIN_URL}`
              }
            : undefined,
        bind: [createExperienceTable(stack)]
      });

      stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url
      });
    });
  }
} satisfies SSTConfig;
