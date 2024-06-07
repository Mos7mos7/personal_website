
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Hello World ! this is mostafa welcoming you ");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about me", "Who am i and what do i do.");
  createCode("help", "See all commands.");
  createCode("links", "All my profiles in some cool websites including social media tooo.");
  createCode("contact", "you can reach me out there");


  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "user";
  span1.textContent = "@";
  span2.textContent = "DR4";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects.)");
    createCode("about me", "Who am i and what do i do.");
    createCode("links", "All my profiles in some cool websites including social media tooo.");
    createCode("contact", "you can reach me out there");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/Mos7mos7' target='_blank'><i class='fab fa-github white'></i> github.com/Mos7mos7</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Enthusiastic Engineer and highly motivated Information Security passionate, Experienced with practical usage of Penetration Testing tools through online CTF platforms , Aware of most of the common Vulnerabilities in Web Apps and Networks, Always updated about the latest Vulnerabilities and Exploits, Also a BlockChain & web3 Enthusiastic enjoying my spare time in this technology, Also had an amazing journey establishing a startup with my colleagues named Enkaaz which is an on-demand roadside assistance service primarily through mobile application.")
  }
  else if(value === "contact"){
    trueValue(value);
    createText("official email : mostafabdellatif98@gmail.com    other one : mos7mos71@gmail.com feel free to reach me out there.")
  }
  else if(value === "links"){
    trueValue(value);
    createText("<a href='https://github.com/Mos7mos7' target='_blank'> github</a>")
    createText("<a href='https://www.linkedin.com/in/mostafa-abd-ellatif-a87904165' target='_blank'> linkedin</a>")
    createText("<a href='https://app.hackthebox.com/profile/456618' target='_blank'> hack the box</a>")
    createText("<a href='https://codeforces.com/profile/turtlle' target='_blank'> codeforces</a>")
    createText("<a href='https://medium.com/@mostafaabdellatif' target='_blank'> medium</a>")
    createText("<a href='https://www.facebook.com/mostafa.abdellatif.3532' target='_blank'> facebook</a>")

  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();