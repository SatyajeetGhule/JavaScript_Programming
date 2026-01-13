function CountDigit(no)
{
    let iCount = 0;
    let iDigit = 0;
    while(no != 0)
    {
        iDigit = no % 10;
        iCount++;
        no = no / 10;  //Issue
    }
    return iCount;
}

function main()
{
   let iValue = 721, iRet = 0;

   iRet = CountDigit(iValue);

   console.log(`${iValue} Contains ${iRet} digits`);
}

main();