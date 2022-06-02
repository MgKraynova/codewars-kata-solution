// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript

function createSecretHolder(secret) {
    let secret1 = secret;

    return {
        getSecret: function() {
            return secret1;
        },

        setSecret: function(item) {
            secret1 = item;
        }
    };
}

let a = createSecretHolder(5);
console.log(a);