let data = `[
    {
      "name": "Ash",
      "age": 30,
      "city": "Delhi"
    },
    {
      "name": "Adarsh",
      "age": 20,
      "city": "Miami"
    },
    {
      "name": "Jimmy",
      "age": 40,
      "city": "Pune"
    }
  ]`;


let json = `[
    "Halua",
    "Halwa",
    "Haluwa",
    "Helluva",
    "Halluva"
]`

  
  let parsed = JSON.parse(data);
  console.log(parsed[2]);
  console.log(JSON.parse(json)[3]);