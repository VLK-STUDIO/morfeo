import { UnpluginContextMeta } from 'unplugin';
import { getMorfeoUnpluginOptions } from '../src/plugin';
import {
  VIRTUAL_MODULES_FRAMEWORKS,
  VIRTUAL_MORFEO_CSS,
  writer,
} from '../src/utils';

const DEFAULT_META = {
  framework: 'webpack',
} as any as UnpluginContextMeta;

const pluginOptions = getMorfeoUnpluginOptions(undefined, DEFAULT_META);

const fsWriteMock = jest.fn();
const writerSpy = jest.spyOn(writer, 'add');
const transformSyncMock = jest.fn().mockImplementation(() => ({
  code: '',
  metadata: {
    morfeo: 'some css',
  },
}));

jest.mock('@babel/core', () => ({
  transformSync: (...args: any[]) => transformSyncMock(...args),
}));

jest.mock('node:fs', () => ({
  ...jest.requireActual('node:fs'),
  writeFileSync: (...args: any[]) => fsWriteMock(...args),
}));

describe('morfeo unplugin config', () => {
  beforeEach(() => {
    fsWriteMock.mockClear();
    transformSyncMock.mockClear();
  });

  describe('when the code is not using morfeo', () => {
    it('should not do any changes in case @morfeo/css is not imported', () => {
      const testCode = `const someVar = 'some string'`;
      const result = pluginOptions.transform(testCode, 'fileName.ts');

      expect(result).not.toBeDefined();
    });

    it('should not do any changes in case "createUseStyle" is used but not imported', () => {
      const testCode = `
        import something from "somewhere";
        const useStyles = createUseStyle({});
      `;

      const result = pluginOptions.transform(testCode, 'fileName.ts');

      expect(result).not.toBeDefined();
    });
  });

  describe('when the createUseStyle function is imported and the build time parser is used', () => {
    it('should write the css module and include it', () => {
      const testCode = `import { createUseStyle } from "@morfeo/css";
        const useStyles = createUseStyle({
          bg: 'primary'
        });
      `;

      pluginOptions.transform(testCode, 'fileName.ts');

      expect(writerSpy).toHaveBeenCalledWith(
        'some css',
        DEFAULT_META.framework,
      );
    });
  });

  describe('when some of the used modules throws an error', () => {
    it('should not to any change', () => {
      const testCode = `
        import { createUseStyle } from "@morfeo/css";
        const useStyles = createUseStyle({
          bg: 'primary'
        });
        export { useStyles };
      `;

      const mockError = new Error('some exception');

      fsWriteMock.mockImplementation(() => {
        throw mockError;
      });

      const result = pluginOptions.transform(testCode, 'fileName.ts');

      expect(result).not.toBeDefined();
    });
  });

  describe('when custom options are passed', () => {
    it('should call the babel plugin with the custom configuration', () => {
      const customPluginOptions = getMorfeoUnpluginOptions(
        {
          babel: {
            plugins: ['another plugin'],
          },
        },
        DEFAULT_META,
      );

      const testCode = `import { createUseStyle } from "@morfeo/css";
        const useStyles = createUseStyle({
          bg: 'primary'
        });
      `;

      customPluginOptions.transform(testCode, 'fileName.ts');

      expect(transformSyncMock).toHaveBeenCalledWith(
        testCode,
        expect.objectContaining({
          plugins: expect.arrayContaining(['another plugin']),
        }),
      );
    });
  });

  describe('when the framework supports virtual modules', () => {
    it.each(VIRTUAL_MODULES_FRAMEWORKS)(
      'should not write in the filesystem but instead importing a virtual module with %s',
      framework => {
        const contextMeta = { ...DEFAULT_META, framework };
        const customPluginOptions = getMorfeoUnpluginOptions(
          {},
          contextMeta as any,
        );

        const testCode = `import { createUseStyle } from "@morfeo/css";
          const useStyles = createUseStyle({
            bg: 'primary'
          });
        `;

        const result = customPluginOptions.transform(testCode, 'fileName.ts');

        expect(typeof result === 'object' && result?.code).toContain(
          VIRTUAL_MORFEO_CSS,
        );
        expect(fsWriteMock).not.toHaveBeenCalled();
        expect(customPluginOptions.load(VIRTUAL_MORFEO_CSS)).toBe('some css');
      },
    );
  });
});
