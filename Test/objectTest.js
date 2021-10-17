var members = ['king', 'yu', 'lim'];
console.log(members[1]); 
var i = 0;
while(i < members.length){
    console.log(members[i]);
    i++;
} 

var roles = {
  'first':'king',
  'second' : 'yu',
  'third' : 'lim'
}
console.log(roles.second); 

for(var n in roles){
    console.log('object => ', n, 'value => ', roles[n]);
  }