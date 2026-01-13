function DisplayPerfect(no)
{
    let iCnt = 0;
    let iSum = 0;
    for(iCnt = 1; iCnt <= (no/2); iCnt++)
    {
        if((no % iCnt) == 0)
        {
            iSum += iCnt;
        }
    }
    if(iSum == no)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let iValue = 20;
    let bRet = false;

    bRet = DisplayPerfect(iValue);
    if(bRet == true)
    {
        console.log(` ${iValue} is perfect Number`);
    }
    else
    {
        console.log(`${iValue} is Not perfect number`);
    }
}

main();