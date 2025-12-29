1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
  Answer:
    getElementById - HTML Element কে তার Unique Id দিয়ে সিলেক্ট করা হয়।
    getElementsByClassName - নিদিষ্ট Tag name অনুযায়ী HTML Collection আকারে return করে।
    querySelector - প্রথম Element সিলেক্ট করে ।
    querySelectorAll - সব Element সিলেক্ট করে NodeList return করে।

2. How do you **create and insert a new element into the DOM**?
  Answer:
    createElement দিয়ে create করবো appenchild দিয়ে Insert করবো।

4. What is **Event Bubbling** and how does it work?
   Answer:
   Child থেকে Parent, Parent থেকে Grandparent, Grandparent থেকে document পযন্ত বাববল করে থাকে ।
   
5. What is **Event Delegation** in JavaScript? Why is it useful?
   Answer:
     Parent Element এ Listner বসিয়ে অনেক Child handle করাই Event Delegation।
     useful বলতে একাধিক child একসাথে handle করা সহজ এবং এলিমেন্ট এড করা যায় ।
   
6. What is the difference between **preventDefault() and stopPropagation()** methods?
   Answer:
     preventDefault() - default action Stop
     stopPropagation() - bubble/capturing stop
    
   
