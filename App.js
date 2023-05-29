function App() {
    return (
     <div>
         <Tweet 
         name= "Patrick Seldon"
         date={new Date().toDateString()}
         username= "pseldon"
         message="Have a nice weekend"
         />
 
        <Tweet 
         name= "Sara Lee"
         date={new Date().toDateString()}
         username= "slee"
         message="Learning React JS!!!"
         />
          <Tweet 
         name= "Omar Ayub"
         date={new Date().toDateString()}
         username= "oayub"
         message="It is a sunny day!!"
         />
 
     </div>
    );
 }