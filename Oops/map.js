const map=new Map();
map.set(1,'jiya');
map.set(2,'jiy');
map.set(3,'ji');
map.set(4,'j');
console.log(map);
console.log(map.size);

console.log(map.has(3));
console.log(map.get(3));
for(let entry of map.entries())
    console.log(entry[0],entry[1]);
for(let key of map.keys())
    console.log(key);
for(let value of map.values())
    console.log(value);
map.delete(1);
console.log(map);
map.clear();
console.log(map.size);

const data='malyalam';
const mapp=new Map();
for(let str of data){
    if(!mapp.has(str)){
        mapp.set(str,1)
    }
    else{
        mapp.set(str,mapp.get(str)+1);
    }
}
console.log(mapp);


    
    
    


