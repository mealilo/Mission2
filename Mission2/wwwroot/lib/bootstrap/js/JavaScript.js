// This calculates the final grade, both numerical and final grade
$("#calcGrade").click(function () {

    // Grab all needed variables
    var asgGrade = $("#asgGrade").val();
    var projectGrade = $("#projectGrade").val();
    var quizGrade = $("#quizGrade").val();
    var examGrade = $("#examGrade").val();
    var intexGrade = $("#intexGrade").val();

    // Do maths with weights of calculated grades


    var finalGradeNum = ((asgGrade * .55) + (projectGrade * .05) + (quizGrade * .1)
        + (examGrade * .20) + (intexGrade * .1));

    var finalGradeLetter = "";

    if (finalGradeNum >= 94)
        finalGradeLetter = "A";
    else if (finalGradeNum < 94 && finalGradeNum >= 90)
        finalGradeLetter = "A-";
    else if (finalGradeNum < 90 && finalGradeNum >= 87)
        finalGradeLetter = "B+";
    else if (finalGradeNum < 87 && finalGradeNum >= 84)
        finalGradeLetter= "B";
    else if (finalGradeNum < 84 && finalGradeNum >= 80)
        finalGradeLetter = "B-";
    else if (finalGradeNum < 80 && finalGradeNum >= 77)
        finalGradeLetter = "C+";
    else if (finalGradeNum < 77 && finalGradeNum >= 74)
        finalGradeLetter = "C";
    else if (finalGradeNum < 74 && finalGradeNum >= 70)
        finalGradeLetter = "D+";
    else if (finalGradeNum < 70 && finalGradeNum >= 67)
        finalGradeLetter = "D";
    else if (finalGradeNum < 67 && finalGradeNum >= 64)
        finalGradeLetter = "D-";
    else if ( finalGradeNum < 64)
        finalGradeLetter = "E";
    else 
        finalGradeLetter = "Error, Unable to Computer Grade";



    $("#finalGradeNum").html(finalGradeNum);
    $("#finalGradeLetter").html(finalGradeLetter);
})