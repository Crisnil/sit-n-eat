

export  function createFormFields(source,ignored) {

  if(!source || typeof source !== 'object')
    return {};

  let fields = {};


  let keys = Object.keys(source);

   for(let i=0; i < keys.length; i++){

     let key = keys[i];

     if(Array.isArray(ignored)){
       if(ignored.indexOf(key)>=0)
         continue;

     }
     let value = source[key];

     if(value)
     {
       let t = {
         value
       };
       fields[key] = t;
     }
   }

   return fields;

}
