const robot = require('robotjs')
const { height, width } = robot.getScreenSize()

let prevPos = robot.getMousePos()

const newPos = () => ({
	x: ~~(Math.random() * width),
	y: ~~(Math.random() * height)
})

setInterval(() => {
	const thisPos = robot.getMousePos()
	if (thisPos.x !== prevPos.x || thisPos.y !== prevPos.y) {
		const { x, y } = newPos()
		prevPos.x = x
		prevPos.y = y
		robot.moveMouse(x, y)
	}
}, 50)
