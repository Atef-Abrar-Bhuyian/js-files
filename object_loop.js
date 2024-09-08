const mobile= {
    brand: 'samsung',
    model: 'A12',
    color: 'blue',
    camera: '15mp',
    isNew: true
}

// for of : array
// for in: object
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':' , mobile[key]);
    // console.log();
}