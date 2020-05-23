### What is the difference between call and apply?
----

The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly. A useful mnemonic is "A for array and C for comma."

See MDN's documentation on apply and call.

Pseudo syntax:

theFunction.apply(valueForThis, arrayOfArgs)

theFunction.call(valueForThis, arg1, arg2, ...)

There is also, as of ES6, the possibility to spread the array for use with the call function, you can see the compatibilities here.

Sample code:
```
function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession +".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
theFunction.call(undefined, ...["Matthew", "physicist"]); 

https://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply
```

### Javascript “this” pointer within nested function

----

In JavaScript the this object is really based on how you make your function calls.

In general there are three ways to setup the this object:

```
someThing.someFunction(arg1, arg2, argN)
someFunction.call(someThing, arg1, arg2, argN)
someFunction.apply(someThing, [arg1, arg2, argN])

```

In all of the above examples the this object will be someThing. Calling a function without a leading parent object will generally get you the global object which in most browsers means the window object.


