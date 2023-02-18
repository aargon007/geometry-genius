//triangle
document.getElementById("calculate-triangle").addEventListener("click", function(){
    const triangle = getGeometryName("triangle");
    //get area value
    const b = getInputValueById("triangle-base");
    const h = getInputValueById("triangle-height");
    //calculate
    const area = 0.5 * b * h;
    //return result to area calculation field
    returnAreaResultElement(triangle, area)
})
//rectangle
document.getElementById("calculate-rectangle").addEventListener("click", function(){
    const rectangle = getGeometryName("rectangle");
    //get area value
    const w = getInputValueById("rectangle-width");
    const l = getInputValueById("rectangle-length");
    //calculate
    const area = w * l;
    //return result to area calculation field
    returnAreaResultElement(rectangle, area)
})
//parallelogram
document.getElementById("parallelogram-calculate").addEventListener("click", function(){
    const parallelogram = getGeometryName("parallelogram");
    //get area value
    const b = getElementValueById("parallel-base");
    const h = getElementValueById("parallel-height");
    //calculate area
    const area = b * h;
    //return result to area collection field
    returnAreaResultElement(parallelogram, area);
})
//rhombus
document.getElementById("rhombus-calculate").addEventListener("click", function(){
    const rhombus = getGeometryName("rhombus");
    //get area value
    const d1 = getElementValueById("rhombus-d1");
    const d2 = getElementValueById("rhombus-d2");
    //calculate area
    const area = 0.5 * d1 * d2;
    //return result to area collection field
    returnAreaResultElement(rhombus, area);
})
//pentagon
document.getElementById("pentagon-calculate").addEventListener("click", function(){
    const pentagon = getGeometryName("pentagon");
    //get area value
    const p = getElementValueById("pentagon-p");
    const b = getElementValueById("pentagon-b");
    //calculate area
    const area = 0.5 * p * b;
    //return result to area collection field
    returnAreaResultElement(pentagon, area);
})
//parallelogram
document.getElementById("ellipse-calculate").addEventListener("click", function(){
    const ellipse = getGeometryName("ellipse");
    //get area value
    const a = getElementValueById("ellipse-a");
    const b = getElementValueById("ellipse-b");
    //calculate area
    const area = Math.PI * a * b;
    const areaFinal = parseFloat(area.toFixed(2));
    //return result to area collection field
    returnAreaResultElement(ellipse, areaFinal);
})