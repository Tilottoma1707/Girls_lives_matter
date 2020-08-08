class Form{
constructor(){

this.heading = createElement("h1","Girl Child's Lives Matter");

this.question1 = createElement("h2","What Is Your Beautiful Name?")
this.answer1 = createInput();
this.button1 = createButton("NEXT");
this.question1.position(200,130);
this.answer1.position(600,220);
this.button1.position(600,250);

}
display(){
this.heading.position(290,20);

this.question1.position(200,130);
this.answer1.position(600,220);
this.button1.position(600,250);

this.button1.mousePressed(()=>{
this.question1.hide();
this.answer1.hide();
this.button1.hide();

this.question2 = createElement("h2","What Is Your Medium Of Instruction In School")
this.radio1 = createRadio();
this.radio1.option("ENGLISH");
this.radio1.option("HINDI");
this.radio1.option("BENGALI");
this.radio1.option("TAMIL");
this.radio1.option("OTHERS");
this.button2 = createButton("NEXT");
this.question2.position(300,130);
this.radio1.position(300,200);
this.button2.position(600,250);


this.button2.mousePressed(()=>{
    this.question2.hide();
    this.radio1.hide();
    this.button2.hide();


this.question3 =  createElement("h2","You Are Friends With-")
this.radio2 = createRadio();
this.radio2.option("Only Girls");
this.radio2.option("Only Boys");
this.radio2.option("Both");
this.button3 = createButton("NEXT");
this.question3.position(300,130);
this.radio2.position(450,200);
this.button3.position(600,250);

this.button3.mousePressed(()=>{
this.question3.hide();
this.radio2.hide();
this.button3.hide();

this.question4 = createElement("h2","According To You Girls Are-  ")
this.radio3 = createRadio();
this.radio3.option("Equal To Boys");
this.radio3.option("Superior To Boys");
this.radio3.option("Inferrior To Boys");
this.button4 = createButton("NEXT");
this.question4.position(450,130);
this.radio3.position(450,230);
this.button4.position(600,250)

this.button4.mousePressed(()=>{
this.question4.hide();
this.radio3.hide();
this.button4.hide();

this.question5 = createElement("h2","Hours You Play Outdoor");
this.radio4 = createRadio();
this.radio4.option("1 hour");
this.radio4.option("2 hours");
this.button5 = createButton("NEXT")
this.radio4.option("More Than 2 Hours");
this.radio4.position(550,200);
this.question5.position(200,130)
this.button5.position(600,250);

this.button5.mousePressed(()=>{
this.question5.hide();
this.radio4.hide();
this.button5.hide();

this.question6 = createElement("h2","Number Of Siblings You Have")
this.radio5 = createRadio();
this.radio5.option("Boys");
this.answer2 = createInput();
this.radio6 = createRadio();
this.radio6.option("Girls")
this.answer3 = createInput();
this.radio7 = createRadio();
this.radio7.option("Single Child")
this.button6 = createButton("NEXT");
this.question6.position(300,130);
this.radio5.position(340,200);
this.answer2.position(400,200);
this.radio6.position(340,250);
this.answer3.position(400,250);
this.radio7.position(340,300);
this.button6.position(600,420)

this.button6.mousePressed(()=>{
this.question6.hide();
this.radio5.hide()
this.radio6.hide();
this.answer2.hide();
this.answer3.hide();
this.radio7.hide();
this.button6.hide();

this.question7 =  createElement("h2","How Often Do You Do Your Household Work");
this.radio8 = createRadio();
this.radio8.option("Very Often")
this.radio8.option("Never");
this.button7 = createButton("NEXT")
this.question7.position(300,130);
this.radio8.position(500,200);
this.button7.position(600,250);

this.button7.mousePressed(()=>{
this.question7.hide();
this.button7.hide();
this.radio8.hide();

this.question8 = createElement("h2","Do You Have An Access To The Internet")
this.radio9 = createRadio();
this.radio9.option("Yes");
this.radio9.option("No");
this.button8 = createButton("NEXT")
this.question8.position(300,130);
this.radio9.position(500,200);
this.button8.position(600,250);

this.button8.mousePressed(()=>{
this.radio9.hide();
this.button8.hide();
this.question8.hide();

this.question9 = createElement("h2","You Go For Shopping Groceries Alone?")
this.radio10 = createRadio();
this.radio10.option("Allowed");
this.radio10.option("Not Allowed");
this.button9 = createButton("NEXT");
this.question9.position(300,130);
this.radio10.position(500,200);
this.button9.position(600,250);

this.button9.mousePressed(()=>{
this.question9.hide();
this.radio10.hide();
this.button9.hide();


this.question10 = createElement("h2","If You Were Given 20,000rupees What Would You Do?")
this.radio11 = createRadio();
this.radio11.option("Spend For Fun");
this.radio11.option("Save For Future")
this.button10 = createButton("NEXT")
this.question10.position(300,130);
this.radio11.position(450,200);
this.button10.position(600,250)

this.button10.mousePressed(()=>{
this.question10.hide();
this.button10.hide();
this.radio11.hide();

this.question11 = createElement("h2","Do You Think Your Parents Would Try To Get You An Expensive Gift If You Really Wished For It?")
this.radio12 = createRadio();
this.radio12.option("Yes")
this.radio12.option("No");
this.radio12.option("Maybe")
this.button11 = createButton("NEXT");
this.question11.position(200,130);
this.radio12.position(400,250);
this.button11.position(600,300)


this.button11.mousePressed(()=>{
this.question11.hide();
this.button11.hide();
this.radio12.hide();

this.question12 = createElement("h2","What Is Your Favourite Food?")
this.radio13 = createRadio();
this.radio13.option("Junk Food");
this.radio13.option("Fruits");
this.radio13.option("Vegetables");
this.button12 = createButton("NEXT")
this.question12.position(200,130);
this.radio13.position(400,200);
this.button12.position(500,250);

this.button12.mousePressed(()=>{
    this.question12.hide();
    this.button12.hide();
    this.radio13.hide();

this.question13 = createElement("h2","You Eat Your Favourite Food- ")
this.radio14 = createRadio();
this.radio14.option("Always");
this.radio14.option("Vey Often");
this.radio14.option("Never");
this.button13 = createButton("NEXT")
this.question13.position(200,130);
this.radio14.position(400,200);
this.button13.position(500,250);

this.button13.mousePressed(()=>{
    this.question13.hide();
    this.button13.hide();
    this.radio14.hide();

this.question14 = createElement("h2","You Fall Sick- ")
this.radio15 = createRadio();
this.radio15.option("Very Often");
this.radio15.option("Rarely")
this.button14 = createButton("NEXT");
this.question14.position(200,130);
this.radio15.position(450,200);
this.button14.position(500,250);

this.button14.mousePressed(()=>{
    this.question14.hide();
    this.button14.hide();
    this.radio15.hide();

    this.question15 = createElement("h2","If you were alone in an island you would")
    this.radio16 = createRadio();
    this.radio16.option("Look for help");
    this.radio16.option("manage everything alone")
    this.button15 = createButton("NEXT");
    this.question15.position(200,130);
    this.radio16.position(450,200);
    this.button15.position(500,250);
    
    this.button15.mousePressed(()=>{
        this.question15.hide();
        this.button15.hide();
        this.radio16.hide();

        this.end1 = createElement("h2","THANK YOU FOR YOUR PRECIOUS TIME"); 
        this.end1.position(390,200);
    })

})

})
})
})


})

})





})



})



})


})

})


})


})


})

}

}