"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = 'Large', tex = 'I Love typescript') {
    console.log(`Creating a ${size} shirt with the message: ${tex}`);
}
make_shirt();
make_shirt('Mediun');
make_shirt('Small', 'I love python');
