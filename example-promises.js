function addPromises (a, b) {
    return new Promise(function (resolve, reject) {
    num1 = a;
    num2 = b;

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        resolve(num1 + num2);
    } else {
        reject('You need add just numbers');
    }
    });
}

addPromises(2, 3).then(function(sum){
    console.log('success', sum);
}, function(err) {
    console.log('Error', err);
});
