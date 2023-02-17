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