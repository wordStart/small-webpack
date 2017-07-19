import css from './css/main.css';
//import layer from './components/layer/layer.ejs';
import layercss from './components/layer/layer.css';
import Layer from './components/layer/layer.js';
const App = function(){
	var dom = document.getElementById("app")
//	var layer = new Layer()
	dom.innerHTML = Layer
}
new App();
