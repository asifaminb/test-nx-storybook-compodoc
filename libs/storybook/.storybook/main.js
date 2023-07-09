import { configureSort } from 'storybook-multilevel-sort'
import sortingOrder from './sorting-order';
import ButtonComponent from "@storybook/angular/template/stories/button.component";

const config = {
  stories: [
    '../../**/src/lib/**/*.stories.ts',
    '../../**/src/lib/**/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};

//
// configureSort({
//   storyOrder: {
//     order: ['Articles', '*', ['*', ['Default', '*']]],
//   }
// })

configureSort({
  storyOrder: {
    '*': {
      default: null,
      'with search': null
    }
  },
  typeOrder: ['styles', 'story']
})

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
