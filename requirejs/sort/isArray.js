define(function () {
    function isArray(arr) {
        if(arr instanceof Array){
            return true;
        }else {
            return false;
        }
    }
    return isArray;
});