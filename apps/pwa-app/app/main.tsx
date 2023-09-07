import { start } from '@salesforce/pwa-kit-react-sdk/ssr/browser/main';

const main = () => Promise.all([start()]);

// const main = () => Promise.all([start(), registerServiceWorker('/worker.js')]);

main();
