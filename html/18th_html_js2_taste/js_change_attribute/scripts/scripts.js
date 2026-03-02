function bulb(current) {

    var pic;

    if( current == 1 ) {

        pic = "img/light_on.jpg";
    }
    else{

        pic = "img/light_off.jpg";
    }

    document.getElementById("demo").src = pic;
}

//As a beginner, if you understand this, you will feel like "wow myan, what a logic".

//So what happened in above code?

//ans:

//we created a bulb() funciton  having     'current'    parameter.

//if parameter 'current = 1' then
// set to pic = light_on image.
//else,
// set to pic = light_off image.

//for above function, we will get the argument from the bulb button which is already set in index.html file.

//then after getting outside the condition,

//we manipulate the   src    attribute of the <img> element by:
//  document.getElementById("demo").src = pic;
//where,     pic contains image     depending upon 'current' parameter.