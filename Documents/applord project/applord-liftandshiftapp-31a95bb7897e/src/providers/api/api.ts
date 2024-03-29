import { Http,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiProvider {


  defaultUrl :any = "http://liftshiftapp.co.za/api/";
  
  
  //api
  apiLoginUrl =this.defaultUrl+"authenticate";
  apimenuUrl = this.defaultUrl+"allmenus";
  apimenuitemsUrl = this.defaultUrl +"allmenus/";
  apiproductsUrl = this.defaultUrl +"products/";
  apiproductUrl  =  this.defaultUrl +"product/";
  apiaccessoriesUrl = this.defaultUrl +"allmenus/Accessories";
  apiownquotesUrl = this.defaultUrl +"ownquotes";
  apiviewquote = this.defaultUrl + "quote/"

         
  apiInstallationUrl  =  this.defaultUrl +"installations/";

  apisendemailUrl = this.defaultUrl  + "sendqoute";


  // apiEuro ="https://api.fixer.io/latest?base=EUR";
  apiEuro ="http://data.fixer.io/api/latest?access_key=b64a16264e5b3b36f3a8434bd1a230ce";



  logindetails:any

  menuData:any

  Euro:any
  token:any

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
     //local storage
    //  this.token=localStorage.getItem("token");
    //  console.log("token",this.token)


    
  }



// login 
  postapiLoginUrl(Login){
    var respond = this.http.post(this.apiLoginUrl,Login).map(res => res.json())
    this.logindetails = respond
  
    return  this.logindetails
  }


  getMenu(token){

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + token)

 var res =  this.http.get(this.apimenuUrl,{headers}).map(res => res.json())
  
  this.menuData = res
  return  res

  }

  getmenuItems(ID){

    const  headers =  new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','bearer ')

    var respond = this.http.get(this.apimenuitemsUrl +ID,{headers}).map(res => res.json())

    return respond

  }

  getproducts(ID){

    const  headers =  new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','bearer ')

    var respond = this.http.get(this.apiproductsUrl +ID,{headers}).map(res => res.json())

    return respond

  }

  getproduct(ID){

    const  headers =  new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','bearer ')

    var respond = this.http.get(this.apiproductUrl  +ID,{headers}).map(res => res.json())

    return respond

  }

  getEuro(){

    var reponse = this.http.get(this.apiEuro).map(res=>res.json())
    this.Euro = reponse
    return this.Euro

  }


  getinstallation(ID){

    const  headers =  new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','bearer ')

    var respond = this.http.get(this.apiInstallationUrl+ID,{headers}).map(res => res.json())

    return respond

  }

  postsendemailquote(QuoteDATA,token){



    const  headers =  new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','bearer '+token)

    console.log("provider token",token)

    var respond = this.http.post(this.apisendemailUrl,QuoteDATA,{headers}).map(res => res.json())

    return respond
    
  }


  getaccessories(){

    const  headers =  new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','bearer')

  

    var respond = this.http.get(this.apiaccessoriesUrl,{headers}).map(res => res.json())

    return respond

  }

  getownQuotes(token){
    const  headers =  new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','bearer ' +token)

    var respond = this.http.get(this.apiownquotesUrl,{headers}).map(res => res.json())
    return respond

  }

  getviewquote(ID,token){

    const  headers =  new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Authorization','bearer ' +token)

    var respond = this.http.get(this.apiviewquote+ID,{headers}).map(res => res.json())
    return respond

  }





}
