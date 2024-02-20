const createInfoElement = (labelName, value) => {


    const infoElement = document.createElement("div");

    const labelElement = document.createElement("strong")
    labelElement.innerText = labelName;
    const valueElement = document.createElement("span")
    valueElement.innerText = value;
    

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement)

    return infoElement;

}


const createFlagImageElement = (country) => {
    const imgContainerElement = document.createElement("div")
    const imgElement = document.createElement("img");
    imgElement.src = country.flagUrl;

    imgContainerElement.appendChild(imgElement);

    return imgContainerElement;
}


const createCountryItemElement = (country) => {
    const countryElement = document.createElement("li");



    const countryNameElement = document.createElement("span");
    countryNameElement.innerText = country.name;

    countryElement.appendChild(createFlagImageElement(country));

    countryElement.appendChild(countryNameElement);

    countryElement.appendChild(
            createInfoElement("Population:", country.population)
        );
    countryElement.appendChild(
            createInfoElement("Region:", country.region)
        );
    countryElement.appendChild(
            createInfoElement("Capital:", country.capital)
        );

    return countryElement;
}





const createListElement = (countries) => {
    const ListElement =  document.createElement("ul")
    countries.forEach(country => {
        ListElement.appendChild(createCountryItemElement(country))
    })

    return ListElement;
}




export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.appendChild(createListElement(countries))
    console.log(countries);
};