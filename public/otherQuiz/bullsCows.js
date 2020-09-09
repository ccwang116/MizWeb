var index;
var Aanswer = [];
var Bquantity = 0;
var getHint = function(secret, guess) {
    //事前作業
    let guessArray = guess.toString().split('')
    let secretArray = secret.toString().split('')
    ///A的作法
    guessArray.forEach((a,i) => {
        if(guessArray[i] === secretArray[i]){
            Aanswer.push(i)
            
        }
    })

    ///B的作法
    guessArray.forEach((a) => {
        index = secretArray.findIndex((b) => b === a )
        if(index !== -1){
            secretArray.splice(index,1)
            Bquantity += 1
        }
    })
    let Banswer = Bquantity - Aanswer.length
    let newAns = [...new Set(Aanswer)]
    console.log(newAns)
    console.log(newAns.length,"A",Banswer,"B")
    return newAns.length+"A"+Banswer+"B"
};
getHint(1123,0111)