function classnames(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ') // 把 undefined 过滤掉
}

export default classnames;