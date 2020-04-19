{
    $(document).ready(function() {
        var api = "https://api.rootnet.in/covid19-in/stats/latest";

        $.get(api, function(res){
            if(res.success) {
                $("#covid-upd").text(new Date(res.lastOriginUpdate).toLocaleString());
                $("#covid-act").text((res.data.summary.total - (res.data.summary.deaths + res.data.summary.discharged)).toLocaleString());
                $("#covid-tot").text((res.data.summary.total).toLocaleString());
                $("#covid-dis").text((res.data.summary.discharged).toLocaleString());
                $("#covid-det").text((res.data.summary.deaths).toLocaleString());

                for(var r of res.data.regional) {
                    var o = "<tr>";
                    var loc = `<td>${r.loc}</td>`;
                    var act = `<td class="has-text-centered">${(r.totalConfirmed - (r.discharged + r.deaths)).toLocaleString()}</td>`;
                    var tot = `<td class="has-text-centered">${(r.totalConfirmed).toLocaleString()}</td>`;
                    var dis = `<td class="has-text-centered">${(r.discharged).toLocaleString()}</td>`;
                    var det = `<td class="has-text-centered">${(r.deaths).toLocaleString()}</td>`;
                    var l = "</tr>";
                    $("#covid-tab").append(o + loc + act + tot + dis + det + l)
                }
            } else {
                window.alert("There has been error, please try again later or email contact@adityatd.me")
            }
        });
    });
}