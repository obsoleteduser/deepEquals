const deepEquals = (a, b) => {

    if (typeof a !== typeof b) {
        return false;
    }


    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }
    if (a === null && b === null) {
        return true;
    }
    if (a === undefined && b === undefined) {
        return true;
    }


    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!deepEquals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }


    if (typeof a === 'object' && typeof b === 'object') {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        for (const key of aKeys) {
            if (!bKeys.includes(key) || !deepEquals(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }


    return a === b;
}


console.log(deepEquals({}, {}))