import type { Visitor } from '@babel/traverse';
import { createCssVisitor } from './visitors/css';
import { createComponentVisitor } from './visitors/component';
import { createGlobalVisitor } from './visitors/global';
import { CSSCollector, getUsedMorfeoMethod } from './utils';

const VISITORS_CREATOR_MAP = {
  css: createCssVisitor,
  global: createGlobalVisitor,
  component: createComponentVisitor,
};

export default function getVisitor(): Visitor {
  return {
    ImportDeclaration(path) {
      if (path.node.source.value !== '@morfeo/css') {
        return path.skip();
      }

      path.remove();
    },
    CallExpression: {
      enter(callExpressionPath, state: any) {
        if (!state.file.metadata.morfeo) {
          state.file.metadata.morfeo = '';
        }

        const usedMethod = getUsedMorfeoMethod(callExpressionPath);

        if (!usedMethod) {
          return;
        }

        const visitor = VISITORS_CREATOR_MAP[usedMethod];

        if (visitor) {
          visitor(callExpressionPath);
          state.file.metadata.morfeo = CSSCollector.get();
        }
      },
    },
  };
}
