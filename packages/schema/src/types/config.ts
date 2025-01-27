import { ConfigSchema } from '../../schema/config'
import type { ResolvedConfig } from 'c12'

/** Normalized Nuxt options available as `nuxt.options.*` */
export interface NuxtOptions extends ConfigSchema {
  layers: ResolvedConfig<NuxtOptions>[]
}

type DeepPartial<T> = T extends Record<string, any> ? { [P in keyof T]?: DeepPartial<T[P]> | T[P] } : T

/** User configuration in `nuxt.config` file */
export interface NuxtConfig extends DeepPartial<ConfigSchema> { }


export interface PublicRuntimeConfig extends Record<string, any> { }
export interface PrivateRuntimeConfig extends PublicRuntimeConfig { }

type _RuntimeConfig = PublicRuntimeConfig & Partial<PrivateRuntimeConfig>
export interface RuntimeConfig extends _RuntimeConfig { }
