const StringFormatter = function () {
    const capitalizeFirst = function (name) {
        const first = name.charAt(0).toUpperCase()
        const rest = name.substring(1).toLowerCase()

        return first + rest
    }

    const skewerCase = word => {
        const str = word.replace(/ /g, "-");
        return str
    }

    return {
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box
