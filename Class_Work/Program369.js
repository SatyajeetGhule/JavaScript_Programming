function Minimum(Brr)
{
    let iCnt = 0;
    let Min = Brr[0];
    for(iCnt = 0; iCnt < Brr.length; iCnt++)
    {
        if(Min > Brr[iCnt])
        {
           Min = Brr[iCnt]
        }
    }
    return Min;
}

function main()
{
    let Ret = 0;
    const Arr = [10, 20, 30, 40, 50];

    Ret = Minimum(Arr);
    console.log("Minimum Element is: ",Ret);
}
main();