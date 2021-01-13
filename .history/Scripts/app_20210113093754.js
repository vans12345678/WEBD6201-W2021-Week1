/* Custom scripts go here*/

//IIFE - Immediately Invoked Function Expression
//ALA: Anonymous Self-Executing function

(function()
{
    //Initialization function
    function Start()
    {
        console.log("App Started...");
    }

    //Event listener
    window.addEventListener("load", Start);

})();

