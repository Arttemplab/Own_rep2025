/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 0.14232112821839824, "KoPercent": 99.8576788717816};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0014232112821839823, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0014232112821839823, 500, 1500, "HTTP Request characters"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 7729, 7718, 99.8576788717816, 2632.719239228883, 1, 8162, 2416.0, 5711.0, 6471.5, 7475.4, 511.88820451685547, 11477.374588134975, 1.4668810848400555], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request characters", 7729, 7718, 99.8576788717816, 2632.719239228883, 1, 8162, 2416.0, 5711.0, 6471.5, 7475.4, 511.88820451685547, 11477.374588134975, 1.4668810848400555], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 819 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,277 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,260 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 3,973 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 420 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 772 milliseconds, but should not have lasted longer than 180 milliseconds.", 2, 0.025913449080072558, 0.025876568766981498], "isController": false}, {"data": ["The operation lasted too long: It took 1,173 milliseconds, but should not have lasted longer than 180 milliseconds.", 2, 0.025913449080072558, 0.025876568766981498], "isController": false}, {"data": ["The operation lasted too long: It took 1,019 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 234 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 395 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 502 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 457 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,138 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 663 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,374 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 2,228 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,059 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,146 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,706 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,185 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 784 milliseconds, but should not have lasted longer than 180 milliseconds.", 7, 0.09069707178025395, 0.09056799068443525], "isController": false}, {"data": ["The operation lasted too long: It took 787 milliseconds, but should not have lasted longer than 180 milliseconds.", 3, 0.03887017362010883, 0.03881485315047225], "isController": false}, {"data": ["The operation lasted too long: It took 871 milliseconds, but should not have lasted longer than 180 milliseconds.", 2, 0.025913449080072558, 0.025876568766981498], "isController": false}, {"data": ["The operation lasted too long: It took 832 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,027 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,944 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 874 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 244 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 450 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,609 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 749 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 961 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,227 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 437 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:3001 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 1469, 19.033428349313294, 19.00633975934791], "isController": false}, {"data": ["The operation lasted too long: It took 1,163 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 881 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,304 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 399 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 423 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,089 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,093 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,123 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,604 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 269 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,083 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,284 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,269 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,785 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 857 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,186 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 449 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 753 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 846 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 443 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 972 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,000 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["Non HTTP response code: java.io.InterruptedIOException/Non HTTP response message: Connection already shutdown", 2, 0.025913449080072558, 0.025876568766981498], "isController": false}, {"data": ["The operation lasted too long: It took 442 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,017 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,302 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,511 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 686 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 783 milliseconds, but should not have lasted longer than 180 milliseconds.", 2, 0.025913449080072558, 0.025876568766981498], "isController": false}, {"data": ["The operation lasted too long: It took 1,312 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,129 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,055 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 651 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 998 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 483 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 513 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 545 milliseconds, but should not have lasted longer than 180 milliseconds.", 2, 0.025913449080072558, 0.025876568766981498], "isController": false}, {"data": ["The operation lasted too long: It took 3,969 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,343 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 726 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,147 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 674 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 2,133 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 8,162 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 994 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,631 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,705 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 523 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 451 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 637 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,459 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 724 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 843 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 867 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 290 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 2,272 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 954 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,355 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 6077, 78.73801502980047, 78.62595419847328], "isController": false}, {"data": ["The operation lasted too long: It took 1,417 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,442 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 2,240 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 922 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,651 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 7,203 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["Non HTTP response code: java.io.InterruptedIOException/Non HTTP response message: Connection has been shut down", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,693 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 315 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,301 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 465 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,960 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 790 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 722 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 869 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 2,064 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 889 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,051 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,078 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 976 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 872 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 732 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 2,416 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 294 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 464 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,258 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 785 milliseconds, but should not have lasted longer than 180 milliseconds.", 8, 0.10365379632029023, 0.10350627506792599], "isController": false}, {"data": ["The operation lasted too long: It took 878 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,978 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 634 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,061 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 2,159 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 3,278 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 970 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 721 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 936 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,392 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,082 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 391 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 2,567 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,003 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 397 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 709 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 2,299 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,048 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 529 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 358 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,097 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 410 milliseconds, but should not have lasted longer than 180 milliseconds.", 2, 0.025913449080072558, 0.025876568766981498], "isController": false}, {"data": ["The operation lasted too long: It took 4,605 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 416 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,062 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 1,174 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 786 milliseconds, but should not have lasted longer than 180 milliseconds.", 2, 0.025913449080072558, 0.025876568766981498], "isController": false}, {"data": ["The operation lasted too long: It took 217 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 834 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}, {"data": ["The operation lasted too long: It took 484 milliseconds, but should not have lasted longer than 180 milliseconds.", 1, 0.012956724540036279, 0.012938284383490749], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 7729, 7718, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 6077, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:3001 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 1469, "The operation lasted too long: It took 785 milliseconds, but should not have lasted longer than 180 milliseconds.", 8, "The operation lasted too long: It took 784 milliseconds, but should not have lasted longer than 180 milliseconds.", 7, "The operation lasted too long: It took 787 milliseconds, but should not have lasted longer than 180 milliseconds.", 3], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request characters", 7729, 7718, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 6077, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:3001 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 1469, "The operation lasted too long: It took 785 milliseconds, but should not have lasted longer than 180 milliseconds.", 8, "The operation lasted too long: It took 784 milliseconds, but should not have lasted longer than 180 milliseconds.", 7, "The operation lasted too long: It took 787 milliseconds, but should not have lasted longer than 180 milliseconds.", 3], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
