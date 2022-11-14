function triangle(val1, type1, val2, type2){
    console.log("Function witch solve right traingle and show result in console \
                Arguments :\
                     val1, val2 - number,\
                     type1, type2 - string,\
                     The function is given any possible values as an input in order to solve the triangle (2 legs, leg and hypotenuse, leg and adjacent angle, leg and opposite angle and hypotenuse and angle). When invalid characters are entered, a corresponding message is displayed to the user.\
                       Return - string (Success or Failed) \
                       ");
    var pi = Math.PI;

    // 2 katets
    if (type1 ==='leg' && type2 ==='leg'){
        a = val1;
        b = val2;

        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        alpha = Math.atan(a/b) / (pi/180);
        beta = Math.atan(b/a) / (pi/180);
    }
    // leg and hypotenuse
    else if(type1==='hypotenuse' & type2==='leg' || type2==='hypotenuse' & type1==='leg'){
        if ((type1==='leg') & (val1 >=val2 ||  val1 <=0) || type1=='hypotenuse' & (val1 <=val2 || val2 <=0) ){ 
            console.log('FAILED');
            return "FAILED";
        }
        if(type1==='hypotenuse'){
            c = val1;
            b = val2;
        }
        else{
            c = val2;
            b = val1;
        }

        a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
        alpha = Math.atan(a/b) / (pi/180);
        beta = Math.atan(b/a) / (pi/180);
    }

    // leg and adjacent angle 
    else if (type1==='leg' & type2==='adjacent angle' || type2==='leg' & type1==='adjacent angle'){
        if (type2==='adjacent angle' & (val2 >=90 || val2 <=0 ) || type1==='adjacent angle' & (val1 >=90  || val1 <=0)){
            console.log('FAILED');
            return "FAILED";
        }
        if (type1==='leg'){
            b = val1;
            // js use radians!!!
            // cos(45) = 0.70 cos(45') = 0.5
            alpha = val2;
            // c = b/(Math.cos(alpha));
            alpha = val2;
            console.log('111');
        }
        else{
            b = val2;
            alpha = val1;
            // c = b/(Math.cos(alpha));
            alpha = val1;
            console.log('22');
        }

        c = b/(Math.cos(alpha*(pi/180)));
        // not tanh - why?
        a = b*Math.tan(alpha*(pi/180));
        beta = 90 - alpha;
    }

    // leg and opposite angle
    else if (type1==='leg' & type2==='opposite angle' || type2==='leg' & type1==='opposite angle'){
        if (type2==='opposite angle' & (val2 >=90 || val2 <=0 ) || type1==='opposite angle' & (val1 >=90  || val1 <=0)){
            console.log('FAILED');
            return "FAILED";
        }
        else if(type1==='leg'){
            a = val1;
            // alpha = val2 * (pi/180);
            // c = a/Math.sin(alpha);
            alpha = val2;
        }
        else{
            a = val2;
            // alpha = val1 * (pi/180);
            alpha = val1;
        }

        c = a/Math.sin(alpha*(pi/180));
        beta = 90 - alpha;
        b = a * Math.tan(beta * (pi/180));
    }

    // hypotenuse and any angle
    else if(type1==='hypotenuse' & type2==='angle' || type2==='hypotenuse' & type1==='angle'){
        if (type2==='angle' & (val2 >=90 || val2 <=0 || val1<=0) || type1==='angle' & (val1 >=90  || val1 <=0 || val2<=0)){
            console.log('FAILED');
            return "FAILED";
        }
        if (type1==='hypotenuse'){
            c = val1;
            alpha = val2;
        }
        else{
            c = val2;
            alpha = val1;
        }

        beta = 90 - alpha;
        b = c * Math.sin(beta*(pi/180));
        a = c * Math.sin(alpha*(pi/180));
    }

    else{
        console.log('Read doc!');
        return 'Failed';
    }

    // additional condition
    // var arr = [a, b, c, alpha, beta];
    // if (arr.some(isNaN) || arr.some(val => val<=0)){
    //     console.log('FAIL');
    // }

    console.log('a -', a);
    console.log('b -', b);
    console.log('c -', c);
    console.log('alpha -', alpha);
    console.log('beta -', beta);
    return 'Success';
}

triangle(3, 'leg', 4, 'leg');

// console.log('---')
// triangle(5, 'hypotenuse', 3, 'leg');
// console.log('---')
// triangle(60, 'adjacent angle', 5, 'leg');
// console.log('---')
// triangle(60, 'opposite angle', 5, 'leg');
// console.log('---')
// triangle(60, 'angle', 5, '');

// triangle(5, 'hypotenuse', 50, 'angle');
