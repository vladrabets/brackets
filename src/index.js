module.exports = function check(str, bracketsConfig) {
  let flag = true;
    while(flag){
        flag=false;
      for(config of bracketsConfig){
          let brackets = config[0]+config[1];
          while(str.includes(brackets)){
                  str = str.slice(0,str.indexOf(brackets)) + str.slice(str.indexOf(brackets)+brackets.length);
                  flag=true;
          }
      }
  }
  if(str)
      return false;
  else
      return true;
}
