// In your JavaScript console, execute the following two lines of code to check
// whether their return values differ and if so, how. Take a look at the
// MDN documentation on equality comparisons to read about how == and === differ.

"8" == 8;
"8" === 8;

// The first expression will evaluate to true. The second will evaluate to false. The reason
// for this is because the == comparison operator coerces a numerical string value to
// a number and compares from there. The === comparison operator, in contrast, is more
// strict, comparing both the type and value of the operands. The preference in most
// circumstances is to use the strict comparison operator, to avoid unexpected behavior in
// your code.
