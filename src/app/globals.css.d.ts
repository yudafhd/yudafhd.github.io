// Global CSS declarations for side-effect imports
declare module '*.css' {
    const content: Record<string, never>;
    export default content;
}