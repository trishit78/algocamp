class Product{
    name:string;
    private price:number|undefined;  //vs code is giving error , ts playground
    readonly category:string;
    readonly tags:string[];

    constructor(name:string,category:string,price?: number){
        this.name = name;
        this.category = category;
        this.price = price;  //vs code is giving error , ts playground
        this.tags=["electronics","shirts"];
    
    }
    display():void{
        this.tags[0] = "somethings";  // updating is possible in readonly but re-assigning is not possible
        console.log("Product name is",this.name,"and price is ",this.price);
    }
    setPrice(p:number):void{
        if(p<=0) return;
        this.price = p;
    }
    /** readonly type cannot be updated, even in the class also
    buggyFunction():void{
        this.category = "";
    } 
     */
    
}

const p = new Product("Iphone","Mens", 1000000);
p.setPrice(20);
console.log(p);