module.exports = function check(str, bracketsConfig) {
    var arr=[];
    var count=0;
    for (let i=0; i<str.length; i++) {
        for (let j=0; j<bracketsConfig.length; j++) {
            if (str.charAt(i)==bracketsConfig[j][0]) {
                arr.push(str.charAt(i));
            }
            if (str.charAt(i)==bracketsConfig[j][1]) {
                if (arr[arr.length-1]==bracketsConfig[j][0]) {
                    arr.pop();
                }
            }
        }
    }
    return (arr.length==0)?true:false;
}
