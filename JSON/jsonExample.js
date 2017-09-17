let jsValue = {Name: "Neethu", Born: 1986};

let jsonString = JSON.stringify(jsValue);

console.log(jsonString);

let jsValBorn = JSON.parse(jsonString).Born;

console.log(jsValBorn);
