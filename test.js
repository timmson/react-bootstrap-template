let scores = []
scores.push(1,2)
scores.pop()
scores.push(3,4)
scores.pop()
score = scores.reduce((a,b) => a+b)
console.log(score)
