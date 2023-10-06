export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string
      STRIPE_PUBLIC_KEY: string
      STRIPE_SECRET_KEY: string
    }
  }
}
