import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
    return (

    <div>

  <div className="article">
  <h1>  Inheritence and Super Keyword </h1>
  The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
  <br></br>
  <h2>Example:</h2>
  <div className="super">
  
  <pre>
  class Car &#123;<br></br>
  constructor(brand) &#123;<br></br>
    this.carname = brand;<br></br>
    &#125;<br></br>
  present() &#123;<br></br>
    return 'I have a ' + this.carname;<br></br>
    &#125;<br></br>
    &#125;<br></br>

class Model extends Car &#123;<br></br>
  constructor(brand, mod) &#123;<br></br>
    super(brand);<br></br>
    this.model = mod;<br></br>
    &#125;<br></br>
  show() &#123;<br></br>
    return this.present() + ', it is a ' + this.model;<br></br>
    &#125;<br></br>
    &#125;<br></br>

mycar = new Model("Ford", "Mustang"); <br></br>
document.getElementById("demo").innerHTML = mycar.show();<br></br>

</pre>

</div>
The super() method refers to the parent class.<br></br>
<br></br>
By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.<br></br>
<br></br>

Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.<br></br>
<br></br>
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;
