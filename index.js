let objects = [ 
    {person:"Teju",
    age:"2",
    company:"Guvi"
    },
    {person:"Raj",
    age:"3",
    company:"Guvi Geek"
    },
    {person:"Ramu",
    age:"4",
    company:"Guvi Geek Network"}
];
console.table(objects);
//for loop
for(var i=0;i<objects.length;i++)
{
    user=objects[i];
   console.log(user)
}
//for each loop
objects.forEach(((user)=>{console.log(user.person)}))
//for in loop
for(var index in objects){
  user=objects[index];
  console.log(user)
}
//for of loop
for(var key of objects){
    console.log(`Name:${key.person}`)
}

