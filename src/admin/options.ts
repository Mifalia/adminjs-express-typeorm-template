import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';
import { entities } from '../db/entities/index.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [...entities],
  databases: [],
};

export default options;
