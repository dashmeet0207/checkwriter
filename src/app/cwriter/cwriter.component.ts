import { Component } from '@angular/core';

@Component({
  selector: 'app-cwriter',
  templateUrl: './cwriter.component.html',
  styleUrls: ['./cwriter.component.css']
})
export class CwriterComponent{

 


input:number;
result:string;
  arr1 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  arr2 = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  f1(val, suffix) {
    if (val == 0) {
      return ""
    }
    if (val > 19) {
      return  " "+this.arr2[Math.floor(val / 10)] + " "+this.arr1[(val % 10)]+suffix+ " "
    }
    else {
      return " "+this.arr1[val]+" " + suffix +" ";
    }
  }
  
  f2() {
  
  var param=this.input; 
    var flag=0;
    var m;
    var str = param.toString()
    var number = str.split(".")
    var val = parseInt(number[0])

    m = " "+this.f1((val % 100), "")

    if (val > 100 && val % 100) {
      m = ""+"and"+m ;
    }
    m = " "+this.f1((Math.floor(val / 100) % 10), "Hundred") + m;
    m = " "+this.f1((Math.floor(val / 1000) % 100), "Thousand") + m;
    m = " "+this.f1((Math.floor(val / 100000) % 100), "lakh") + m;
    m = " "+this.f1((Math.floor(val / 10000000) % 100), "Crore") + m;
    m =" "+ this.f1((Math.floor(val / 1000000000) % 100), "Billion") + m;
  
    if (number.length > 1) {
      var decimal = "1"
      for (var i = 0; i < number[1].length; i++) {
        decimal += "0";
    
      }

      m = m + "and" + number[1] + "/" + decimal
     flag=1;
      
    }
    if(flag==0)
    {
      m=""+m+"only"+" ";
    }
this.result=m;
console.log(this.result);


  }

}

