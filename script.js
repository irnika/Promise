"use strict"
const $searchForm = $("#search-form");
console.log("$searchForm", $searchForm);

const getBooks = (query) => {
    const url = "https://www.googleapis.com/books/v1/volumes";

    $.ajax({
        url: url,
        method: "GET",
        data: `q=${query}`
    }).done((response) => {
        console.log(response);
    }).fail((error) => {
        console.log("error", error)
    });
};
$searchForm.on("submit", (event) => {
    event.preventDefault();

    const query = $("#search-form input").val().replace(/\s/g, "+");
    getBooks(query);
});
