function makeShirt(size, PrintMessage) {
    if (size === void 0) { size = "Large"; }
    if (PrintMessage === void 0) { PrintMessage = " I love typescript "; }
    console.log(" Creating a  ".concat(size, " shirt with the ").concat(PrintMessage, " Print on Shirt "));
}
makeShirt();
makeShirt("medium ");
makeShirt("Small ", "  I love javascript ");
