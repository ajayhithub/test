// IIFE fun use for to remove globel variable problem
// fun immediately execute
(function abc()
{
    console.log("hellow");
})();

(function abc(num)
{
    console.log(`hellow  ${num}`);
})(123);




