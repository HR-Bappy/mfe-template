// utils/loadRemote.ts

import { checkServerStatus } from "./functions";

// Helper to dynamically load a remote entry
export const loadRemote = async (remoteUrl: string, scope: any, module: string) => {
    // Check if the server is up first
    const isUp = await checkServerStatus(remoteUrl);
    if (!isUp) {
      throw new Error(`Remote server is down: ${remoteUrl}`);
    }
  
    // Load remote module entry
    await __webpack_init_sharing__("default");
    const container:any = window[scope];
    if (!container) {
      throw new Error(`Remote container ${scope} is not loaded`);
    }
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
  