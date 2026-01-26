
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GJS_DEBUG_TOPICS: string;
	export const LESSOPEN: string;
	export const VSCODE_CWD: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const USER: string;
	export const SNAP_COMMON: string;
	export const VSCODE_NLS_CONFIG: string;
	export const npm_config_user_agent: string;
	export const FONTCONFIG_PATH: string;
	export const GIO_MODULE_DIR: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const XDG_SESSION_TYPE: string;
	export const GEMINI_YOLO_MODE: string;
	export const DEBUG: string;
	export const npm_node_execpath: string;
	export const SNAP_UID: string;
	export const CLUTTER_DISABLE_MIPMAPPED_TEXT: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const SNAP_LIBRARY_PATH: string;
	export const DESKTOP_SESSION: string;
	export const SNAP_USER_DATA: string;
	export const GTK_PATH: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const VSCODE_IPC_HOOK: string;
	export const GTK_IM_MODULE_FILE: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const PAGER: string;
	export const MANAGERPID: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const SYSTEMD_EXEC_PID: string;
	export const IM_CONFIG_CHECK_ENV: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const SNAP_REVISION: string;
	export const GOOGLE_APPLICATION_CREDENTIALS: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const DEBUGINFOD_URLS: string;
	export const IM_CONFIG_PHASE: string;
	export const WAYLAND_DISPLAY: string;
	export const APPLICATION_INSIGHTS_NO_STATSBEAT: string;
	export const LOGNAME: string;
	export const SNAP_CONTEXT: string;
	export const GEMINI_CLI: string;
	export const SURFACE: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_SESSION_CLASS: string;
	export const SNAP_VERSION: string;
	export const XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
	export const USERNAME: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const SNAP_INSTANCE_NAME: string;
	export const FC_FONTATIONS: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const GTK_EXE_PREFIX: string;
	export const INVOCATION_ID: string;
	export const USE_CCPA: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_MENU_PREFIX: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const SNAP_DATA: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const DISPLAY: string;
	export const LOCPATH: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_DATA_HOME: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const npm_lifecycle_script: string;
	export const SNAP_USER_COMMON: string;
	export const SSH_AUTH_SOCK: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const SNAP_ARCH: string;
	export const SNAP_COOKIE: string;
	export const SHELL: string;
	export const GDK_PIXBUF_MODULEDIR: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const GDMSESSION: string;
	export const LESSCLOSE: string;
	export const SNAP_NAME: string;
	export const FONTCONFIG_FILE: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const SNAP_LAUNCHER_ARCH_TRIPLET: string;
	export const GIT_PAGER: string;
	export const QT_IM_MODULE: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const VSCODE_CLI: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const SNAP_REAL_HOME: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const SNAP_EUID: string;
	export const SNAP: string;
	export const CODER_AGENT_WORKSPACE_PATH: string;
	export const npm_command: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const ELECTRON_NO_ATTACH_CONSOLE: string;
	export const VSCODE_PID: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GJS_DEBUG_TOPICS: string;
		LESSOPEN: string;
		VSCODE_CWD: string;
		VSCODE_ESM_ENTRYPOINT: string;
		USER: string;
		SNAP_COMMON: string;
		VSCODE_NLS_CONFIG: string;
		npm_config_user_agent: string;
		FONTCONFIG_PATH: string;
		GIO_MODULE_DIR: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		XDG_SESSION_TYPE: string;
		GEMINI_YOLO_MODE: string;
		DEBUG: string;
		npm_node_execpath: string;
		SNAP_UID: string;
		CLUTTER_DISABLE_MIPMAPPED_TEXT: string;
		SHLVL: string;
		npm_config_noproxy: string;
		HOME: string;
		CHROME_DESKTOP: string;
		SNAP_LIBRARY_PATH: string;
		DESKTOP_SESSION: string;
		SNAP_USER_DATA: string;
		GTK_PATH: string;
		NVM_BIN: string;
		npm_package_json: string;
		NVM_INC: string;
		VSCODE_IPC_HOOK: string;
		GTK_IM_MODULE_FILE: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		PAGER: string;
		MANAGERPID: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		SYSTEMD_EXEC_PID: string;
		IM_CONFIG_CHECK_ENV: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		SNAP_REVISION: string;
		GOOGLE_APPLICATION_CREDENTIALS: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		COLOR: string;
		NVM_DIR: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		DEBUGINFOD_URLS: string;
		IM_CONFIG_PHASE: string;
		WAYLAND_DISPLAY: string;
		APPLICATION_INSIGHTS_NO_STATSBEAT: string;
		LOGNAME: string;
		SNAP_CONTEXT: string;
		GEMINI_CLI: string;
		SURFACE: string;
		JOURNAL_STREAM: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_SESSION_CLASS: string;
		SNAP_VERSION: string;
		XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
		USERNAME: string;
		TERM: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		SNAP_INSTANCE_NAME: string;
		FC_FONTATIONS: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		GTK_EXE_PREFIX: string;
		INVOCATION_ID: string;
		USE_CCPA: string;
		NODE: string;
		npm_package_name: string;
		XDG_MENU_PREFIX: string;
		GNOME_SETUP_DISPLAY: string;
		SNAP_DATA: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		DISPLAY: string;
		LOCPATH: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_DATA_HOME: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		npm_lifecycle_script: string;
		SNAP_USER_COMMON: string;
		SSH_AUTH_SOCK: string;
		GSETTINGS_SCHEMA_DIR: string;
		SNAP_ARCH: string;
		SNAP_COOKIE: string;
		SHELL: string;
		GDK_PIXBUF_MODULEDIR: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		ELECTRON_RUN_AS_NODE: string;
		GDMSESSION: string;
		LESSCLOSE: string;
		SNAP_NAME: string;
		FONTCONFIG_FILE: string;
		GDK_PIXBUF_MODULE_FILE: string;
		GJS_DEBUG_OUTPUT: string;
		SNAP_LAUNCHER_ARCH_TRIPLET: string;
		GIT_PAGER: string;
		QT_IM_MODULE: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		VSCODE_CLI: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		SNAP_REAL_HOME: string;
		VSCODE_CODE_CACHE_PATH: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		SNAP_EUID: string;
		SNAP: string;
		CODER_AGENT_WORKSPACE_PATH: string;
		npm_command: string;
		MEMORY_PRESSURE_WRITE: string;
		ELECTRON_NO_ATTACH_CONSOLE: string;
		VSCODE_PID: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
