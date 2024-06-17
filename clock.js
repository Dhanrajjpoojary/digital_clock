setInterval(timer,1000);

function timer()
{
    let time=new Date();
    let hour=time.getHours();
    let minute=time.getMinutes();
    let seconds=time.getSeconds();
    let am_pm="AM";
    
    if(hour >=12)
        {
            if(hour > 12)
                {
                    hour -=12;
                }
            am_pm="PM";

        }

        if(hour==0)
            {
                hour=12;
            }

        hour=hour<10?"0"+hour:hour;
        minute=minute<10?"0"+minute:minute;
        seconds=seconds<10?"0"+seconds:seconds;


        let settime=
        hour+":"+minute+":"+seconds+am_pm;

        document.getElementById("clock").innerHTML=settime;
}

timer();