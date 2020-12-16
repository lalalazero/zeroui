type classnameArg = undefined | string | { [x: string]: boolean | undefined }

type classnameProp = classnameArg[]

export function classname(...arg: classnameProp): string {
    let result: any[] = []
    for (let i = 0; i < arg.length; i++) {
        const cls = arg[i]
        if (false === !!cls) continue
        if (typeof cls === 'string') {
            result.push(cls)
        } else if (Array.isArray(cls)) {
            result = result.concat(
                cls.filter((item) => typeof item === 'string')
            )
        } else if (typeof cls === 'object') {
            for (const [key, value] of Object.entries(cls)) {
                if (false === !!value) continue
                if (typeof value === 'string') {
                    result.push(value)
                    continue
                }
                if (typeof value === 'boolean' && value) {
                    result.push(key)
                }
            }
        }
    }

    return result
        .reduce((acc, cur) => {
            if (acc.indexOf(cur) < 0) {
                acc.push(cur)
            }
            return acc
        }, [])
        .filter(Boolean)
        .filter((item: string) => item.indexOf('undefined') < 0)
        .join(' ')
}
