//String to JSON Object
function buildHuman() {

    // JSON syntax
    let payload = '{"name": "John","age": 22,"gender": "male"}';

    let json = JSON.parse(payload);

    console.log(json.name);
    console.log(json.age);
    console.log(json.gender);

    return json;
}

console.log(buildHuman());

//String to JSON Object with params
function buildHumanWithParams(name, age, gender) {

    // JSON syntax with params
    let payload = `{"name": "${name}","age": ${age},"gender": "${gender}"}`;

    let json = JSON.parse(payload);

    console.log(json.name);
    console.log(json.age);
    console.log(json.gender);

    return json;
}

// JSON to String
console.log(JSON.stringify(buildHumanWithParams("Sophie", 28, "Female")));

// JSON Array
function buildHumans() {
    let payload = '[' +
        '{ "name": "John", "age": 22 },' +
        '{ "name": "Peter", "age": 20 },' +
        '{ "name": "Mark", "age": 23 }' +
        ']';

    let json = JSON.parse(payload);

    // JSON for each
    json.forEach((element) => {
        console.log(element.name);
        console.log(element.age);
    });

    return json;
}

console.log(buildHumans());