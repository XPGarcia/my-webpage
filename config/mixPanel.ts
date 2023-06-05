import { init } from 'mixpanel';
import { env } from './env';

const mixpanel = init(env.mixPanelToken);

export default mixpanel;
