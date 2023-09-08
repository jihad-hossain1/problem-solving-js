const button = document.getElementById('button');

//debounce handler

function debunce(fn, delay) {
    let timeId;
    return function () {
        if (timeId) {
            clearTimeout(timeId)
            console.log('already request')
        } else {
            timeId = setTimeout(() => {
                fn();
            }, delay)
        }

    }
}

const debnc = (fn, delay) => {
    let timeID;
    return function (...args) {
        if (timeID) {
            clearTimeout(timeID)
        }
        else {
            timeID = setTimeout(() => {
                fn(...args)
            }, delay)
        }
    }
}

button.addEventListener('click', debnc((e) => {
    console.log('click me')
}, 2000))
// button.addEventListener('click', debunce(function () {
//     console.log('clicked')
// }, 200))

