/**
 * Created by Danil on 28.05.2017.
 */

let shape = new Shape('Shape');
let triangle = new Triangle('Triangle', 1, 2, 3);
let triangleEquilateral = new TriangleEquilateral('TriangleEquilateral', 5);
let square = new Square('Square', 1, 1, 1, 1);

shape.draw();
triangle.draw();
triangleEquilateral.draw();
square.draw();

console.log(`
	${shape.getPerimeter()}
	${triangle.getPerimeter()}
	${triangleEquilateral.getPerimeter()}
	${square.getPerimeter()}
`);