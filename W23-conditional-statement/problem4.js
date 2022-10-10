//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username="Diwa7890";
let stored_password="DIWA@7890";

let input_username="Diwa7890";
let input_password="DIWA@7890";


if(stored_username==input_username){
  if(stored_password==input_password){
    console.log("Login successfully")
  }else{
    console.log("Wrong Password")
  }
}else{
  console.log(" Wrong Detail")
}