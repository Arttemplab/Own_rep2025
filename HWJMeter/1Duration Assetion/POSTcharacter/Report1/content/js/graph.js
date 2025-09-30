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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 322.0, "series": [{"data": [[0.0, 4.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 22.0], [2.1, 22.0], [2.2, 22.0], [2.3, 22.0], [2.4, 22.0], [2.5, 22.0], [2.6, 22.0], [2.7, 22.0], [2.8, 22.0], [2.9, 22.0], [3.0, 41.0], [3.1, 41.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 41.0], [3.9, 41.0], [4.0, 57.0], [4.1, 57.0], [4.2, 57.0], [4.3, 57.0], [4.4, 57.0], [4.5, 57.0], [4.6, 57.0], [4.7, 57.0], [4.8, 57.0], [4.9, 57.0], [5.0, 78.0], [5.1, 78.0], [5.2, 78.0], [5.3, 78.0], [5.4, 78.0], [5.5, 78.0], [5.6, 78.0], [5.7, 78.0], [5.8, 78.0], [5.9, 78.0], [6.0, 96.0], [6.1, 96.0], [6.2, 96.0], [6.3, 96.0], [6.4, 96.0], [6.5, 96.0], [6.6, 96.0], [6.7, 96.0], [6.8, 96.0], [6.9, 96.0], [7.0, 105.0], [7.1, 105.0], [7.2, 105.0], [7.3, 105.0], [7.4, 105.0], [7.5, 105.0], [7.6, 105.0], [7.7, 105.0], [7.8, 105.0], [7.9, 105.0], [8.0, 109.0], [8.1, 109.0], [8.2, 109.0], [8.3, 109.0], [8.4, 109.0], [8.5, 109.0], [8.6, 109.0], [8.7, 109.0], [8.8, 109.0], [8.9, 109.0], [9.0, 115.0], [9.1, 115.0], [9.2, 115.0], [9.3, 115.0], [9.4, 115.0], [9.5, 115.0], [9.6, 115.0], [9.7, 115.0], [9.8, 115.0], [9.9, 115.0], [10.0, 123.0], [10.1, 123.0], [10.2, 123.0], [10.3, 123.0], [10.4, 123.0], [10.5, 123.0], [10.6, 123.0], [10.7, 123.0], [10.8, 123.0], [10.9, 123.0], [11.0, 125.0], [11.1, 125.0], [11.2, 125.0], [11.3, 125.0], [11.4, 125.0], [11.5, 125.0], [11.6, 125.0], [11.7, 125.0], [11.8, 125.0], [11.9, 125.0], [12.0, 126.0], [12.1, 126.0], [12.2, 126.0], [12.3, 126.0], [12.4, 126.0], [12.5, 126.0], [12.6, 126.0], [12.7, 126.0], [12.8, 126.0], [12.9, 126.0], [13.0, 128.0], [13.1, 128.0], [13.2, 128.0], [13.3, 128.0], [13.4, 128.0], [13.5, 128.0], [13.6, 128.0], [13.7, 128.0], [13.8, 128.0], [13.9, 128.0], [14.0, 132.0], [14.1, 132.0], [14.2, 132.0], [14.3, 132.0], [14.4, 132.0], [14.5, 132.0], [14.6, 132.0], [14.7, 132.0], [14.8, 132.0], [14.9, 132.0], [15.0, 135.0], [15.1, 135.0], [15.2, 135.0], [15.3, 135.0], [15.4, 135.0], [15.5, 135.0], [15.6, 135.0], [15.7, 135.0], [15.8, 135.0], [15.9, 135.0], [16.0, 140.0], [16.1, 140.0], [16.2, 140.0], [16.3, 140.0], [16.4, 140.0], [16.5, 140.0], [16.6, 140.0], [16.7, 140.0], [16.8, 140.0], [16.9, 140.0], [17.0, 141.0], [17.1, 141.0], [17.2, 141.0], [17.3, 141.0], [17.4, 141.0], [17.5, 141.0], [17.6, 141.0], [17.7, 141.0], [17.8, 141.0], [17.9, 141.0], [18.0, 142.0], [18.1, 142.0], [18.2, 142.0], [18.3, 142.0], [18.4, 142.0], [18.5, 142.0], [18.6, 142.0], [18.7, 142.0], [18.8, 142.0], [18.9, 142.0], [19.0, 147.0], [19.1, 147.0], [19.2, 147.0], [19.3, 147.0], [19.4, 147.0], [19.5, 147.0], [19.6, 147.0], [19.7, 147.0], [19.8, 147.0], [19.9, 147.0], [20.0, 150.0], [20.1, 150.0], [20.2, 150.0], [20.3, 150.0], [20.4, 150.0], [20.5, 150.0], [20.6, 150.0], [20.7, 150.0], [20.8, 150.0], [20.9, 150.0], [21.0, 154.0], [21.1, 154.0], [21.2, 154.0], [21.3, 154.0], [21.4, 154.0], [21.5, 154.0], [21.6, 154.0], [21.7, 154.0], [21.8, 154.0], [21.9, 154.0], [22.0, 158.0], [22.1, 158.0], [22.2, 158.0], [22.3, 158.0], [22.4, 158.0], [22.5, 158.0], [22.6, 158.0], [22.7, 158.0], [22.8, 158.0], [22.9, 158.0], [23.0, 161.0], [23.1, 161.0], [23.2, 161.0], [23.3, 161.0], [23.4, 161.0], [23.5, 161.0], [23.6, 161.0], [23.7, 161.0], [23.8, 161.0], [23.9, 161.0], [24.0, 165.0], [24.1, 165.0], [24.2, 165.0], [24.3, 165.0], [24.4, 165.0], [24.5, 165.0], [24.6, 165.0], [24.7, 165.0], [24.8, 165.0], [24.9, 165.0], [25.0, 167.0], [25.1, 167.0], [25.2, 167.0], [25.3, 167.0], [25.4, 167.0], [25.5, 167.0], [25.6, 167.0], [25.7, 167.0], [25.8, 167.0], [25.9, 167.0], [26.0, 169.0], [26.1, 169.0], [26.2, 169.0], [26.3, 169.0], [26.4, 169.0], [26.5, 169.0], [26.6, 169.0], [26.7, 169.0], [26.8, 169.0], [26.9, 169.0], [27.0, 173.0], [27.1, 173.0], [27.2, 173.0], [27.3, 173.0], [27.4, 173.0], [27.5, 173.0], [27.6, 173.0], [27.7, 173.0], [27.8, 173.0], [27.9, 173.0], [28.0, 175.0], [28.1, 175.0], [28.2, 175.0], [28.3, 175.0], [28.4, 175.0], [28.5, 175.0], [28.6, 175.0], [28.7, 175.0], [28.8, 175.0], [28.9, 175.0], [29.0, 178.0], [29.1, 178.0], [29.2, 178.0], [29.3, 178.0], [29.4, 178.0], [29.5, 178.0], [29.6, 178.0], [29.7, 178.0], [29.8, 178.0], [29.9, 178.0], [30.0, 181.0], [30.1, 181.0], [30.2, 181.0], [30.3, 181.0], [30.4, 181.0], [30.5, 181.0], [30.6, 181.0], [30.7, 181.0], [30.8, 181.0], [30.9, 181.0], [31.0, 182.0], [31.1, 182.0], [31.2, 182.0], [31.3, 182.0], [31.4, 182.0], [31.5, 182.0], [31.6, 182.0], [31.7, 182.0], [31.8, 182.0], [31.9, 182.0], [32.0, 184.0], [32.1, 184.0], [32.2, 184.0], [32.3, 184.0], [32.4, 184.0], [32.5, 184.0], [32.6, 184.0], [32.7, 184.0], [32.8, 184.0], [32.9, 184.0], [33.0, 186.0], [33.1, 186.0], [33.2, 186.0], [33.3, 186.0], [33.4, 186.0], [33.5, 186.0], [33.6, 186.0], [33.7, 186.0], [33.8, 186.0], [33.9, 186.0], [34.0, 187.0], [34.1, 187.0], [34.2, 187.0], [34.3, 187.0], [34.4, 187.0], [34.5, 187.0], [34.6, 187.0], [34.7, 187.0], [34.8, 187.0], [34.9, 187.0], [35.0, 190.0], [35.1, 190.0], [35.2, 190.0], [35.3, 190.0], [35.4, 190.0], [35.5, 190.0], [35.6, 190.0], [35.7, 190.0], [35.8, 190.0], [35.9, 190.0], [36.0, 191.0], [36.1, 191.0], [36.2, 191.0], [36.3, 191.0], [36.4, 191.0], [36.5, 191.0], [36.6, 191.0], [36.7, 191.0], [36.8, 191.0], [36.9, 191.0], [37.0, 192.0], [37.1, 192.0], [37.2, 192.0], [37.3, 192.0], [37.4, 192.0], [37.5, 192.0], [37.6, 192.0], [37.7, 192.0], [37.8, 192.0], [37.9, 192.0], [38.0, 194.0], [38.1, 194.0], [38.2, 194.0], [38.3, 194.0], [38.4, 194.0], [38.5, 194.0], [38.6, 194.0], [38.7, 194.0], [38.8, 194.0], [38.9, 194.0], [39.0, 196.0], [39.1, 196.0], [39.2, 196.0], [39.3, 196.0], [39.4, 196.0], [39.5, 196.0], [39.6, 196.0], [39.7, 196.0], [39.8, 196.0], [39.9, 196.0], [40.0, 199.0], [40.1, 199.0], [40.2, 199.0], [40.3, 199.0], [40.4, 199.0], [40.5, 199.0], [40.6, 199.0], [40.7, 199.0], [40.8, 199.0], [40.9, 199.0], [41.0, 201.0], [41.1, 201.0], [41.2, 201.0], [41.3, 201.0], [41.4, 201.0], [41.5, 201.0], [41.6, 201.0], [41.7, 201.0], [41.8, 201.0], [41.9, 201.0], [42.0, 201.0], [42.1, 201.0], [42.2, 201.0], [42.3, 201.0], [42.4, 201.0], [42.5, 201.0], [42.6, 201.0], [42.7, 201.0], [42.8, 201.0], [42.9, 201.0], [43.0, 206.0], [43.1, 206.0], [43.2, 206.0], [43.3, 206.0], [43.4, 206.0], [43.5, 206.0], [43.6, 206.0], [43.7, 206.0], [43.8, 206.0], [43.9, 206.0], [44.0, 209.0], [44.1, 209.0], [44.2, 209.0], [44.3, 209.0], [44.4, 209.0], [44.5, 209.0], [44.6, 209.0], [44.7, 209.0], [44.8, 209.0], [44.9, 209.0], [45.0, 210.0], [45.1, 210.0], [45.2, 210.0], [45.3, 210.0], [45.4, 210.0], [45.5, 210.0], [45.6, 210.0], [45.7, 210.0], [45.8, 210.0], [45.9, 210.0], [46.0, 212.0], [46.1, 212.0], [46.2, 212.0], [46.3, 212.0], [46.4, 212.0], [46.5, 212.0], [46.6, 212.0], [46.7, 212.0], [46.8, 212.0], [46.9, 212.0], [47.0, 215.0], [47.1, 215.0], [47.2, 215.0], [47.3, 215.0], [47.4, 215.0], [47.5, 215.0], [47.6, 215.0], [47.7, 215.0], [47.8, 215.0], [47.9, 215.0], [48.0, 216.0], [48.1, 216.0], [48.2, 216.0], [48.3, 216.0], [48.4, 216.0], [48.5, 216.0], [48.6, 216.0], [48.7, 216.0], [48.8, 216.0], [48.9, 216.0], [49.0, 220.0], [49.1, 220.0], [49.2, 220.0], [49.3, 220.0], [49.4, 220.0], [49.5, 220.0], [49.6, 220.0], [49.7, 220.0], [49.8, 220.0], [49.9, 220.0], [50.0, 221.0], [50.1, 221.0], [50.2, 221.0], [50.3, 221.0], [50.4, 221.0], [50.5, 221.0], [50.6, 221.0], [50.7, 221.0], [50.8, 221.0], [50.9, 221.0], [51.0, 224.0], [51.1, 224.0], [51.2, 224.0], [51.3, 224.0], [51.4, 224.0], [51.5, 224.0], [51.6, 224.0], [51.7, 224.0], [51.8, 224.0], [51.9, 224.0], [52.0, 229.0], [52.1, 229.0], [52.2, 229.0], [52.3, 229.0], [52.4, 229.0], [52.5, 229.0], [52.6, 229.0], [52.7, 229.0], [52.8, 229.0], [52.9, 229.0], [53.0, 237.0], [53.1, 237.0], [53.2, 237.0], [53.3, 237.0], [53.4, 237.0], [53.5, 237.0], [53.6, 237.0], [53.7, 237.0], [53.8, 237.0], [53.9, 237.0], [54.0, 238.0], [54.1, 238.0], [54.2, 238.0], [54.3, 238.0], [54.4, 238.0], [54.5, 238.0], [54.6, 238.0], [54.7, 238.0], [54.8, 238.0], [54.9, 238.0], [55.0, 243.0], [55.1, 243.0], [55.2, 243.0], [55.3, 243.0], [55.4, 243.0], [55.5, 243.0], [55.6, 243.0], [55.7, 243.0], [55.8, 243.0], [55.9, 243.0], [56.0, 248.0], [56.1, 248.0], [56.2, 248.0], [56.3, 248.0], [56.4, 248.0], [56.5, 248.0], [56.6, 248.0], [56.7, 248.0], [56.8, 248.0], [56.9, 248.0], [57.0, 250.0], [57.1, 250.0], [57.2, 250.0], [57.3, 250.0], [57.4, 250.0], [57.5, 250.0], [57.6, 250.0], [57.7, 250.0], [57.8, 250.0], [57.9, 250.0], [58.0, 255.0], [58.1, 255.0], [58.2, 255.0], [58.3, 255.0], [58.4, 255.0], [58.5, 255.0], [58.6, 255.0], [58.7, 255.0], [58.8, 255.0], [58.9, 255.0], [59.0, 257.0], [59.1, 257.0], [59.2, 257.0], [59.3, 257.0], [59.4, 257.0], [59.5, 257.0], [59.6, 257.0], [59.7, 257.0], [59.8, 257.0], [59.9, 257.0], [60.0, 260.0], [60.1, 260.0], [60.2, 260.0], [60.3, 260.0], [60.4, 260.0], [60.5, 260.0], [60.6, 260.0], [60.7, 260.0], [60.8, 260.0], [60.9, 260.0], [61.0, 265.0], [61.1, 265.0], [61.2, 265.0], [61.3, 265.0], [61.4, 265.0], [61.5, 265.0], [61.6, 265.0], [61.7, 265.0], [61.8, 265.0], [61.9, 265.0], [62.0, 269.0], [62.1, 269.0], [62.2, 269.0], [62.3, 269.0], [62.4, 269.0], [62.5, 269.0], [62.6, 269.0], [62.7, 269.0], [62.8, 269.0], [62.9, 269.0], [63.0, 270.0], [63.1, 270.0], [63.2, 270.0], [63.3, 270.0], [63.4, 270.0], [63.5, 270.0], [63.6, 270.0], [63.7, 270.0], [63.8, 270.0], [63.9, 270.0], [64.0, 274.0], [64.1, 274.0], [64.2, 274.0], [64.3, 274.0], [64.4, 274.0], [64.5, 274.0], [64.6, 274.0], [64.7, 274.0], [64.8, 274.0], [64.9, 274.0], [65.0, 278.0], [65.1, 278.0], [65.2, 278.0], [65.3, 278.0], [65.4, 278.0], [65.5, 278.0], [65.6, 278.0], [65.7, 278.0], [65.8, 278.0], [65.9, 278.0], [66.0, 280.0], [66.1, 280.0], [66.2, 280.0], [66.3, 280.0], [66.4, 280.0], [66.5, 280.0], [66.6, 280.0], [66.7, 280.0], [66.8, 280.0], [66.9, 280.0], [67.0, 283.0], [67.1, 283.0], [67.2, 283.0], [67.3, 283.0], [67.4, 283.0], [67.5, 283.0], [67.6, 283.0], [67.7, 283.0], [67.8, 283.0], [67.9, 283.0], [68.0, 285.0], [68.1, 285.0], [68.2, 285.0], [68.3, 285.0], [68.4, 285.0], [68.5, 285.0], [68.6, 285.0], [68.7, 285.0], [68.8, 285.0], [68.9, 285.0], [69.0, 288.0], [69.1, 288.0], [69.2, 288.0], [69.3, 288.0], [69.4, 288.0], [69.5, 288.0], [69.6, 288.0], [69.7, 288.0], [69.8, 288.0], [69.9, 288.0], [70.0, 291.0], [70.1, 291.0], [70.2, 291.0], [70.3, 291.0], [70.4, 291.0], [70.5, 291.0], [70.6, 291.0], [70.7, 291.0], [70.8, 291.0], [70.9, 291.0], [71.0, 294.0], [71.1, 294.0], [71.2, 294.0], [71.3, 294.0], [71.4, 294.0], [71.5, 294.0], [71.6, 294.0], [71.7, 294.0], [71.8, 294.0], [71.9, 294.0], [72.0, 295.0], [72.1, 295.0], [72.2, 295.0], [72.3, 295.0], [72.4, 295.0], [72.5, 295.0], [72.6, 295.0], [72.7, 295.0], [72.8, 295.0], [72.9, 295.0], [73.0, 296.0], [73.1, 296.0], [73.2, 296.0], [73.3, 296.0], [73.4, 296.0], [73.5, 296.0], [73.6, 296.0], [73.7, 296.0], [73.8, 296.0], [73.9, 296.0], [74.0, 300.0], [74.1, 300.0], [74.2, 300.0], [74.3, 300.0], [74.4, 300.0], [74.5, 300.0], [74.6, 300.0], [74.7, 300.0], [74.8, 300.0], [74.9, 300.0], [75.0, 306.0], [75.1, 306.0], [75.2, 306.0], [75.3, 306.0], [75.4, 306.0], [75.5, 306.0], [75.6, 306.0], [75.7, 306.0], [75.8, 306.0], [75.9, 306.0], [76.0, 308.0], [76.1, 308.0], [76.2, 308.0], [76.3, 308.0], [76.4, 308.0], [76.5, 308.0], [76.6, 308.0], [76.7, 308.0], [76.8, 308.0], [76.9, 308.0], [77.0, 309.0], [77.1, 309.0], [77.2, 309.0], [77.3, 309.0], [77.4, 309.0], [77.5, 309.0], [77.6, 309.0], [77.7, 309.0], [77.8, 309.0], [77.9, 309.0], [78.0, 311.0], [78.1, 311.0], [78.2, 311.0], [78.3, 311.0], [78.4, 311.0], [78.5, 311.0], [78.6, 311.0], [78.7, 311.0], [78.8, 311.0], [78.9, 311.0], [79.0, 311.0], [79.1, 311.0], [79.2, 311.0], [79.3, 311.0], [79.4, 311.0], [79.5, 311.0], [79.6, 311.0], [79.7, 311.0], [79.8, 311.0], [79.9, 311.0], [80.0, 311.0], [80.1, 311.0], [80.2, 311.0], [80.3, 311.0], [80.4, 311.0], [80.5, 311.0], [80.6, 311.0], [80.7, 311.0], [80.8, 311.0], [80.9, 311.0], [81.0, 313.0], [81.1, 313.0], [81.2, 313.0], [81.3, 313.0], [81.4, 313.0], [81.5, 313.0], [81.6, 313.0], [81.7, 313.0], [81.8, 313.0], [81.9, 313.0], [82.0, 313.0], [82.1, 313.0], [82.2, 313.0], [82.3, 313.0], [82.4, 313.0], [82.5, 313.0], [82.6, 313.0], [82.7, 313.0], [82.8, 313.0], [82.9, 313.0], [83.0, 313.0], [83.1, 313.0], [83.2, 313.0], [83.3, 313.0], [83.4, 313.0], [83.5, 313.0], [83.6, 313.0], [83.7, 313.0], [83.8, 313.0], [83.9, 313.0], [84.0, 314.0], [84.1, 314.0], [84.2, 314.0], [84.3, 314.0], [84.4, 314.0], [84.5, 314.0], [84.6, 314.0], [84.7, 314.0], [84.8, 314.0], [84.9, 314.0], [85.0, 314.0], [85.1, 314.0], [85.2, 314.0], [85.3, 314.0], [85.4, 314.0], [85.5, 314.0], [85.6, 314.0], [85.7, 314.0], [85.8, 314.0], [85.9, 314.0], [86.0, 314.0], [86.1, 314.0], [86.2, 314.0], [86.3, 314.0], [86.4, 314.0], [86.5, 314.0], [86.6, 314.0], [86.7, 314.0], [86.8, 314.0], [86.9, 314.0], [87.0, 314.0], [87.1, 314.0], [87.2, 314.0], [87.3, 314.0], [87.4, 314.0], [87.5, 314.0], [87.6, 314.0], [87.7, 314.0], [87.8, 314.0], [87.9, 314.0], [88.0, 314.0], [88.1, 314.0], [88.2, 314.0], [88.3, 314.0], [88.4, 314.0], [88.5, 314.0], [88.6, 314.0], [88.7, 314.0], [88.8, 314.0], [88.9, 314.0], [89.0, 315.0], [89.1, 315.0], [89.2, 315.0], [89.3, 315.0], [89.4, 315.0], [89.5, 315.0], [89.6, 315.0], [89.7, 315.0], [89.8, 315.0], [89.9, 315.0], [90.0, 315.0], [90.1, 315.0], [90.2, 315.0], [90.3, 315.0], [90.4, 315.0], [90.5, 315.0], [90.6, 315.0], [90.7, 315.0], [90.8, 315.0], [90.9, 315.0], [91.0, 315.0], [91.1, 315.0], [91.2, 315.0], [91.3, 315.0], [91.4, 315.0], [91.5, 315.0], [91.6, 315.0], [91.7, 315.0], [91.8, 315.0], [91.9, 315.0], [92.0, 315.0], [92.1, 315.0], [92.2, 315.0], [92.3, 315.0], [92.4, 315.0], [92.5, 315.0], [92.6, 315.0], [92.7, 315.0], [92.8, 315.0], [92.9, 315.0], [93.0, 316.0], [93.1, 316.0], [93.2, 316.0], [93.3, 316.0], [93.4, 316.0], [93.5, 316.0], [93.6, 316.0], [93.7, 316.0], [93.8, 316.0], [93.9, 316.0], [94.0, 316.0], [94.1, 316.0], [94.2, 316.0], [94.3, 316.0], [94.4, 316.0], [94.5, 316.0], [94.6, 316.0], [94.7, 316.0], [94.8, 316.0], [94.9, 316.0], [95.0, 317.0], [95.1, 317.0], [95.2, 317.0], [95.3, 317.0], [95.4, 317.0], [95.5, 317.0], [95.6, 317.0], [95.7, 317.0], [95.8, 317.0], [95.9, 317.0], [96.0, 318.0], [96.1, 318.0], [96.2, 318.0], [96.3, 318.0], [96.4, 318.0], [96.5, 318.0], [96.6, 318.0], [96.7, 318.0], [96.8, 318.0], [96.9, 318.0], [97.0, 319.0], [97.1, 319.0], [97.2, 319.0], [97.3, 319.0], [97.4, 319.0], [97.5, 319.0], [97.6, 319.0], [97.7, 319.0], [97.8, 319.0], [97.9, 319.0], [98.0, 320.0], [98.1, 320.0], [98.2, 320.0], [98.3, 320.0], [98.4, 320.0], [98.5, 320.0], [98.6, 320.0], [98.7, 320.0], [98.8, 320.0], [98.9, 320.0], [99.0, 322.0], [99.1, 322.0], [99.2, 322.0], [99.3, 322.0], [99.4, 322.0], [99.5, 322.0], [99.6, 322.0], [99.7, 322.0], [99.8, 322.0], [99.9, 322.0]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 34.0, "series": [{"data": [[0.0, 7.0], [300.0, 26.0], [100.0, 34.0], [200.0, 33.0]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [[0.0, 100.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 17.810000000000006, "minX": 1.75925952E12, "maxY": 17.810000000000006, "series": [{"data": [[1.75925952E12, 17.810000000000006]], "isOverall": false, "label": "Thread GroupMy Test100POSTcharacter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75925952E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.0, "maxY": 322.0, "series": [{"data": [[3.0, 4.0], [23.0, 322.0], [27.0, 22.0], [36.0, 320.0], [44.0, 319.0], [46.0, 41.0], [56.0, 318.0], [63.0, 57.0], [67.0, 317.0], [81.0, 311.0], [88.0, 78.0], [90.0, 314.0], [101.0, 315.0], [108.0, 96.0], [111.0, 316.0], [120.0, 105.0], [124.0, 109.0], [125.0, 313.0], [130.0, 115.0], [134.0, 315.0], [137.0, 123.0], [140.0, 125.0], [142.0, 126.0], [141.0, 128.0], [148.0, 132.0], [150.0, 135.0], [146.0, 315.0], [157.0, 227.0], [156.0, 141.0], [159.0, 142.0], [162.0, 147.0], [166.0, 150.0], [169.0, 154.0], [170.0, 158.0], [168.0, 313.0], [177.0, 161.0], [179.0, 166.0], [178.0, 315.0], [186.0, 169.0], [190.0, 173.0], [188.0, 316.0], [193.0, 175.0], [196.0, 179.5], [200.0, 182.0], [201.0, 249.0], [202.0, 186.5], [208.0, 191.0], [212.0, 192.0], [213.0, 313.0], [216.0, 192.0], [221.0, 196.0], [222.0, 314.0], [225.0, 201.0], [224.0, 199.0], [227.0, 201.0], [229.0, 206.0], [236.0, 211.0], [237.0, 216.0], [234.0, 314.0], [247.0, 221.0], [255.0, 220.0], [252.0, 224.0], [248.0, 311.0], [1.0, 6.0], [258.0, 215.0], [263.0, 223.5], [259.0, 229.0], [261.0, 237.0], [269.0, 243.0], [265.0, 308.0], [257.0, 311.0], [274.0, 248.0], [277.0, 250.0], [283.0, 255.0], [285.0, 257.0], [288.0, 260.0], [293.0, 265.0], [297.0, 269.0], [300.0, 270.0], [303.0, 274.0], [307.0, 278.0], [311.0, 280.0], [314.0, 288.5], [317.0, 285.0], [316.0, 306.0], [315.0, 300.0], [313.0, 288.0], [323.0, 291.0], [327.0, 296.0], [333.0, 295.0], [320.0, 309.0]], "isOverall": false, "label": "HTTP Request character", "isController": false}, {"data": [[197.77000000000007, 220.77000000000004]], "isOverall": false, "label": "HTTP Request character-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 333.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 368.3333333333333, "minX": 1.75925952E12, "maxY": 461.6666666666667, "series": [{"data": [[1.75925952E12, 461.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75925952E12, 368.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75925952E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 220.77000000000004, "minX": 1.75925952E12, "maxY": 220.77000000000004, "series": [{"data": [[1.75925952E12, 220.77000000000004]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75925952E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 220.77000000000004, "minX": 1.75925952E12, "maxY": 220.77000000000004, "series": [{"data": [[1.75925952E12, 220.77000000000004]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75925952E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.33000000000000007, "minX": 1.75925952E12, "maxY": 0.33000000000000007, "series": [{"data": [[1.75925952E12, 0.33000000000000007]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75925952E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.75925952E12, "maxY": 322.0, "series": [{"data": [[1.75925952E12, 322.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75925952E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75925952E12, 315.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75925952E12, 321.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75925952E12, 220.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75925952E12, 316.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75925952E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 124.0, "minX": 22.0, "maxY": 262.5, "series": [{"data": [[78.0, 262.5], [22.0, 124.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 78.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 124.0, "minX": 22.0, "maxY": 262.5, "series": [{"data": [[78.0, 262.5], [22.0, 124.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 78.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75925952E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75925952E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75925952E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75925952E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75925952E12, 1.6666666666666667]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75925952E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75925952E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75925952E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request character-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75925952E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75925952E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75925952E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75925952E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

