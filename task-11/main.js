//printing a naming list.
var names = ["Mahira", "Muskan", "Noor Fatima", "Alveena", "Laiba"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
;
// For each
names.forEach(function (friendName) {
    console.log(friendName);
});
// For of each
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
