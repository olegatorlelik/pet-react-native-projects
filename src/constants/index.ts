import {
  API_GATEWAY,
  APP_KEY,
  BRANCH,
  AMPLITUDE_KEY,
  BUNDLE_ID as ENV_BUNDLE_ID,
} from 'react-native-dotenv';

export const APP_KEY_NAME = APP_KEY;

export const APP_BRANCH = BRANCH;

export const API_DOMAIN = API_GATEWAY || 'https://admin-wallpapers.lomray.com';

export const { NODE_ENV } = process.env;

export const IS_TESTS = NODE_ENV === 'test';

export const isProd = BRANCH === 'prod';

export const isStaging = BRANCH === 'staging';

export const PACKAGE_NAME = ENV_BUNDLE_ID;

export const DEFAULT_APP_LANGUAGE = 'en';

export const APP_LANGUAGES = ['en'];

export const AMPLITUDE_TOKEN = AMPLITUDE_KEY;
