import { FrameworkConfiguration } from 'aurelia-framework';
import { ConfigBuilder } from './config-builder';

export function configure(
  aurelia: FrameworkConfiguration,
  configCallback?: (config: ConfigBuilder) => Promise<any>
) {
  const builder = aurelia.container.get(ConfigBuilder);

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
}

// build-index-remove start
export * from './exports';
// build-index-remove end
