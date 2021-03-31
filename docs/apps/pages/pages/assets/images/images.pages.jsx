import React from 'react';
import 'protons';
import MDX from './images.mdx';

const template = require('../../docs.twig');

export default {
  path: '/assets/images',
};

export const getProps = async (ctx, renderer, renderToStaticMarkup) => {
  const props = {};
  props.page = await renderer.renderData(ctx.path, template.default, {
    content: renderToStaticMarkup(<MDX />),
  });
  return props;
};
