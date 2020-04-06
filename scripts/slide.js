var f = 1;
var dragos_gay = 0;

function inapoi()
{
    document.getElementById("muian2").hidden = true;
    $('#muian').animate({
        width: "-=240"
    }, 100);
    scrollBy(0,-100000);
    setTimeout(()=>{document.getElementById("button_back").hidden = false;},1000);
    f = 1;
    dragos_gay = 0;
}

function onload()
{
   document.body.addEventListener("click", function(){ 
        if(dragos_gay)
        {
            document.getElementById("muian2").hidden = true;
            document.getElementById("button_back").hidden = false;
            $('#muian').animate({
                width: "-=240"
            }, 100);
            f = 1;
            dragos_gay = 0;
        }
    });
}

function susta()
{
    var x = document.getElementById("muian")

    if(f)
    {
        $('#muian').animate({
            width: "+=240"
        }, 100);
        setTimeout(()=>{document.getElementById("muian2").hidden = false;},101);
        document.getElementById("button_back").hidden = true;
        f = 0;
        setTimeout(() => {
            dragos_gay = 1;
        }, 110);
    }
}
