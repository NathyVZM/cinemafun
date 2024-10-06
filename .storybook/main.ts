import type { StorybookConfig } from '@storybook/angular'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-actions',
		'@storybook/addon-storysource',
		'storybook-design-token'
	],
	framework: {
		name: '@storybook/angular',
		options: {}
	},
	staticDirs: [
		'../public',
		'../public/icons',
		{ from: '../node_modules/@taiga-ui/icons/src', to: 'assets/taiga-ui/icons' }
	]
}
export default config
