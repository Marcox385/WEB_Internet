/* Callback Hell */

fase1(function(result) {
    fase2(result, function(newResult) {
        fase3(newResult, function(otherResult) {
            fase4(otherResult, function(finalResult) {
                console.log('Así hasta llegar al infierno... -> ' + finalResult);
            }, failureCallback);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);
