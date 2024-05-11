import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';
import {
  config,
  createCertificationsTable,
  createExperienceTable,
  createProjectsTable,
  createSkillsTable
} from './sst-config';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export default {
  config(_input) {
    return {
      name: config.name,
      region: config.region
    };
  },
  stacks(app) {
    app.stack(function Site({ stack, app }) {
      const site = new NextjsSite(stack, 'site', {
        customDomain:
          app.stage === 'prod' && serverRuntimeConfig.domainUrl
            ? {
                domainName: serverRuntimeConfig.domainUrl,
                domainAlias: `www.${serverRuntimeConfig.domainUrl}`
              }
            : undefined,
        bind: [
          createExperienceTable(stack),
          createCertificationsTable(stack),
          createSkillsTable(stack),
          createProjectsTable(stack)
        ]
      });

      stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url
      });
    });
  }
} satisfies SSTConfig;
