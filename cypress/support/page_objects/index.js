import Login from "./loginpage"
import Homepage from "./homepage"
import Customerpage from "./customerpage"
import Cartpage from "./cartpage"
require('cypress-xpath')

const login = new Login()
const homepage = new Homepage()
const customerpage = new Customerpage() 
const cartpage = new Cartpage()

export {login, homepage, customerpage, cartpage} 