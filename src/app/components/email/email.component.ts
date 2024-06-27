import { Component } from '@angular/core';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  data={
    to:"",
    subject:"",
    message:"",
  }
  constructor(private email:EmailService){}
 
  doSubmitForm(){
    console.log("try to subit form")
    console.log(this.data)

    if(this.data.to == null || this.data.to == null || this.data.subject == null ){
      console.log("form can not be submitted");
      return
    }

    this.email.sendEmail(this.data).subscribe(
      response =>{
        console.log(response);
        
      },
      error =>{
        console.log(error);
        
      }
    )
   
    
    
    
  }

}
