describe('Fixture file Test', function () {
  //สร้าง function เพื่อดึง data จากไฟล์ fixture มาใช้งาน
  before(function(){
     //example คือชื่อไฟล์ที่นำมาใช้
     cy.fixture('example').then(function(regdata){
      //กำหนดตัวแปรแทนข้อมูล
        this.regdata=regdata
     })
  })
  // test case
  it('Test Case1', function (){
     // launch URL
     cy.visit("https://defensivehive-bof-stage.igeargeek.dev/auth/login")
     cy.get('.text-sky').should('contain' , 'DEFENSIVE HIVE').wait(2000)
     //ดึง variable มาใช้งานโดยใช้ this.regdata.(ตัวแปร)
    //  cy.LoginSuccess("admin@gmail.com" , "1234").wait(1000)
    // var i = "cy.contains('อีเมลหรือรหัสผ่านไม่ถูกต้อง')"
    //  if(cy.get('.text-left > :nth-child(4)').contains('อีเมลหรือรหัสผ่านไม่ถูกต้อง')){
    //   cy.get("input[placeholder='ระบุอีเมล']").clear()
    //   cy.LoginSuccess("if" , "1234")
    //  } else {
    //   cy.get("input[placeholder='ระบุอีเมล']").clear()
    //   cy.LoginSuccess("else" , "1234")
    //  }
    
    cy.LoginSuccess(this.regdata.email , this.regdata.password).then(($Err) => {
      $Err = "cy.get('.text-left > :nth-child(4)')"
      if($Err = $Err.contains('อีเมลหรือรหัสผ่านไม่ถูกต้อง')){
        cy.get("input[placeholder='ระบุอีเมล']").clear()
        cy.LoginSuccess("if" , "1234")
       } else {
        cy.get("input[placeholder='ระบุอีเมล']").clear()
        cy.LoginSuccess("else" , "1234")
       }

      

      
    })
  });
})


