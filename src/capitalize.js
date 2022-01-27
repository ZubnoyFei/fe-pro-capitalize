const string = "lorem ipsum dolor sit amet";

function capitalize(string) {

    let text = string.split(' ');


    const result = text.map(function (item) {
        return item[0].toUpperCase() + item.slice(1);

    });

    return result.join(' ');
}
console.log(capitalize(string));


module.exports = capitalize;
