function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(char) {
    return function(adj = 'special') {
        return `You are ${char}${adj}${char}!`
    }
}