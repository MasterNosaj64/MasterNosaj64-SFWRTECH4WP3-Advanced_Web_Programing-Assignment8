$(document).ready(function() {
    function getAllHomes() {
        $.ajax({
            url: '/all',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                updateTable(data); // Call the function defined above
            },
            error: function(request, status, error) {
                alert('Error fetching data: ' + error);
            }
        });
    }

    getAllHomes(); // Call this function on page load

    $('#allButton').on('click', function() { 
        getAllHomes(); // Call this function on button click
    });

    $('#ancasterButton').on('click', function() { 
        $.ajax({
            url: '/community_search?community=Ancaster',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                updateTable(data); // Call the function defined above
            },
            error: function(request, status, error) {
                alert('Error fetching data: ' + error);
            }
        });
    });

    $('#dundasButton').on('click', function() { 
        $.ajax({
            url: '/community_search?community=Dundas',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                updateTable(data); // Call the function defined above
            },
            error: function(request, status, error) {
                alert('Error fetching data: ' + error);
            }
        });
    });

    $('#mountainButton').on('click', function() { 
        $.ajax({
            url: '/community_search?community=Mountain',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                updateTable(data); // Call the function defined above
            },
            error: function(request, status, error) {
                alert('Error fetching data: ' + error);
            }
        });
    });

    $('#stoneyCreekButton').on('click', function() { 
        $.ajax({
            url: '/community_search?community=Stoney%20Creek',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                updateTable(data); // Call the function defined above
            },
            error: function(request, status, error) {
                alert('Error fetching data: ' + error);
            }
        });
    });

    $('#waterdownButton').on('click', function() { 
        $.ajax({
            url: '/community_search?community=Waterdown',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                updateTable(data); // Call the function defined above
            },
            error: function(request, status, error) {
                alert('Error fetching data: ' + error);
            }
        });
    });

    $('#filterBedroomButton').on('click', function() { 
        $.ajax({
            url: '/bed_search?bedrooms=' + $('#filterBedroomDropdown').val(),
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                updateTable(data); // Call the function defined above
            },
            error: function(request, status, error) {
                alert('Error fetching data: ' + error);
            }
        });
    });

    $('#filterBathroomButton').on('click', function() { 
        $.ajax({
            url: '/bathroom_search?bathrooms=' + $('#filterBathroomDropdown').val(),
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                updateTable(data); // Call the function defined above
            },
            error: function(request, status, error) {
                alert('Error fetching data: ' + error);
            }
        });
    });

    $('#filterPriceButton').on('click', function() { 
        $.ajax({
            url: '/price_search?min=' + $('#minPrice').val() + '&max=' + $('#maxPrice').val(),
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                updateTable(data); // Call the function defined above
            },
            error: function(request, status, error) {
                alert('Error fetching data: ' + error);
            }
        });
    });
});