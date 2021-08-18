function queenAttack(qR, qC, oR, oC)
{
    if (qR == oR)
        return true;
 
    if (qC == oC)
        return true;
 
    if (Math.abs(qR - oR) == Math.abs(qC - oC))
        return true;

    return false;
}
 
    var qR = 1, qC = 1;
    var oR = 3, oC = 2;
     
    console.log(queenAttack(qR, qC, oR, oC));