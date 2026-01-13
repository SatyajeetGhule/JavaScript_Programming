//Not Allowed

class Demo
{
    constructor()   // Default
    {
        this.No1 = 0;
        this.No2 = 0;


        console.log("Inside the Default Constructor");
    }

    constructor(A, B) // Parameteries Constructor
    {
        this.No1 = A;
        this.No2 = B;


        console.log("Inside the Parameteries Constructor");
    }
}

function main()
{
    let obj1 = new Demo();
    let obj2 = new Demo(10,20);
    

}

main();