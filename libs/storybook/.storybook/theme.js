import { create } from '@storybook/theming';
import logo from '../src/lib/assets/images/logo.svg';

export default create({
  base: 'light',
  colorSecondary: '#000',
  brandTitle: 'SONIC',
  brandImage: logo,
  brandTarget: '_self',
});
