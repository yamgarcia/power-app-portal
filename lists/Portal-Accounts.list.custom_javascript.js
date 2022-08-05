$(document).ready(function (){ $(".entitylist.entity-grid").on("loaded", function () { $(this).children(".view-grid").find("td[data_attribute='preferredcontactmethodcode']").each(function (i, e){ var value = $(this).html(); if(value ==
"Any") { $(this).html("
<div style="text-align: left;"><span title="Any" class="glyphicon glyphicon-thumbs-up"></span> Any</div>
"); } else if (value == "Email") { $(this).html("
<div style="text-align: left;"><span title="Email" class="glyphicon glyphicon-envelope"></span> Email</div>
"); } else if (value == "Phone") { $(this).html("
<div style="text-align: left;"><span title="Phone" class="glyphicon glyphicon-earphone"></span> Phone</div>
"); } else if (value == "Fax") { $(this).html("
<div style="text-align: left;"><span title="Fax" class="glyphicon glyphicon-print"></span> Fax</div>
"); } else if (value == "Mail") { $(this).html("
<div style="text-align: left;"><span title="Mail" class="glyphicon glyphicon-envelope"></span> Mail</div>
"); } }); }); });
