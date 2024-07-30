
function populateDateDropdown() {
    var dateDropdown = document.getElementById("appointment-date");

   
    var currentDate = new Date();

    
    var next7Days = [];

   
    for (var i = 0; i < 7; i++) {
        var nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);
        next7Days.push(nextDate);
    }

    
    next7Days.forEach(function (date) {
        var option = document.createElement("option");
        option.text = date.toDateString();
        option.value = date.toISOString().slice(0, 10);
        dateDropdown.add(option);
    });
}


       
        function populateTimeDropdown() {
            var timeDropdown = document.getElementById("appointment-time");
        
            
            var timeOptions = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];
        
        
            for (var i = 0; i < timeOptions.length; i++) {
                var option = document.createElement("option");
                option.text = timeOptions[i];
                option.value = timeOptions[i];
                timeDropdown.add(option);
            }
        }
        populateDateDropdown();
        populateTimeDropdown();