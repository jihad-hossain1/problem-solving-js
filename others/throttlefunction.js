const throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime()
        if (now - last < delay) {
            return console.log('wait 2 sec')
        }
        last = now;
        return fn(...args)
    }
}

document.getElementById('button').addEventListener('click', throttle((e) => {
    console.log('you click me')
}, 2000))