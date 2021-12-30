var color = $('.box').css('background-color');
var VersionLatest = $('.VersionLatest').css('content');
var VersionLatestStr = (VersionLatest.replace(/['"]+/g, '')).toString();
var VersionThis = $('.VersionThis').css('content');
var VersionThisStr = (VersionThis.replace(/['"]+/g, '')).toString();
if (VersionLatest == VersionThis) { // =='blue' <- IE hack
    var html = '<font style="font-family: Georgia, Serif; font-size: larger; letter-spacing: -1px;"><b>AzGovViz</b></font> | <a href=\"https://github.com/JulianHayward/Azure-MG-Sub-Governance-Reporting\" target=\"_blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a> | <a class=\"foot\" href=\"https://www.linkedin.com/in/julianhayward\" target=\"_blank\"><i class=\"fa fa-linkedin-square fa-sm\" aria-hidden=\"true\"></i></a> | <abbr title=\"Latest Version (v' + VersionThisStr + ')\"><a href=\"https://github.com/JulianHayward/Azure-MG-Sub-Governance-Reporting\" target=\"_blank\"><i class=\"fa fa-refresh\" style=\"color:#bbb\"></i></a></abbr> |&nbsp;';
} else {
    var html = "<font style=\"font-family: Georgia, Serif; font-size: larger; letter-spacing: -1px;\"><b>AzGovViz</b></font> | <a href=\"https://github.com/JulianHayward/Azure-MG-Sub-Governance-Reporting\" target=\"_blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a> | <a class=\"foot\" href=\"https://www.linkedin.com/in/julianhayward\" target=\"_blank\"><i class=\"fa fa-linkedin-square fa-sm\" aria-hidden=\"true\"></i></a> | <abbr title=\"Current Version (v" + VersionThisStr + ") - New Version available (v" + VersionLatestStr + ")\"><a href=\"https://github.com/JulianHayward/Azure-MG-Sub-Governance-Reporting\" target=\"_blank\"><i class=\"fa fa-refresh fa-spin fa-fw\" style=\"color:#10CA20\"></i></a></abbr> |&nbsp;";
}
$('.VersionAlert').each(function () {
    $(this).html(html);
});
