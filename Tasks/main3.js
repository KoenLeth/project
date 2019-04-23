var a =  {o:1};
var b =  {o:1};
function isDeepEqual(a,b)
{
 return String(a) === String(b);
}
test = isDeepEqual(a,b);
console.log(test)