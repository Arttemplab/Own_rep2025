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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 1149.0, "series": [{"data": [[0.0, 5.0], [0.1, 5.0], [0.2, 5.0], [0.3, 5.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 35.0], [2.1, 35.0], [2.2, 35.0], [2.3, 35.0], [2.4, 35.0], [2.5, 35.0], [2.6, 35.0], [2.7, 35.0], [2.8, 35.0], [2.9, 35.0], [3.0, 80.0], [3.1, 80.0], [3.2, 80.0], [3.3, 80.0], [3.4, 80.0], [3.5, 80.0], [3.6, 80.0], [3.7, 80.0], [3.8, 80.0], [3.9, 80.0], [4.0, 118.0], [4.1, 118.0], [4.2, 118.0], [4.3, 118.0], [4.4, 118.0], [4.5, 118.0], [4.6, 118.0], [4.7, 118.0], [4.8, 118.0], [4.9, 118.0], [5.0, 130.0], [5.1, 130.0], [5.2, 130.0], [5.3, 130.0], [5.4, 130.0], [5.5, 130.0], [5.6, 130.0], [5.7, 130.0], [5.8, 130.0], [5.9, 130.0], [6.0, 140.0], [6.1, 140.0], [6.2, 140.0], [6.3, 140.0], [6.4, 140.0], [6.5, 140.0], [6.6, 140.0], [6.7, 140.0], [6.8, 140.0], [6.9, 140.0], [7.0, 147.0], [7.1, 147.0], [7.2, 147.0], [7.3, 147.0], [7.4, 147.0], [7.5, 147.0], [7.6, 147.0], [7.7, 147.0], [7.8, 147.0], [7.9, 147.0], [8.0, 154.0], [8.1, 154.0], [8.2, 154.0], [8.3, 154.0], [8.4, 154.0], [8.5, 154.0], [8.6, 154.0], [8.7, 154.0], [8.8, 154.0], [8.9, 154.0], [9.0, 166.0], [9.1, 166.0], [9.2, 166.0], [9.3, 166.0], [9.4, 166.0], [9.5, 166.0], [9.6, 166.0], [9.7, 166.0], [9.8, 166.0], [9.9, 166.0], [10.0, 180.0], [10.1, 180.0], [10.2, 180.0], [10.3, 180.0], [10.4, 180.0], [10.5, 180.0], [10.6, 180.0], [10.7, 180.0], [10.8, 180.0], [10.9, 180.0], [11.0, 187.0], [11.1, 187.0], [11.2, 187.0], [11.3, 187.0], [11.4, 187.0], [11.5, 187.0], [11.6, 187.0], [11.7, 187.0], [11.8, 187.0], [11.9, 187.0], [12.0, 195.0], [12.1, 195.0], [12.2, 195.0], [12.3, 195.0], [12.4, 195.0], [12.5, 195.0], [12.6, 195.0], [12.7, 195.0], [12.8, 195.0], [12.9, 195.0], [13.0, 205.0], [13.1, 205.0], [13.2, 205.0], [13.3, 205.0], [13.4, 205.0], [13.5, 205.0], [13.6, 205.0], [13.7, 205.0], [13.8, 205.0], [13.9, 205.0], [14.0, 212.0], [14.1, 212.0], [14.2, 212.0], [14.3, 212.0], [14.4, 212.0], [14.5, 212.0], [14.6, 212.0], [14.7, 212.0], [14.8, 212.0], [14.9, 212.0], [15.0, 222.0], [15.1, 222.0], [15.2, 222.0], [15.3, 222.0], [15.4, 222.0], [15.5, 222.0], [15.6, 222.0], [15.7, 222.0], [15.8, 222.0], [15.9, 222.0], [16.0, 234.0], [16.1, 234.0], [16.2, 234.0], [16.3, 234.0], [16.4, 234.0], [16.5, 234.0], [16.6, 234.0], [16.7, 234.0], [16.8, 234.0], [16.9, 234.0], [17.0, 245.0], [17.1, 245.0], [17.2, 245.0], [17.3, 245.0], [17.4, 245.0], [17.5, 245.0], [17.6, 245.0], [17.7, 245.0], [17.8, 245.0], [17.9, 245.0], [18.0, 252.0], [18.1, 252.0], [18.2, 252.0], [18.3, 252.0], [18.4, 252.0], [18.5, 252.0], [18.6, 252.0], [18.7, 252.0], [18.8, 252.0], [18.9, 252.0], [19.0, 258.0], [19.1, 258.0], [19.2, 258.0], [19.3, 258.0], [19.4, 258.0], [19.5, 258.0], [19.6, 258.0], [19.7, 258.0], [19.8, 258.0], [19.9, 258.0], [20.0, 268.0], [20.1, 268.0], [20.2, 268.0], [20.3, 268.0], [20.4, 268.0], [20.5, 268.0], [20.6, 268.0], [20.7, 268.0], [20.8, 268.0], [20.9, 268.0], [21.0, 272.0], [21.1, 272.0], [21.2, 272.0], [21.3, 272.0], [21.4, 272.0], [21.5, 272.0], [21.6, 272.0], [21.7, 272.0], [21.8, 272.0], [21.9, 272.0], [22.0, 300.0], [22.1, 300.0], [22.2, 300.0], [22.3, 300.0], [22.4, 300.0], [22.5, 300.0], [22.6, 300.0], [22.7, 300.0], [22.8, 300.0], [22.9, 300.0], [23.0, 320.0], [23.1, 320.0], [23.2, 320.0], [23.3, 320.0], [23.4, 320.0], [23.5, 320.0], [23.6, 320.0], [23.7, 320.0], [23.8, 320.0], [23.9, 320.0], [24.0, 335.0], [24.1, 335.0], [24.2, 335.0], [24.3, 335.0], [24.4, 335.0], [24.5, 335.0], [24.6, 335.0], [24.7, 335.0], [24.8, 335.0], [24.9, 335.0], [25.0, 347.0], [25.1, 347.0], [25.2, 347.0], [25.3, 347.0], [25.4, 347.0], [25.5, 347.0], [25.6, 347.0], [25.7, 347.0], [25.8, 347.0], [25.9, 347.0], [26.0, 368.0], [26.1, 368.0], [26.2, 368.0], [26.3, 368.0], [26.4, 368.0], [26.5, 368.0], [26.6, 368.0], [26.7, 368.0], [26.8, 368.0], [26.9, 368.0], [27.0, 381.0], [27.1, 381.0], [27.2, 381.0], [27.3, 381.0], [27.4, 381.0], [27.5, 381.0], [27.6, 381.0], [27.7, 381.0], [27.8, 381.0], [27.9, 381.0], [28.0, 392.0], [28.1, 392.0], [28.2, 392.0], [28.3, 392.0], [28.4, 392.0], [28.5, 392.0], [28.6, 392.0], [28.7, 392.0], [28.8, 392.0], [28.9, 392.0], [29.0, 418.0], [29.1, 418.0], [29.2, 418.0], [29.3, 418.0], [29.4, 418.0], [29.5, 418.0], [29.6, 418.0], [29.7, 418.0], [29.8, 418.0], [29.9, 418.0], [30.0, 425.0], [30.1, 425.0], [30.2, 425.0], [30.3, 425.0], [30.4, 425.0], [30.5, 425.0], [30.6, 425.0], [30.7, 425.0], [30.8, 425.0], [30.9, 425.0], [31.0, 443.0], [31.1, 443.0], [31.2, 443.0], [31.3, 443.0], [31.4, 443.0], [31.5, 443.0], [31.6, 443.0], [31.7, 443.0], [31.8, 443.0], [31.9, 443.0], [32.0, 458.0], [32.1, 458.0], [32.2, 458.0], [32.3, 458.0], [32.4, 458.0], [32.5, 458.0], [32.6, 458.0], [32.7, 458.0], [32.8, 458.0], [32.9, 458.0], [33.0, 470.0], [33.1, 470.0], [33.2, 470.0], [33.3, 470.0], [33.4, 470.0], [33.5, 470.0], [33.6, 470.0], [33.7, 470.0], [33.8, 470.0], [33.9, 470.0], [34.0, 476.0], [34.1, 476.0], [34.2, 476.0], [34.3, 476.0], [34.4, 476.0], [34.5, 476.0], [34.6, 476.0], [34.7, 476.0], [34.8, 476.0], [34.9, 476.0], [35.0, 494.0], [35.1, 494.0], [35.2, 494.0], [35.3, 494.0], [35.4, 494.0], [35.5, 494.0], [35.6, 494.0], [35.7, 494.0], [35.8, 494.0], [35.9, 494.0], [36.0, 507.0], [36.1, 507.0], [36.2, 507.0], [36.3, 507.0], [36.4, 507.0], [36.5, 507.0], [36.6, 507.0], [36.7, 507.0], [36.8, 507.0], [36.9, 507.0], [37.0, 520.0], [37.1, 520.0], [37.2, 520.0], [37.3, 520.0], [37.4, 520.0], [37.5, 520.0], [37.6, 520.0], [37.7, 520.0], [37.8, 520.0], [37.9, 520.0], [38.0, 521.0], [38.1, 521.0], [38.2, 521.0], [38.3, 521.0], [38.4, 521.0], [38.5, 521.0], [38.6, 521.0], [38.7, 521.0], [38.8, 521.0], [38.9, 521.0], [39.0, 522.0], [39.1, 522.0], [39.2, 522.0], [39.3, 522.0], [39.4, 522.0], [39.5, 522.0], [39.6, 522.0], [39.7, 522.0], [39.8, 522.0], [39.9, 522.0], [40.0, 559.0], [40.1, 559.0], [40.2, 559.0], [40.3, 559.0], [40.4, 559.0], [40.5, 559.0], [40.6, 559.0], [40.7, 559.0], [40.8, 559.0], [40.9, 559.0], [41.0, 577.0], [41.1, 577.0], [41.2, 577.0], [41.3, 577.0], [41.4, 577.0], [41.5, 577.0], [41.6, 577.0], [41.7, 577.0], [41.8, 577.0], [41.9, 577.0], [42.0, 592.0], [42.1, 592.0], [42.2, 592.0], [42.3, 592.0], [42.4, 592.0], [42.5, 592.0], [42.6, 592.0], [42.7, 592.0], [42.8, 592.0], [42.9, 592.0], [43.0, 601.0], [43.1, 601.0], [43.2, 601.0], [43.3, 601.0], [43.4, 601.0], [43.5, 601.0], [43.6, 601.0], [43.7, 601.0], [43.8, 601.0], [43.9, 601.0], [44.0, 608.0], [44.1, 608.0], [44.2, 608.0], [44.3, 608.0], [44.4, 608.0], [44.5, 608.0], [44.6, 608.0], [44.7, 608.0], [44.8, 608.0], [44.9, 608.0], [45.0, 616.0], [45.1, 616.0], [45.2, 616.0], [45.3, 616.0], [45.4, 616.0], [45.5, 616.0], [45.6, 616.0], [45.7, 616.0], [45.8, 616.0], [45.9, 616.0], [46.0, 629.0], [46.1, 629.0], [46.2, 629.0], [46.3, 629.0], [46.4, 629.0], [46.5, 629.0], [46.6, 629.0], [46.7, 629.0], [46.8, 629.0], [46.9, 629.0], [47.0, 641.0], [47.1, 641.0], [47.2, 641.0], [47.3, 641.0], [47.4, 641.0], [47.5, 641.0], [47.6, 641.0], [47.7, 641.0], [47.8, 641.0], [47.9, 641.0], [48.0, 651.0], [48.1, 651.0], [48.2, 651.0], [48.3, 651.0], [48.4, 651.0], [48.5, 651.0], [48.6, 651.0], [48.7, 651.0], [48.8, 651.0], [48.9, 651.0], [49.0, 669.0], [49.1, 669.0], [49.2, 669.0], [49.3, 669.0], [49.4, 669.0], [49.5, 669.0], [49.6, 669.0], [49.7, 669.0], [49.8, 669.0], [49.9, 669.0], [50.0, 674.0], [50.1, 674.0], [50.2, 674.0], [50.3, 674.0], [50.4, 674.0], [50.5, 674.0], [50.6, 674.0], [50.7, 674.0], [50.8, 674.0], [50.9, 674.0], [51.0, 685.0], [51.1, 685.0], [51.2, 685.0], [51.3, 685.0], [51.4, 685.0], [51.5, 685.0], [51.6, 685.0], [51.7, 685.0], [51.8, 685.0], [51.9, 685.0], [52.0, 693.0], [52.1, 693.0], [52.2, 693.0], [52.3, 693.0], [52.4, 693.0], [52.5, 693.0], [52.6, 693.0], [52.7, 693.0], [52.8, 693.0], [52.9, 693.0], [53.0, 697.0], [53.1, 697.0], [53.2, 697.0], [53.3, 697.0], [53.4, 697.0], [53.5, 697.0], [53.6, 697.0], [53.7, 697.0], [53.8, 697.0], [53.9, 697.0], [54.0, 705.0], [54.1, 705.0], [54.2, 705.0], [54.3, 705.0], [54.4, 705.0], [54.5, 705.0], [54.6, 705.0], [54.7, 705.0], [54.8, 705.0], [54.9, 705.0], [55.0, 713.0], [55.1, 713.0], [55.2, 713.0], [55.3, 713.0], [55.4, 713.0], [55.5, 713.0], [55.6, 713.0], [55.7, 713.0], [55.8, 713.0], [55.9, 713.0], [56.0, 720.0], [56.1, 720.0], [56.2, 720.0], [56.3, 720.0], [56.4, 720.0], [56.5, 720.0], [56.6, 720.0], [56.7, 720.0], [56.8, 720.0], [56.9, 720.0], [57.0, 726.0], [57.1, 726.0], [57.2, 726.0], [57.3, 726.0], [57.4, 726.0], [57.5, 726.0], [57.6, 726.0], [57.7, 726.0], [57.8, 726.0], [57.9, 726.0], [58.0, 733.0], [58.1, 733.0], [58.2, 733.0], [58.3, 733.0], [58.4, 733.0], [58.5, 733.0], [58.6, 733.0], [58.7, 733.0], [58.8, 733.0], [58.9, 733.0], [59.0, 740.0], [59.1, 740.0], [59.2, 740.0], [59.3, 740.0], [59.4, 740.0], [59.5, 740.0], [59.6, 740.0], [59.7, 740.0], [59.8, 740.0], [59.9, 740.0], [60.0, 747.0], [60.1, 747.0], [60.2, 747.0], [60.3, 747.0], [60.4, 747.0], [60.5, 747.0], [60.6, 747.0], [60.7, 747.0], [60.8, 747.0], [60.9, 747.0], [61.0, 754.0], [61.1, 754.0], [61.2, 754.0], [61.3, 754.0], [61.4, 754.0], [61.5, 754.0], [61.6, 754.0], [61.7, 754.0], [61.8, 754.0], [61.9, 754.0], [62.0, 755.0], [62.1, 755.0], [62.2, 755.0], [62.3, 755.0], [62.4, 755.0], [62.5, 755.0], [62.6, 755.0], [62.7, 755.0], [62.8, 755.0], [62.9, 755.0], [63.0, 755.0], [63.1, 755.0], [63.2, 755.0], [63.3, 755.0], [63.4, 755.0], [63.5, 755.0], [63.6, 755.0], [63.7, 755.0], [63.8, 755.0], [63.9, 755.0], [64.0, 758.0], [64.1, 758.0], [64.2, 758.0], [64.3, 758.0], [64.4, 758.0], [64.5, 758.0], [64.6, 758.0], [64.7, 758.0], [64.8, 758.0], [64.9, 758.0], [65.0, 759.0], [65.1, 759.0], [65.2, 759.0], [65.3, 759.0], [65.4, 759.0], [65.5, 759.0], [65.6, 759.0], [65.7, 759.0], [65.8, 759.0], [65.9, 759.0], [66.0, 778.0], [66.1, 778.0], [66.2, 778.0], [66.3, 778.0], [66.4, 778.0], [66.5, 778.0], [66.6, 778.0], [66.7, 778.0], [66.8, 778.0], [66.9, 778.0], [67.0, 788.0], [67.1, 788.0], [67.2, 788.0], [67.3, 788.0], [67.4, 788.0], [67.5, 788.0], [67.6, 788.0], [67.7, 788.0], [67.8, 788.0], [67.9, 788.0], [68.0, 793.0], [68.1, 793.0], [68.2, 793.0], [68.3, 793.0], [68.4, 793.0], [68.5, 793.0], [68.6, 793.0], [68.7, 793.0], [68.8, 793.0], [68.9, 793.0], [69.0, 794.0], [69.1, 794.0], [69.2, 794.0], [69.3, 794.0], [69.4, 794.0], [69.5, 794.0], [69.6, 794.0], [69.7, 794.0], [69.8, 794.0], [69.9, 794.0], [70.0, 807.0], [70.1, 807.0], [70.2, 807.0], [70.3, 807.0], [70.4, 807.0], [70.5, 807.0], [70.6, 807.0], [70.7, 807.0], [70.8, 807.0], [70.9, 807.0], [71.0, 813.0], [71.1, 813.0], [71.2, 813.0], [71.3, 813.0], [71.4, 813.0], [71.5, 813.0], [71.6, 813.0], [71.7, 813.0], [71.8, 813.0], [71.9, 813.0], [72.0, 819.0], [72.1, 819.0], [72.2, 819.0], [72.3, 819.0], [72.4, 819.0], [72.5, 819.0], [72.6, 819.0], [72.7, 819.0], [72.8, 819.0], [72.9, 819.0], [73.0, 835.0], [73.1, 835.0], [73.2, 835.0], [73.3, 835.0], [73.4, 835.0], [73.5, 835.0], [73.6, 835.0], [73.7, 835.0], [73.8, 835.0], [73.9, 835.0], [74.0, 851.0], [74.1, 851.0], [74.2, 851.0], [74.3, 851.0], [74.4, 851.0], [74.5, 851.0], [74.6, 851.0], [74.7, 851.0], [74.8, 851.0], [74.9, 851.0], [75.0, 872.0], [75.1, 872.0], [75.2, 872.0], [75.3, 872.0], [75.4, 872.0], [75.5, 872.0], [75.6, 872.0], [75.7, 872.0], [75.8, 872.0], [75.9, 872.0], [76.0, 889.0], [76.1, 889.0], [76.2, 889.0], [76.3, 889.0], [76.4, 889.0], [76.5, 889.0], [76.6, 889.0], [76.7, 889.0], [76.8, 889.0], [76.9, 889.0], [77.0, 896.0], [77.1, 896.0], [77.2, 896.0], [77.3, 896.0], [77.4, 896.0], [77.5, 896.0], [77.6, 896.0], [77.7, 896.0], [77.8, 896.0], [77.9, 896.0], [78.0, 912.0], [78.1, 912.0], [78.2, 912.0], [78.3, 912.0], [78.4, 912.0], [78.5, 912.0], [78.6, 912.0], [78.7, 912.0], [78.8, 912.0], [78.9, 912.0], [79.0, 914.0], [79.1, 914.0], [79.2, 914.0], [79.3, 914.0], [79.4, 914.0], [79.5, 914.0], [79.6, 914.0], [79.7, 914.0], [79.8, 914.0], [79.9, 914.0], [80.0, 918.0], [80.1, 918.0], [80.2, 918.0], [80.3, 918.0], [80.4, 918.0], [80.5, 918.0], [80.6, 918.0], [80.7, 918.0], [80.8, 918.0], [80.9, 918.0], [81.0, 921.0], [81.1, 921.0], [81.2, 921.0], [81.3, 921.0], [81.4, 921.0], [81.5, 921.0], [81.6, 921.0], [81.7, 921.0], [81.8, 921.0], [81.9, 921.0], [82.0, 923.0], [82.1, 923.0], [82.2, 923.0], [82.3, 923.0], [82.4, 923.0], [82.5, 923.0], [82.6, 923.0], [82.7, 923.0], [82.8, 923.0], [82.9, 923.0], [83.0, 924.0], [83.1, 924.0], [83.2, 924.0], [83.3, 924.0], [83.4, 924.0], [83.5, 924.0], [83.6, 924.0], [83.7, 924.0], [83.8, 924.0], [83.9, 924.0], [84.0, 924.0], [84.1, 924.0], [84.2, 924.0], [84.3, 924.0], [84.4, 924.0], [84.5, 924.0], [84.6, 924.0], [84.7, 924.0], [84.8, 924.0], [84.9, 924.0], [85.0, 929.0], [85.1, 929.0], [85.2, 929.0], [85.3, 929.0], [85.4, 929.0], [85.5, 929.0], [85.6, 929.0], [85.7, 929.0], [85.8, 929.0], [85.9, 929.0], [86.0, 951.0], [86.1, 951.0], [86.2, 951.0], [86.3, 951.0], [86.4, 951.0], [86.5, 951.0], [86.6, 951.0], [86.7, 951.0], [86.8, 951.0], [86.9, 951.0], [87.0, 1094.0], [87.1, 1094.0], [87.2, 1094.0], [87.3, 1094.0], [87.4, 1094.0], [87.5, 1094.0], [87.6, 1094.0], [87.7, 1094.0], [87.8, 1094.0], [87.9, 1094.0], [88.0, 1097.0], [88.1, 1097.0], [88.2, 1097.0], [88.3, 1097.0], [88.4, 1097.0], [88.5, 1097.0], [88.6, 1097.0], [88.7, 1097.0], [88.8, 1097.0], [88.9, 1097.0], [89.0, 1106.0], [89.1, 1106.0], [89.2, 1106.0], [89.3, 1106.0], [89.4, 1106.0], [89.5, 1106.0], [89.6, 1106.0], [89.7, 1106.0], [89.8, 1106.0], [89.9, 1106.0], [90.0, 1108.0], [90.1, 1108.0], [90.2, 1108.0], [90.3, 1108.0], [90.4, 1108.0], [90.5, 1108.0], [90.6, 1108.0], [90.7, 1108.0], [90.8, 1108.0], [90.9, 1108.0], [91.0, 1121.0], [91.1, 1121.0], [91.2, 1121.0], [91.3, 1121.0], [91.4, 1121.0], [91.5, 1121.0], [91.6, 1121.0], [91.7, 1121.0], [91.8, 1121.0], [91.9, 1121.0], [92.0, 1126.0], [92.1, 1126.0], [92.2, 1126.0], [92.3, 1126.0], [92.4, 1126.0], [92.5, 1126.0], [92.6, 1126.0], [92.7, 1126.0], [92.8, 1126.0], [92.9, 1126.0], [93.0, 1130.0], [93.1, 1130.0], [93.2, 1130.0], [93.3, 1130.0], [93.4, 1130.0], [93.5, 1130.0], [93.6, 1130.0], [93.7, 1130.0], [93.8, 1130.0], [93.9, 1130.0], [94.0, 1130.0], [94.1, 1130.0], [94.2, 1130.0], [94.3, 1130.0], [94.4, 1130.0], [94.5, 1130.0], [94.6, 1130.0], [94.7, 1130.0], [94.8, 1130.0], [94.9, 1130.0], [95.0, 1132.0], [95.1, 1132.0], [95.2, 1132.0], [95.3, 1132.0], [95.4, 1132.0], [95.5, 1132.0], [95.6, 1132.0], [95.7, 1132.0], [95.8, 1132.0], [95.9, 1132.0], [96.0, 1134.0], [96.1, 1134.0], [96.2, 1134.0], [96.3, 1134.0], [96.4, 1134.0], [96.5, 1134.0], [96.6, 1134.0], [96.7, 1134.0], [96.8, 1134.0], [96.9, 1134.0], [97.0, 1139.0], [97.1, 1139.0], [97.2, 1139.0], [97.3, 1139.0], [97.4, 1139.0], [97.5, 1139.0], [97.6, 1139.0], [97.7, 1139.0], [97.8, 1139.0], [97.9, 1139.0], [98.0, 1143.0], [98.1, 1143.0], [98.2, 1143.0], [98.3, 1143.0], [98.4, 1143.0], [98.5, 1143.0], [98.6, 1143.0], [98.7, 1143.0], [98.8, 1143.0], [98.9, 1143.0], [99.0, 1149.0], [99.1, 1149.0], [99.2, 1149.0], [99.3, 1149.0], [99.4, 1149.0], [99.5, 1149.0], [99.6, 1149.0], [99.7, 1149.0], [99.8, 1149.0], [99.9, 1149.0]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 16.0, "series": [{"data": [[0.0, 4.0], [1100.0, 11.0], [300.0, 7.0], [600.0, 11.0], [700.0, 16.0], [100.0, 9.0], [200.0, 9.0], [400.0, 7.0], [800.0, 8.0], [900.0, 9.0], [500.0, 7.0], [1000.0, 2.0]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 36.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 64.0, "series": [{"data": [[0.0, 36.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 64.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.75926072E12, "maxY": 35.73972602739725, "series": [{"data": [[1.75926072E12, 35.73972602739725], [1.75926078E12, 14.0]], "isOverall": false, "label": "Thread GroupMy Test100PUTcharacter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75926078E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.0, "maxY": 1149.0, "series": [{"data": [[5.0, 5.0], [8.0, 1149.0], [13.0, 1132.0], [28.0, 1134.0], [32.0, 1139.0], [39.0, 35.0], [53.0, 1130.0], [62.0, 1108.0], [65.0, 1094.0], [83.0, 1126.0], [86.0, 1143.0], [91.0, 80.0], [107.0, 1130.0], [117.0, 1121.0], [129.0, 118.0], [143.0, 130.0], [151.0, 1097.0], [155.0, 140.0], [154.0, 921.0], [152.0, 1106.0], [162.0, 147.0], [173.0, 154.0], [172.0, 951.0], [186.0, 166.0], [184.0, 929.0], [198.0, 180.0], [193.0, 923.0], [206.0, 187.0], [201.0, 914.0], [210.0, 918.0], [217.0, 195.0], [228.0, 205.0], [225.0, 924.0], [237.0, 212.0], [247.0, 222.0], [244.0, 924.0], [253.0, 912.0], [259.0, 234.0], [268.0, 896.0], [272.0, 245.0], [281.0, 252.0], [276.0, 889.0], [289.0, 258.0], [298.0, 268.0], [302.0, 851.0], [290.0, 872.0], [310.0, 272.0], [312.0, 835.0], [333.0, 556.5], [323.0, 819.0], [344.0, 807.0], [352.0, 320.0], [360.0, 794.0], [369.0, 335.0], [383.0, 347.0], [379.0, 788.0], [368.0, 793.0], [399.0, 368.0], [392.0, 778.0], [413.0, 381.0], [431.0, 392.0], [426.0, 759.0], [425.0, 758.0], [424.0, 755.0], [440.0, 754.0], [434.0, 755.0], [459.0, 418.0], [462.0, 740.0], [451.0, 747.0], [469.0, 425.0], [473.0, 733.0], [488.0, 443.0], [495.0, 720.0], [484.0, 726.0], [500.0, 458.0], [507.0, 713.0], [516.0, 470.0], [527.0, 476.0], [539.0, 693.0], [530.0, 697.0], [517.0, 705.0], [546.0, 494.0], [560.0, 507.0], [572.0, 669.0], [562.0, 674.0], [550.0, 685.0], [579.0, 522.0], [588.0, 521.0], [596.0, 520.0], [604.0, 629.0], [592.0, 641.0], [583.0, 651.0], [616.0, 559.0], [636.0, 577.0], [639.0, 601.0], [628.0, 608.0], [619.0, 616.0], [650.0, 592.0], [1.0, 5.0]], "isOverall": false, "label": "HTTP Request character", "isController": false}, {"data": [[332.3199999999999, 620.2399999999998]], "isOverall": false, "label": "HTTP Request character-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 650.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 99.9, "minX": 1.75926072E12, "maxY": 327.28333333333336, "series": [{"data": [[1.75926072E12, 327.28333333333336], [1.75926078E12, 121.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75926072E12, 270.1], [1.75926078E12, 99.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75926078E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 476.1095890410958, "minX": 1.75926072E12, "maxY": 1009.9259259259259, "series": [{"data": [[1.75926072E12, 476.1095890410958], [1.75926078E12, 1009.9259259259259]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75926078E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 476.1095890410958, "minX": 1.75926072E12, "maxY": 1009.9259259259259, "series": [{"data": [[1.75926072E12, 476.1095890410958], [1.75926078E12, 1009.9259259259259]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75926078E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.11111111111111112, "minX": 1.75926072E12, "maxY": 0.30136986301369884, "series": [{"data": [[1.75926072E12, 0.30136986301369884], [1.75926078E12, 0.11111111111111112]], "isOverall": false, "label": "HTTP Request character", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75926078E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.75926072E12, "maxY": 1149.0, "series": [{"data": [[1.75926072E12, 819.0], [1.75926078E12, 1149.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75926072E12, 5.0], [1.75926078E12, 835.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75926072E12, 770.4000000000002], [1.75926078E12, 1139.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75926072E12, 819.0], [1.75926078E12, 1149.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75926072E12, 507.0], [1.75926078E12, 951.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75926072E12, 797.9], [1.75926078E12, 1146.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75926078E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 187.0, "minX": 23.0, "maxY": 951.0, "series": [{"data": [[23.0, 187.0], [50.0, 646.0], [27.0, 951.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 187.0, "minX": 23.0, "maxY": 951.0, "series": [{"data": [[23.0, 187.0], [50.0, 646.0], [27.0, 951.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75926072E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75926072E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75926072E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.75926072E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.75926072E12, 1.2166666666666666], [1.75926078E12, 0.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75926078E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.75926072E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.75926072E12, 1.2166666666666666], [1.75926078E12, 0.45]], "isOverall": false, "label": "HTTP Request character-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75926078E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.75926072E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.75926072E12, 1.2166666666666666], [1.75926078E12, 0.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75926078E12, "title": "Total Transactions Per Second"}},
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

