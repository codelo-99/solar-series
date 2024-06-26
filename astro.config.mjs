import {defineConfig} from 'astro/config';
import node from '@astrojs/node'
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: 'https://main--solar-series.netlify.app',
    integrations: [preact()],
    output: 'hybrid',
    adapter: node({
        mode: 'standalone'
    })
});
