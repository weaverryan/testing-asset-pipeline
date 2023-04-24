// async imports work fine too - but that's unrelated to this PR... browsers
// can just do this now!
setTimeout(function() {
    import('../random_number').then(function(randomNumber) {
        console.log('here is your delayed random number!');
        console.log(randomNumber.random_number());
    });
}, 2000);
