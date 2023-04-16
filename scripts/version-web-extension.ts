import * as fs from 'fs';
import * as path from 'path';

const args = process.argv.slice(2);
const [VERSION_TYPE] = args;

const WEB_EXTENSION_PATH = path.join(__dirname, '../web-extension');

const WEB_EXTENSION_PACKAGE_JSON_PATH = path.join(
  WEB_EXTENSION_PATH,
  'package.json',
);
const WEB_EXTENSION_MANIFEST_PATH = path.join(
  WEB_EXTENSION_PATH,
  'manifest.json',
);

const webExtensionPackageJson = JSON.parse(
  fs.readFileSync(WEB_EXTENSION_PACKAGE_JSON_PATH, { encoding: 'utf8' }),
);

const webExtensionManifest = JSON.parse(
  fs.readFileSync(WEB_EXTENSION_MANIFEST_PATH, { encoding: 'utf8' }),
);

const currentVersion = webExtensionManifest.version as string;

let [major = 0, minor = 0, patch = 0] = currentVersion
  .split('.')
  .map((number: string) => {
    const parsed = Number.parseInt(number);
    return Number.isNaN(parsed) ? 0 : parsed;
  });

if (VERSION_TYPE === 'major') {
  major += 1;
  minor = 0;
  patch = 0;
} else if (VERSION_TYPE === 'minor') {
  minor += 1;
  patch = 0;
} else {
  patch += 1;
}

const newVersion = [major, minor, patch].join('.');

webExtensionPackageJson.version = newVersion;
webExtensionManifest.version = newVersion;

fs.writeFileSync(
  WEB_EXTENSION_PACKAGE_JSON_PATH,
  JSON.stringify(webExtensionPackageJson, undefined, 2) + '\n',
);

fs.writeFileSync(
  WEB_EXTENSION_MANIFEST_PATH,
  JSON.stringify(webExtensionManifest, undefined, 2) + '\n',
);
