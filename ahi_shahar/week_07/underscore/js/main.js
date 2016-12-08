var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

console.log("Log out 30 random numbers between 20 and 100");
var randomizer = function(){
  var num = _.random(20, 101);
  return num;
};
_.times(30, function() {
  var num = randomizer();
  // console.log(num);
});

console.log("Create a function that can only ever be called once");
var onlyOneNumber = _.once(randomizer);
console.log(onlyOneNumber());

console.log("Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>");

var $div = $(".names");
var htmlTemplate = "<p>Hello <%= name %>, you don't look a day over <%= age %>!</p>";
var template = _.template(htmlTemplate);
_.each(people, function(person) {
  $div.append(template({name: person.username, age: person.age}));
});

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];

_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});

var $bros = $(".brothers");
var brotherHtmlTemplate = "<p><%= firstName %> <%= lastName %> was born in <%= year %>.</p>";
var brotherTemplate = _.template(brotherHtmlTemplate);

_.each(startingData, function(brother) {

  var showBrother = _.chain(brother).unzip().object().invert();

  console.log(showBrother);
  $(".brothers").append(brotherTemplate({
    firstName: _(showBrother._wrapped.firstName).capitalize(),
    lastName: _(showBrother._wrapped.lastName).capitalize(),
    year: showBrother._wrapped.born-100
  }));

});


// console.log(startingData);
