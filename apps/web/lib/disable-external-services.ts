/**
 * This file handles graceful disabling of external services
 * when running the app for UI testing only
 *
 * Import this in middleware or layout to prevent API calls to:
 * - Tinybird
 * - Upstash Redis/QStash
 * - Vercel Domains API
 * - Stripe
 * - Resend
 */

// Check if we're in UI testing mode (empty API keys)
const isUITestingMode = !process.env.TINYBIRD_API_KEY?.trim() &&
  !process.env.UPSTASH_REDIS_REST_URL?.trim() &&
  !process.env.UPSTASH_QSTASH_TOKEN?.trim();

export function isExternalServicesDisabled(): boolean {
  return isUITestingMode;
}

// Mock empty responses for external services
export const mockExternalServices = {
  // Prevent Tinybird errors
  tinybird: {
    getAnalytics: async () => ({
      data: [],
      meta: {},
    }),
  },

  // Prevent Redis errors
  redis: {
    get: async () => null,
    set: async () => null,
    del: async () => null,
  },

  // Prevent QStash errors
  qstash: {
    publish: async () => ({
      messageId: "mock-id",
    }),
  },

  // Prevent Stripe errors
  stripe: {
    checkout: {
      sessions: {
        create: async () => ({
          id: "mock-session",
          url: null,
        }),
      },
    },
  },
};

// Log mode on startup
if (typeof window === "undefined") {
  // Server-side only
  if (isUITestingMode) {
    console.log(
      "🎨 Running in UI Testing Mode - External services are disabled"
    );
  }
}

export default {
  isUITestingMode,
  isExternalServicesDisabled,
  mockExternalServices,
};
