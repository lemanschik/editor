/**
 * A Editor Context that is use able via import('./modules/context.js')
 * You should not transpil that dynamic import as this enables dynamic
 * references cross context via './modules/context.js?id=ContextID'
 * note: import puts a reference into the Module Cache indexed by Url
 */
export const context = ``;

// tip: create a handle (reference to the context) register event listners on it.
// export them as reuseable module use this most best as value for a textbox maybe? :)
