var names=["Grandfather", "Grandmother", "Father", "Mother", "Elder Brother", "Me"];

var img=["https://th.bing.com/th/id/OIP.HiKtbzp4dk6eneKV6WdNlgHaJ4?w=206&h=275&c=7&o=5&dpr=1.25&pid=1.7",
         "https://th.bing.com/th/id/OIP.OU_NrUuAQ7-0UaMmXgH_cQHaKi?w=206&h=294&c=7&o=5&dpr=1.25&pid=1.7",
         "https://th.bing.com/th/id/OIP.h7g7p3oQodMxPteHKRhSTQBwEs?w=131&h=350&c=7&o=5&dpr=1.25&pid=1.7",
         "https://th.bing.com/th/id/OIP.GPjap58pCC80O85syeR9rQAAAA?w=147&h=350&c=7&o=5&dpr=1.25&pid=1.7",
         "https://th.bing.com/th/id/OIP.fSva1r1kymdW_ip2EOWLlgHaFj?w=244&h=183&c=7&o=5&dpr=1.25&pid=1.7",
         "https://th.bing.com/th/id/OIP.XKFIubwHWoq7CrIkDVkE6gHaKm?w=206&h=295&c=7&o=5&dpr=1.25&pid=1.7"];

 var i=0;
 function nextimg() {
       document.getElementById("name").innerHTML=names[i];
       document.getElementById("photo").src=img[i];
       i++;
     }