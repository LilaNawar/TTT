const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  
  //1.0 Done
  const mainEl = document.querySelector("main")
  //console.log(mainEl)
  
  //1.1 Done
  mainEl.style.backgroundColor ='var(--main-bg)' 
  //let bakground = mainEl.style.getPropertyValue("var(--main-bg)")
  //console.log(bakground.style)
  
  //1.2 DONE
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
  
  // 1.3 DONE
  mainEl.classList.add("flex-ctr");
  
  //2.0 Done
  const topMenuEl = document.querySelector("#top-menu");
  
  //2.1 Done
  topMenuEl.style.height = "100%";
  
  //2.2 DONE
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  
  //2.3 DONE
  topMenuEl.classList.add("flex-around");
  
  //3.1 DONE
  
  for (links of menuLinks){
    //console.log(links.text)
    //creating the new 'a' tags
    const nodeEl = document.createElement("a");
  
    // on those a tags, we're adding the attribute of 'href' and giving it's value: whatever the items in the menulinks's href is
    nodeEl.setAttribute('href', links.href)
    // set the text of the nodes to the links' text
      nodeEl.textContent = links.text;
    //add the newly created nodes to the 
      // original tree as child nodes
    topMenuEl.appendChild(nodeEl)
    console.log(topMenuEl);
    console.log(nodeEl.text)
  }
   //4.0 DONE
  let subMenuEl = document.querySelector("#sub-menu");
  
  //4.1 DONE
  subMenuEl.style.height = "100%";
  
  //4.2
  subMenuEl.style.backgroundColor = 
  "var(--sub-menu-bg)";
  //4.4
  subMenuEl.style.position = "absolute";
  
  //4.5
  subMenuEl.style.top = "0"
  
  //5.1
  let topMenuLinks = topMenuEl.querySelectorAll("a");
  let showingSubMenu = false;
  
  //5.2 & 5.3 
  topMenuEl.addEventListener('click', 
  //the function that is called when the click happens. 
  function(event){
    //calls the pre-made function
    event.preventDefault()
    let clickd = event.target;
    if(clickd.nodeName !="A"){
        return
    }
    // if the one that is clicked is active, then we remove the active, and change the style
    else if (clickd.classList.contains("active")){ 
    clickd.classList.remove("active")
      showingSubMenu = false
      subMenuEl.style.top = "0"
      return
    }    
  
    //5.4
  //go through all the elemensts in topMenuLinks and take out the active class  
    for (elem of topMenuLinks) {
      elem.classList.remove("active")
    }
    //5.5
    // adding the aactive tag to the clicked element
    clickd.classList.add("active");
  
    //5.6 
    let currentMenu = ""
    if(clickd.text !== "about"){
      showingSubMenu = true;
    }
    else{
      showingSubMenu= false;
    }
    //5.7 & 5.8
    if(showingSubMenu == true){
      buildSubMenu();
      subMenuEl.style.top = "100%";
    }else{
      subMenuEl.style.top = "0";
    }
  
    // this function clears subMenuEl
    // and creates a new <a> tag for each element
    function buildSubMenu(){
      subMenuEl.innerHTML = ""
      
      if (clickd.innerText =="CATALOG"){
  
         menuLinks[1].subLinks.forEach(item =>{
          subMenuEl.innerHTML += `<a href src = ${item.href} > ${item.text} </a>`
        })
      }   
      else if (clickd.innerText =="ORDERS"){
  
         menuLinks[2].subLinks.forEach(item =>{
          subMenuEl.innerHTML += `<a href src = ${item.href} > ${item.text} </a>`
        })
      } 
      else if (clickd.innerText =="ACCOUNT"){
  
         menuLinks[3].subLinks.forEach(item =>{
          subMenuEl.innerHTML += `<a href src = ${item.href} > ${item.text} </a>`
        })
      } 
      
        
        
        
      }
      })
  
  ;
  
  