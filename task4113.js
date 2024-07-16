'use strict'

class Rectangle {
	constructor(width, height) {
		this.width = width; this.height = height;
	}

	// Геттер для получения площади прямоугольника
	get area() {
		return this.width * this.height;
	}

	// Сеттер для установки ширины прямоугольника
	set width(value) {
		if (value > 0) {
			this.width = value;
		}
		else {
			console.log("Ширина должна быть положительной");
		}
	}

  // Сеттер для установки высоты прямоугольника
	set height(value){
		if (value > 0) {
			this.height = value;
		}
		else {
			console.log("Высота должна быть положительной");
		} 
	}
}