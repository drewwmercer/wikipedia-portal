$(document).ready(function () {
    $('#search').click(function () {
        var searchInput = $('#searchInput').val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
            error: function (errorMessage) {
                alert("Error")
            }
        })
    })
})