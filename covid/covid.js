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

                // Table
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

        // Chart
        var his = "https://api.rootnet.in/covid19-in/stats/history";

        $.get(his, function(res){
            if(res.success) {
                var thirty = res.data.slice(res.data.length - 29);

                var days = [], total = [], active = [], deaths = [], discharged = [];
                for(var d of thirty) {
                    days.push(d.day);
                    total.push(d.summary.total);
                    active.push(d.summary.total - (d.summary.deaths + d.summary.discharged));
                    deaths.push(d.summary.deaths);
                    discharged.push(d.summary.discharged);
                }

                var ctx = $("#covid-cha")
                new Chart(ctx, {
                    type: "line",
                    data: {
                      labels: days,
                      datasets: [{ 
                          data: active,
                          label: "Active",
                          borderColor: "#23D160",
                          fill: true
                        }, { 
                          data: total,
                          label: "Total",
                          borderColor: "#209CEE",
                          fill: true
                        }, { 
                          data: deaths,
                          label: "Deaths",
                          borderColor: "#FF3860",
                          fill: true
                        }, { 
                          data: discharged,
                          label: "Discharged",
                          borderColor: "#FFDD57",
                          fill: true
                        }
                      ]
                    },
                    options: {
                      response: true,
                      maintainAspectRatio: false,
                      title: {
                        display: true,
                        text: 'Last 30 Days Case History'
                      },
                    }
                  });
            } else return;
        });
    });
}