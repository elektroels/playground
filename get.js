function get(_object, ...args) {
    const first = args.shift()
    if (args.length === 0) return _object[first]
    return get(_object[first], ...args)
}