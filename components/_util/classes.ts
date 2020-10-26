import camel2dot from 'dot-snake-camel-case-convertor'

interface Obj {
    useKey: boolean
}

interface classSwitchs {
    [k: string]: Obj | any
}

function makeClassSwitchs(
    obj: { [k: string]: any },
    otherOptions?: classSwitchs
) {
    const switchObj: classSwitchs = otherOptions || {}
    const keyList = Object.keys(obj)
    for (let i = 0; i < keyList.length; i++) {
        const key = keyList[i]
        if (key.indexOf('undefined') >= 0) continue
        if (obj[key]) {
            // eslint-disable-next-line
            if (obj[key].hasOwnProperty('useKey')) {
                switchObj[key] = obj[key].useKey
                continue
            }
            switchObj[obj[key]] = true
        }
    }
    return switchObj
}

function scopedClassMaker(prefix: string) {
    return function (cls: string | classSwitchs, userClsName?: string) {
        const classArray = []
        if (typeof cls === 'string' && cls) {
            classArray.push(cls)
        } else if (cls === '') {
            classArray.push('')
        } else {
            classArray.push('')
            let clsArr = Object.entries(cls)
                .filter((kv) => kv[1])
                .map((kv) => kv[0])
            clsArr = clsArr.map((cls) => camel2dot(cls))
            classArray.push(...clsArr)
        }
        const prefixedClassArray = classArray.map((cls) =>
            cls ? prefix + '-' + cls : prefix
        )
        const allCls = [...prefixedClassArray, userClsName]
        return allCls.filter(Boolean).join(' ')
    }
}

function classnames(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ') // 把 undefined 过滤掉
}

export default classnames
export { scopedClassMaker, makeClassSwitchs }