const loggingConfig = {
  isDev: process.env.NODE_ENV !== "production",
};

export function devLog(...args: unknown[]): void {
  if (loggingConfig.isDev) {
    console.log(args);
  }
}
export function prodLog(...args: unknown[]): void {
  if (!loggingConfig.isDev) {
    //   @ts-expect-error
    console.log(...args);
  }
}
