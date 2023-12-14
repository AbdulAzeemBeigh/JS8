'use strict'

document.addEventListener('DOMContentLoaded', function(e){
    console.log('HTML has been parsed and the DOM tree has been loaded',e);
});

window.addEventListener('load',function(e){
    console.log('Page is fully loaded',e);
});

window.addEventListener('beforeunload',function(e){
    e.preventDefault();
    console.log(e);
    e.returnValue = 'message';
})