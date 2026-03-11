// PIE: Root route re-export for route consistency.
// WHY: Keeps a single homepage implementation while preserving current app structure.
// OPTIMIZES: Maintenance safety and avoids content drift between duplicate route files.
export { default } from './(site)/page'
