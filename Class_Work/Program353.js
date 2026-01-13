function SumDigit(no)
{
    let iSum = 0;
    let idigit = 0;
    while(no != 0)
    {
        idigit = no % 10;
        iSum = iSum + idigit;
        no = Math.floor(no / 10);
    }
    return iSum;
}

function main()
{
   let iValue = 721965, iRet = 0;

   iRet = SumDigit(iValue);

   console.log(`Summetion of digits : ${iRet}`);
}

main();