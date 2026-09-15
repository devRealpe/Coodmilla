import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Cliente público (anon). En Node < 22 hace falta `ws` para que
 * supabase-js no falle al inicializar Realtime.
 */
export function createPublicClient() {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  const options: Parameters<typeof createClient>[2] = {
    auth: { persistSession: false, autoRefreshToken: false },
  };

  // Solo en runtime Node (Server Components / Route Handlers)
  if (typeof window === "undefined") {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const ws = require("ws");
      options.realtime = { transport: ws };
    } catch {
      // Sin ws: las queries REST siguen funcionando en muchos entornos
    }
  }

  client = createClient(url, key, options);
  return client;
}
