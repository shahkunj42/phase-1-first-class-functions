function receivesAFunction(cb){
  cb();
}

function returnsANamedFunction(){
  return function add(a,b){
    return a + b
  }
}

function  returnsAnAnonymousFunction(){
  return ()=> 'hello world'
}