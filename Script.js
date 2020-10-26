    const images={
        dark:["Pangong-1","Pangong-4"],
        light:["Pangong-0"],
        lightness:["Pangong-2"],
        day:["Pangong-3"]
    }

    const frontimg=document.querySelector(".front")
    const backimg=document.querySelector(".back")
    const time=document.querySelector("#time");
    const desc=document.querySelector("#desc");

    const returnURL = (name)=>{
        return `url(./IMG/${name}.jpg)`;
    } 

    const addImg = (mode)=>{
        const randumNum=Math.floor(Math.random() * images[mode].length)
        const url=returnURL(images[mode][randumNum])

        if(frontimg.classList.contains("noOpacity"))
        {
            frontimg.style.backgroundImage = url;
            setTimeout(() =>{
                frontimg.classList.remove("noOpacity")
            },0); 
        }
        else
        {
            backimg.style.backgroundImage = url;
            setTimeout(() =>{
                frontimg.classList.add("noOpacity")
            },0);
        }
    }

    
   const changeImg = (hour)=>{
        if (hour > 18 || hour <= 4 || hour===0) {
            addImg("dark");
            desc.innerHTML="It's A Night";
        } else if(hour >=4 && hour <=7){
            addImg("light");
            desc.innerHTML="It's A Erly Morning";
        } else if(hour >=7 && hour <=10){
            addImg("lightness");
            desc.innerHTML="It's  Morning";
        }
        else if(hour >=16 && hour <= 18)
        {
            addImg("lightness");
            desc.innerHTML="It's  Evining";
        }
        else
        {
            addImg("day");
            desc.innerHTML="It's  After Noon";
        }
        time.innerHTML= hour+" O, Clock";
  }

    // const startTimer =()=>{
    //     let time=new Date().getHours();
    //     setInterval(()=>{
    //         changeImg(time)
    //         time++;
    //         if(time > 24)
    //         {
    //             time=0
    //         }
    //     }, 3100);
    // }

    // document.addEventListener("click",()=>{
    //     startTimer();
    // });


  changeImg(new Date().getHours())

  setTimeout(() =>{
    setInterval(() =>{
        changeImg(new Date().getHours())
    },60 * 60 *1000);
  },60 - new Date().getMinutes());