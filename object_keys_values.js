const computer = {
    brand: 'Dell',
    price: 35000,
    procession: 'ryzen',
    hdd: '1tb',
    ram: {
        speed: '2666mhz',
        stick: 2,
        'Total Ram': '16 GB',
    },
    space: ['SSD 128 GB', 'HDD 1TB'],
}

const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);

// Nasted Keys or values

console.log(computer.brand);
console.log(computer.ram["Total Ram"]);

// total ram now 32gb
computer.ram.stick = '32 GB';
console.log(computer.ram.stick);

// ssd is now 256 gb
computer.space[0]='SSD: 256 GB';
console.log(computer.space);

// if i want to delete hdd properties from computer
delete computer.hdd;
console.log(computer);

// // if i want to delete ram stick properties from computer

delete computer.ram.stick;
console.log(computer);
