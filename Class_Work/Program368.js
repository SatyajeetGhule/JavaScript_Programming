function Maximum(Brr)
{
    let iCnt = 0;
    let Max = Brr[0];
    for(iCnt = 0; iCnt < Brr.length; iCnt++)
    {
        if(Max < Brr[iCnt])
        {
           Max = Brr[iCnt]
        }
    }
    return Max;
}

function main()
{
    let Ret = 0;
    const Arr = [10, 20, 30, 40, 50];

    Ret = Maximum(Arr);
    console.log("Maximum Element is: ",Ret);
}
main();