$(document).ready(
    function (){
        //add event handlers
        $("#calcButton").click(calculateBAC);

        function calculateBAC(){

            var numberOfBeers = $("#numBeers").val();
            //parse number
            numberOfBeers = parseFloat(numberOfBeers);
            var numberOfWine = $("#numGlassesOfWine").val();
            //parse number
            numberOfWine= parseFloat(numberOfWine);
            var numberOfShots = $("#numShots").val();
            //parse number
            numberOfShots = parseFloat(numberOfShots);
            var usersWeight = $("#userWeight").val();
            //parse number
            usersWeight = parseFloat(usersWeight);
            var numberOfHours = $("#numHours").val();
            //parse number
            numberOfHours = parseFloat(numberOfHours);

            var beer = .54 * numberOfBeers;
            var wine = .6 * numberOfWine;
            var shot = .6 * numberOfShots;

            var alcoholAbsorptionRate = (beer + wine + shot) * 7.5;
            var alcoholByWeight = alcoholAbsorptionRate/usersWeight;
            var bacFinal = alcoholByWeight - (numberOfHours * .015);
            $("#bacOutput").text(bacFinal.toFixed(3));






        }


    }









)