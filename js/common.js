//function that will get geometry angle name
function getGeometryName(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    return elementValue;
}

//function that get input value and convert it to integer
function getInputValueById(id){
    const element = document.getElementById(id);
    const inputStringValue = element.value;
    const inputValue = parseInt(inputStringValue);
    return inputValue;
}

//function that get element value and convert it to integer\
function getElementValueById(id){
    const element = document.getElementById(id);
    const elementStringValue = element.innerText;
    const elementValue = parseInt(elementStringValue);
    return elementValue;
}

//return result to area field function
function returnAreaResultElement(name, area){
    const areaList = document.getElementById("area-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="flex gap-3 items-center">
            <h1> ${name} </h1>
            <h1> ${area}cm<sup>2</sup> </h1>
            <button class="bg-blue-500 text-white p-2 rounded-md">Convert to m <sup>2</sup> </button>
        </div>
    `;
    areaList.appendChild(li);
}