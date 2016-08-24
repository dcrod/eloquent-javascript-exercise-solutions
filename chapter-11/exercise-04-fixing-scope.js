specialForms["set"] = function(args, env, originalEnv) {
  // Your code here.
  var evaluateScope = originalEnv ? originalEnv : env;
  if (args[0].type != "word") {
    throw new SyntaxError("Bad use of set");
  }
  if (env === null) {
    throw new ReferenceError(args[0].name + 
                             " does not exist. Use 'define' to create it.");
  }
  if (Object.prototype.hasOwnProperty.call(env, args[0].name)) {
    var value = evaluate(args[1], evaluateScope);
    env[args[0].name] = value;
    return value;
  }
  specialForms["set"](args, Object.getPrototypeOf(env), evaluateScope);
}

//Tests and expected output
run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
