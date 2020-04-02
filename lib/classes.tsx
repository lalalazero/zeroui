interface Options {
    className: string | undefined
}
function scopedClassMaker(prefix: string, ) {
    return function x(name?:string, options?: Options) {
        let result = [prefix, name].filter(Boolean).join('-')
        if(options && options.className) {
            return [result, options.className].filter(Boolean).join(' ')
        }

        return result
    }
}

export { scopedClassMaker }