// reverse words in a string
// you have a string make it word by word reverse

// output = "I etah ym yrtnuoc"

const str = "I hate my country"

function reversWords(data) {
    const dataArray = data.split(" ")

    const result = dataArray.map(d => {
        return d.split("").reverse().join("")
    })
    return result.join(" ")
}

console.log(reversWords(str))