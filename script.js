 CELCIUS
R = (4/5) C
F = (9/5) C + 32
K = C + 273

function celcius() {

}

KELVIN

REAMUR
C = (5/4) R
F = (9/4) R + 32
K = C + 273 = (5/4) R + 273

FAHRENHEIT
C = 5/9 (F-32)
R = 4/9 (F-32)
K = 5/9 (F-32) + 273


function convert() {
	var degrees = document.getElementById("degrees").value;
	if (document.getElementById("type").value == "fahrenheit") {
		document.getElementById("result").innerHTML = `${(degrees - 32) / 1.8}°C<br>${
			(degrees - 32) / 1.8 + 273.15
		}°K`;
	} else if (document.getElementById("type").value == "celsius") {
		document.getElementById("result").innerHTML = `${degrees * 1.8 + 32}°F<br>${
			parseFloat(degrees) + 273.15
		}°K`;
	} else if (document.getElementById("type").value == "kelvin") {
		document.getElementById("result").innerHTML = `${
			(degrees - 273.15) * 1.8 + 32
		}°F<br>${parseFloat(degrees) - 273.15}°C`;
	} else if (document.getElementById("type").value == "reamur") {
		// document.getElementById("result").innerHTML = `${degrees * `
	}
}
