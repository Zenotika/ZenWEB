// Entry point for analytics infrastructure
// Next steps: Export event/page tracking utilities here.

export function trackPageView(url: string) {
  // TODO: Send page view event to analytics endpoint
  // Example: fetch('/api/analytics', { method: 'POST', body: JSON.stringify({ url }) })
}

export function trackEvent(event: string, data?: Record<string, any>) {
  // TODO: Send custom event to analytics endpoint
}

// Next: Add hooks for auto-tracking in layouts/pages

export {};
