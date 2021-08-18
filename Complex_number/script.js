function real1()
    {
        var s = document.getElementById("first1").value;
        let l = s.length - 1;

        let i;
      
        if (s.indexOf('+') != -1) {
            i = s.indexOf('+');
        } else {
            i = s.indexOf('-');
        }
       
        let real1 = s.substr(0, i);
        //let imaginary1 = s.substr(i, l - 1 );
        return real1;
    }
    function img1()
    {
        var s = document.getElementById("first1").value;
        let l = s.length - 1;
        let i;
        if (s.indexOf('+') != -1) {
            i = s.indexOf('+');
        } else {
            i = s.indexOf('-');
        }   
        //let real1 = s.substr(0, i);
        imaginary1 = s.substr(i, l - 1 );
        return imaginary1;
    }
    function real2()
    {
        var s = document.getElementById("second1").value;
        let l = s.length - 1;
        let i;  
        if (s.indexOf('+') != -1) {
            i = s.indexOf('+');
        } else {
            i = s.indexOf('-');
        }   
        let real2 = s.substr(0, i);
        //let imaginary2 = s.substr(i, l - 1 );
        return real2;
    }
    function img2()
    {
        var s = document.getElementById("second1").value;
        let l = s.length - 1;
        let i;
        if (s.indexOf('+') != -1) {
            i = s.indexOf('+');
        } else {
            i = s.indexOf('-');
        }
        //let real2 = s.substr(0, i);
        let imaginary2 = s.substr(i, l - 1 );
        return imaginary2;
    }


    function Complex(real, imaginary) {
    this.real = 0;
    this.imaginary = 0;
    this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
    this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
    }
    Complex.transform = function(num) {
        var complex;
        complex = (num instanceof Complex) ? num : complex;
        complex = (typeof num === 'number') ? new Complex(num, 0) : num;
        return complex;
    };
    function display_complex(re, im) {
        if(im === '0') return '' + re;
        if(re === 0) return '' + im + 'i';
        if(im < 0) return '' + re + im + 'i';
        return '' + re + '+' + im + 'i';
    }
    function complex_num_add(first, second) {
        var num1, num2;
        num1 = Complex.transform(first);
        num2 = Complex.transform(second);
        var real = num1.real + num2.real;
        var imaginary = num1.imaginary + num2.imaginary;
        console.log("Addition");
        return "Addition is : "+display_complex(real, imaginary)+"\n";
    }
    function complex_num_subtract(first, second) {
        var num1, num2;
        num1 = Complex.transform(first);
        num2 = Complex.transform(second);
        var real = num1.real - num2.real;
        var imaginary = num1.imaginary - num2.imaginary;
        console.log("Subtraction");
        return "Subtraction is : "+display_complex(real, imaginary)+"\n";   
      }
    function complex_num_multiply(first, second) {
        var num1, num2;
        num1 = Complex.transform(first);
        num2 = Complex.transform(second);
        var real = (num1.real * num2.real)-(num1.imaginary * num2.imaginary);
        var imaginary = (num1.real * num2.imaginary)+(num1.imaginary * num2.real);
        console.log("Multiplication");
        return "Multiplication is : "+display_complex(real, imaginary)+"\n";   
    }
    function complex_num_divide(first, second) {
        var num1, num2;
        num1 = Complex.transform(first);
        num2 = Complex.transform(second);
        var denom = num2.imaginary * num2.imaginary + num2.real * num2.real;
        var real = (num1.real * num2.real + num1.imaginary * num2.imaginary) /denom;
        var imaginary = (num2.real * num1.imaginary - num1.real * num2.imaginary) /denom; 
        console.log("Division");
        return "Division is : "+display_complex(real, imaginary);   
      }

    function add(){
        var a = new Complex(real1(), img1());
        var b = new Complex(real2(), img2());
        document.getElementById('demo').innerHTML = complex_num_add(a,b);
    }
    function sub(){
        var a = new Complex(real1(), img1());
        var b = new Complex(real2(), img2());
        document.getElementById('demo').innerHTML = complex_num_subtract(a,b);
    }
    function mul(){
        var a = new Complex(real1(), img1());
        var b = new Complex(real2(), img2());
        document.getElementById('demo').innerHTML = complex_num_multiply(a,b);
    }
    function div(){
        var a = new Complex(real1(), img1());
        var b = new Complex(real2(), img2());
        document.getElementById('demo').innerHTML = complex_num_divide(a,b);
    }