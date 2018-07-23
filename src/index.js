module.exports = function check(str, bracketsConfig) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str.charAt(i) === bracketsConfig[j][0] || str.charAt(i) === bracketsConfig[j][1]) {
                if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
                    if (arr[arr.length - 1] === bracketsConfig[j][0]) {
                        arr.pop();
                        break;
                    }
                    arr.push(str.charAt(i));
                    break;
                }

                if(str[i] === bracketsConfig[j][0]) {
                    arr.push(str.charAt(i));
                    break;
                }

                if (arr[arr.length - 1] !== bracketsConfig[j][0] || arr.length === 0) {
                    return false;
                }

                arr.pop();
            }
        }
    }
    return arr.length == 0 ? true : false;
}
