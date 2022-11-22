// Write your code here!

const removingMain = document.getElementById('main')
console.log(removingMain)
removingMain.remove()
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Fred is the champion"
document.body.append(newHeader)