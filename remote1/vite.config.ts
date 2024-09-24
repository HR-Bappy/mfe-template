import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		server: {
			fs: {
				allow: ['.'],
			},
		},
		build: {
			target: 'chrome89',
		},
		plugins: [
			federation({
				filename: 'remoteEntry.js',
				name: 'remote',
				exposes: {
					'./remote-app': './src/App.tsx',
				},
				remotes: {},
				shared: ['react', 'react-dom'],
			}),
			react(),
		],
	};
});
