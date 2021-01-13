/* Custom scripts go here*/

//IIFE - Immediately Invoked Function Expression
//ALA: Anonymous Self-Executing function

(function()
{
    //Initialization function
    function Start()
    {
        console.log("App Started...");

        for(let index = 0; index < 5; index ++)
        {
            console.log(index);
        }
    }

    //Event listener
    window.addEventListener("load", Start);

})();

