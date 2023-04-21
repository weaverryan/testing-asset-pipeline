setTimeout(function() {
    import('../random_number').then(function(randomNumber) {
        console.log('here is your delayed random number!');
        console.log(randomNumber.random_number());
    });
}, 2000);
