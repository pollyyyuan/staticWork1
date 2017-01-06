   function base(){

   }
   base.prototype={
   formateString:function(str, data){
    return str.replace(/@\((\w+)\)/g, function(match, key){
        return typeof data[key] === "undefined" ? '' : data[key]});
}
}
var baseObject=new base();