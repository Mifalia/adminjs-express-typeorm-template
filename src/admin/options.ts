import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';
import { entities } from '../db/entities/index.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [...entities],
  databases: [],

  version: {
    admin: true,
    app: '0.0.1',
  },

  branding: {
    // company name, logo, theme, etc ...
    withMadeWithLove: false,
  },
  dashboard: {
    // custom dashboard
  },

  pages: {
    // custom pages (dashboard and pages need to be registered into component-loader file)
  },
};

export default options;
