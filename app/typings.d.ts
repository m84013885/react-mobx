declare module "*.css"
declare module "*.png"
declare module "*.jpg"
declare module "*.svga"

declare const serverData: any
declare const __DEV__: boolean

interface Window {
    setLoading: any,
    setToast: any,
    setMask: any,
    setMsg: any,
    timer: any,
    scrollDOM: any
}

declare module 'md5' {
    const content: any
    export = content
}
declare module '@terwanerik/scrolltrigger' {
    const content: any
    export = content
}
declare module 'svga.lite' {
    const Downloader: any
    const Parser: any
    const Player: any
    export { Downloader, Parser, Player }
}
declare module 'mobx' {
    const content: any
    export = content
}
declare module 'mobx-react-lite' {
    const useLocalStore: any
    const useObserver: any
    export { useLocalStore, useObserver }
}
