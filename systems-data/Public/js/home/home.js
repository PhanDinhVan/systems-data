$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    getSize();
    let _this = e.target // newly activated tab
    //e.relatedTarget // previous active tab
    if ($(_this).attr('href') == "#systems") {
        drawRelationShip();
    }
})

function drawRelationShip() {

    //AMPTOPS and PLM
    var line = $('#line');
    var div1 = $('#one');
    var div2 = $('#two');
    var text = $('#text');

    var x1 = div1.offset().left + (div1.width() / 2);
    var y1 = div1.offset().top + (div1.height() / 2);
    var x2 = div2.offset().left + (div2.width() / 2);
    var y2 = div2.offset().top + (div2.height() / 2);

    line.attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2).attr("marker-end", "url(#triangle)").attr("marker-start", "url(#dot)");

    text.attr('x', (x1 + x2) / 2).attr('y', (y1 + y2) / 2).attr("transform", "translate(0, -15)");

    //PLM and OPS
    var line1 = $('#line1');
    var div1_1 = $('#one1');
    var div2_1 = $('#two1');
    var text1 = $('#text1');

    var x1_1 = div1_1.offset().left + (div1_1.width() / 2);
    var y1_1 = div1_1.offset().top + (div1_1.height() / 2);
    var x2_1 = div2_1.offset().left + (div2_1.width() / 2);
    var y2_1 = div2_1.offset().top + (div2_1.height() / 2);

    line1.attr('x1', x1_1).attr('y1', y1_1).attr('x2', x2_1).attr('y2', y2_1).attr("marker-end", "url(#triangle1)").attr("marker-start", "url(#dot1)");

    text1.attr('x', (x1_1 + x2_1) / 2).attr('y', (y1_1 + y2_1) / 2).attr("transform", "translate(0, -15)");

    //OPS to TPM
    var line2 = $('#line2');
    var div1_2 = $('#one2');
    var div2_2 = $('#two2');
    var text2 = $('#text2');

    var x1_2 = div1_2.offset().left + (div1_2.width() / 2);
    var y1_2 = div1_2.offset().top + (div1_2.height() / 2);
    var x2_2 = div2_2.offset().left + (div2_2.width() / 2);
    var y2_2 = div2_2.offset().top + (div2_2.height() / 2);

    line2.attr('x1', x1_2).attr('y1', y1_2).attr('x2', x2_2).attr('y2', y2_2).attr("marker-end", "url(#triangle2)");

    text2.attr('x', (x1_2 + x2_2) / 2).attr('y', (y1_2 + y2_2) / 2).attr("transform", "translate(0, -15)");

    //OPS and MES
    var line3 = $('#line3');
    var div1_3 = $('#from');
    var div2_3 = $('#to');
    var text3 = $('#text3');

    var x1_3 = div1_3.offset().left + (div1_3.width() / 2);
    var y1_3 = div1_3.offset().top + (div1_3.height() / 2);
    var x2_3 = div2_3.offset().left + (div2_3.width() / 2);
    var y2_3 = div2_3.offset().top + (div2_3.height() / 2);

    line3.attr('x1', x1_3).attr('y1', y1_3).attr('x2', x2_3).attr('y2', y2_3).attr("marker-end", "url(#triangle3)").attr("marker-start", "url(#dot3)");

    var wid3 = y2_3 - y1_3;
    var diff3 = wid3 / 2;
    text3.attr('x', x1_3 - 20).attr('y', y1_3 + diff3);

    //TPM and DGS
    var line4 = $('#line4');
    var div1_4 = $('#from1');
    var div2_4 = $('#to1');
    var text4 = $('#text4');
    var text4_1 = $('#text4_1');

    var x1_4 = div1_4.offset().left + (div1_4.width() / 2);
    var y1_4 = div1_4.offset().top + (div1_4.height() / 2);
    var x2_4 = div2_4.offset().left + (div2_4.width() / 2);
    var y2_4 = div2_4.offset().top + (div2_4.height() / 2);

    line4.attr('x1', x1_4).attr('y1', y1_4).attr('x2', x2_4).attr('y2', y2_4).attr("marker-end", "url(#triangle4)").attr("marker-start", "url(#dot4)");

    var wid4 = y2_4 - y1_4;
    var diff4 = wid4 / 2;
    text4.attr('x', x1_4 - 20).attr('y', y1_4 + diff4);
    text4_1.attr('x', x1_4 + 20).attr('y', y1_4 + diff4);

    //AOMTOPS to MRP
    //var line5 = $('#line5');
    //var div1_5 = $('#from2');
    //var div2_5 = $('#to2');
    //var text5 = $('#text5');

    //var x1_5 = div1_5.offset().left + (div1_5.width() / 2);
    //var y1_5 = div1_5.offset().top + (div1_5.height() / 2);
    //var x2_5 = div2_5.offset().left + (div2_5.width() / 2);
    //var y2_5 = div2_5.offset().top + (div2_5.height() / 2);

    //line5.attr('x1', x1_5).attr('y1', y1_5).attr('x2', x2_5).attr('y2', y2_5).attr("marker-end", "url(#triangle5)");

    //var wid5 = y2_5 - y1_5;
    //var diff5 = wid5 / 2;
    //text5.attr('x', x1_5 + 20).attr('y', y1_5 + diff5);

    //MRP to MTS
    var line6 = $('#line6');
    var div1_6 = $('#from3');
    var div2_6 = $('#to3');
    var text6 = $('#text6');

    var x1_6 = div1_6.offset().left + (div1_6.width() / 2);
    var y1_6 = div1_6.offset().top + (div1_6.height() / 2);
    var x2_6 = div2_6.offset().left + (div2_6.width() / 2);
    var y2_6 = div2_6.offset().top + (div2_6.height() / 2);

    line6.attr('x1', x1_6).attr('y1', y1_6).attr('x2', x2_6).attr('y2', y2_6).attr("marker-end", "url(#triangle6)");

    var wid6 = y2_6 - y1_6;
    var diff6 = wid6 / 2;
    text6.attr('x', x1_6 - 20).attr('y', y1_6 + diff6);

    //AOMTOPS Production and WMS
    var line7 = $('#line7');
    var div1_7 = $('#from4');
    var div2_7 = $('#to4');

    var x1_7 = div1_7.offset().left + (div1_7.width() / 2);
    var y1_7 = div1_7.offset().top + (div1_7.height() / 2);
    var x2_7 = div2_7.offset().left + (div2_7.width() / 2);
    var y2_7 = div2_7.offset().top + (div2_7.height() / 2);

    line7.attr('x1', x1_7).attr('y1', y1_7).attr('x2', x2_7).attr('y2', y2_7).attr("marker-end", "url(#triangle7)").attr("marker-start", "url(#dot7)");

    //PCM and MES
    var line8 = $('#line8');
    var div1_8 = $('#from5');
    var div2_8 = $('#to5');
    var text8 = $('#text8');

    var x1_8 = div1_8.offset().left + (div1_8.width() / 2);
    var y1_8 = div1_8.offset().top + (div1_8.height() / 2);
    var x2_8 = div2_8.offset().left + (div2_8.width() / 2);
    var y2_8 = div2_8.offset().top + (div2_8.height() / 2);

    line8.attr('x1', x1_8).attr('y1', y1_8).attr('x2', x2_8).attr('y2', y2_8).attr("marker-start", "url(#dot8)").attr("marker-end", "url(#triangle8)");

    var wid8 = y2_8 - y1_8;
    var diff8 = wid8 / 2;
    text8.attr('x', x1_8 + 20).attr('y', y1_8 + diff8);

    //MRP to AOMTOPS Production
    var line9 = $('#line9');
    var div1_9 = $('#one3');
    var div2_9 = $('#two3');
    var text9 = $('#text9');

    var x1_9 = div1_9.offset().left + (div1_9.width() / 2);
    var y1_9 = div1_9.offset().top + (div1_9.height() / 2);
    var x2_9 = div2_9.offset().left + (div2_9.width() / 2);
    var y2_9 = div2_9.offset().top + (div2_9.height() / 2);

    line9.attr('x1', x1_9).attr('y1', y1_9).attr('x2', x2_9).attr('y2', y2_9).attr("marker-end", "url(#triangle9)").attr("marker-start", "url(#dot9)");

    var a9 = (y2_9 - y1_9) / (x2_9 - x1_9) * 180 / 3.14;
    text9.attr('x', (x1_9 + x2_9) / 2).attr('y', (y1_9 + y2_9) / 2).attr("transform", "translate(0, -15) rotate(" + a9 + "," + (x1_9 + x2_9) / 2 + "," + (y1_9 + y2_9) / 2 + ")");

    //DGS to MES
    var line10 = $('#line10');
    var div1_10 = $('#one4');
    var div2_10 = $('#two4');
    var text10 = $('#text10');

    var x1_10 = div1_10.offset().left + (div1_10.width() / 2);
    var y1_10 = div1_10.offset().top + (div1_10.height() / 2);
    var x2_10 = div2_10.offset().left + (div2_10.width() / 2);
    var y2_10 = div2_10.offset().top + (div2_10.height() / 2);

    line10.attr('x1', x1_10).attr('y1', y1_10).attr('x2', x2_10).attr('y2', y2_10).attr("marker-start", "url(#dot10)");

    text10.attr('x', (x1_10 + x2_10) / 2).attr('y', (y1_10 + y2_10) / 2).attr("transform", "translate(0, -15)");

    //MTS to WMS
    var line11 = $('#line11');
    var div1_11 = $('#one5');
    var div2_11 = $('#two5');
    var text11 = $('#text11');

    var x1_11 = div1_11.offset().left + (div1_11.width() / 2);
    var y1_11 = div1_11.offset().top + (div1_11.height() / 2);
    var x2_11 = div2_11.offset().left + (div2_11.width() / 2);
    var y2_11 = div2_11.offset().top + (div2_11.height() / 2);

    line11.attr('x1', x1_11).attr('y1', y1_11).attr('x2', x2_11).attr('y2', y2_11).attr("marker-end", "url(#dot11)");

    text11.attr('x', (x1_11 + x2_11) / 2).attr('y', (y1_11 + y2_11) / 2).attr("transform", "translate(0, -15)");

    //TPM to MES
    var line12 = $('#line12');
    var div1_12 = $('#from6');
    var div2_12 = $('#to6');
    var text12 = $('#text12');

    var x1_12 = div1_12.offset().left + (div1_12.width() / 2);
    var y1_12 = div1_12.offset().top + (div1_12.height() / 2);
    var x2_12 = div2_12.offset().left + (div2_12.width() / 2);
    var y2_12 = div2_12.offset().top + (div2_12.height() / 2);

    line12.attr('x1', x1_12).attr('y1', y1_12).attr('x2', x2_12).attr('y2', y2_12).attr("marker-end", "url(#triangle12)");

    var a12 = (y2_12 - y1_12) / (x2_12 - x1_12) * 180 / 3.14;
    text12.attr('x', (x1_12 + x2_12) / 2 - 50).attr('y', (y1_12 + y2_12) / 2).attr("transform", "translate(0, -15) rotate(" + a12 + "," + (x1_12 + x2_12) / 2 + "," + (y1_12 + y2_12) / 2 + ")");

    //MRP and WMS
    var line13 = $('#line13');
    var div1_13 = $('#from7');
    var div2_13 = $('#to7');
    var text13 = $('#text13');
    var text13_2 = $('#text13_2');

    var x1_13 = div1_13.offset().left + (div1_13.width() / 2);
    var y1_13 = div1_13.offset().top + (div1_13.height() / 2);
    var x2_13 = div2_13.offset().left + (div2_13.width() / 2);
    var y2_13 = div2_13.offset().top + (div2_13.height() / 2);

    line13.attr('x1', x1_13).attr('y1', y1_13).attr('x2', x2_13).attr('y2', y2_13).attr("marker-end", "url(#triangle13)").attr("marker-start", "url(#dot13)");

    //var wid13 = x2_13 - x1_13;
    //var diff13 = wid13 > 200 ? wid13 / 3 : wid13 / 5;
    var a13 = (y2_13 - y1_13) / (x2_13 - x1_13) * 180 / 3.14;
    //var b13 = wid13 > 200 ? 50 : 0;
    text13.attr('x', (x1_13 + x2_13) / 2).attr('y', (y1_13 + y2_13) / 2).attr("transform", "translate(0, -15) rotate(" + a13 + "," + (x1_13 + x2_13) / 2 + "," + (y1_13 + y2_13) / 2 + ")");
    text13_2.attr('x', (x1_13 + x2_13) / 2 - 50).attr('y', (y1_13 + y2_13) / 2).attr("transform", "translate(0, 30) rotate(" + a13 + "," + (x1_13 + x2_13) / 2 + "," + (y1_13 + y2_13) / 2 + ")");

    //AOMTOPS Production to PCM
    var line14 = $('#line14');
    var div1_14 = $('#from8');
    var div2_14 = $('#to8');
    var text14 = $('#text14');

    var x1_14 = div1_14.offset().left + (div1_14.width() / 2);
    var y1_14 = div1_14.offset().top + (div1_14.height() / 2);
    var x2_14 = div2_14.offset().left + (div2_14.width() / 2);
    var y2_14 = div2_14.offset().top + (div2_14.height() / 2);

    line14.attr('x1', x1_14).attr('y1', y1_14).attr('x2', x2_14).attr('y2', y2_14).attr("marker-end", "url(#triangle14)");

    var a14 = (y2_14 - y1_14) / (x2_14 - x1_14) * 180 / 3.14;
    text14.attr('x', (x1_14 + x2_14) / 2 - 20).attr('y', (y1_14 + y2_14) / 2).attr("transform", "translate(0, -15) rotate(" + a14 + "," + (x1_14 + x2_14) / 2 + "," + (y1_14 + y2_14) / 2 + ")");

    //HRM to MES
    var line15 = $('#line15');
    var div1_15 = $('#from9');
    var div2_15 = $('#to9');
    var text15 = $('#text15');
    var text15_2 = $('#text15_2');

    var x1_15 = div1_15.offset().left + (div1_15.width() / 2);
    var y1_15 = div1_15.offset().top + (div1_15.height() / 2);
    var x2_15 = div2_15.offset().left + (div2_15.width() / 2);
    var y2_15 = div2_15.offset().top + (div2_15.height() / 2);

    line15.attr('x1', x1_15).attr('y1', y1_15).attr('x2', x2_15).attr('y2', y2_15).attr("marker-start", "url(#dot15)");

    var diff15 = x2_15 - x1_15 > 205 ? 10 : 15;
    var a15 = (y2_15 - y1_15) / (x2_15 - x1_15) * 180 / 3.14 - diff15;
    text15.attr('x', (x1_15 + x2_15) / 2).attr('y', (y1_15 + y2_15) / 2).attr("transform", "translate(0, -15) rotate(" + a15 + "," + (x1_15 + x2_15) / 2 + "," + (y1_15 + y2_15) / 2 + ")");
    text15_2.attr('x', (x1_15 + x2_15) / 2).attr('y', (y1_15 + y2_15) / 2).attr("transform", "translate(0, 30) rotate(" + a15 + "," + (x1_15 + x2_15) / 2 + "," + (y1_15 + y2_15) / 2 + ")");

    //WMS to MES
    var line16 = $('#line16');
    var div1_16 = $('#from10');
    var div2_16 = $('#to10');
    var text16 = $('#text16');

    var x1_16 = div1_16.offset().left + (div1_16.width() / 2);
    var y1_16 = div1_16.offset().top + (div1_16.height() / 2);
    var x2_16 = div2_16.offset().left + (div2_16.width() / 2);
    var y2_16 = div2_16.offset().top + (div2_16.height() / 2);

    line16.attr('x1', x1_16).attr('y1', y1_16).attr('x2', x2_16).attr('y2', y2_16).attr("marker-end", "url(#triangle16)");

    var wid16 = x2_16 - x1_16;
    var diff16 = wid16 > 200 ? -30 : 30;
    var a16 = (y2_16 - y1_16) / (x2_16 - x1_16) * 180 / 3.14 + 15;
    text16.attr('x', (x1_16 + x2_16) / 2 + diff16).attr('y', (y1_16 + y2_16) / 2).attr("transform", "translate(0, -15) rotate(" + a16 + "," + (x1_16 + x2_16) / 2 + "," + (y1_16 + y2_16) / 2 + ")");

    //HRM to DGS
    var line17 = $('#line17');
    var div1_17 = $('#one17');
    var div2_17 = $('#two17');
    var text17 = $('#text17');

    var x1_17 = div1_17.offset().left + (div1_17.width() / 2);
    var y1_17 = div1_17.offset().top + (div1_17.height() / 2);
    var x2_17 = div2_17.offset().left + (div2_17.width() / 2);
    var y2_17 = div2_17.offset().top + (div2_17.height() / 2);

    line17.attr('x1', x1_17).attr('y1', y1_17).attr('x2', x2_17).attr('y2', y2_17).attr("marker-end", "url(#triangle17)");

    var wid17 = y2_17 - y1_17;
    var diff17 = wid17 / 2;
    text17.attr('x', x1_17 + 20).attr('y', y1_17 + diff17);

    //MRP to MES
    var line18 = $('#line18');
    var div1_18 = $('#one18');
    var div2_18 = $('#two18');
    var text18 = $('#text18');

    var x1_18 = div1_18.offset().left + (div1_18.width() / 2);
    var y1_18 = div1_18.offset().top + (div1_18.height() / 2);
    var x2_18 = div2_18.offset().left + (div2_18.width() / 2);
    var y2_18 = div2_18.offset().top + (div2_18.height() / 2);

    line18.attr('x1', x1_18).attr('y1', y1_18).attr('x2', x2_18).attr('y2', y2_18).attr("marker-end", "url(#dot18)");

    text18.attr('x', (x1_18 + x2_18) / 2).attr('y', (y1_18 + y2_18) / 2).attr("transform", "translate(0, -15)");

    //AOMTOPS Production to MES
    var line19 = $('#line19');
    var div1_19 = $('#one19');
    var div2_19 = $('#two19');
    var text19 = $('#text19');

    var x1_19 = div1_19.offset().left + (div1_19.width() / 2);
    var y1_19 = div1_19.offset().top + (div1_19.height() / 2);
    var x2_19 = div2_19.offset().left + (div2_19.width() / 2);
    var y2_19 = div2_19.offset().top + (div2_19.height() / 2);

    line19.attr('x1', x1_19).attr('y1', y1_19).attr('x2', x2_19).attr('y2', y2_19).attr("marker-end", "url(#triangle19)");

    var a19 = (y2_19 - y1_19) / (x2_19 - x1_19) * 180 / 3.14 + 5;
    text19.attr('x', (x1_19 + x2_19) / 2 ).attr('y', (y1_19 + y2_19) / 2).attr("transform", "translate(0, -15) rotate(" + a19 + "," + (x1_19 + x2_19) / 2 + "," + (y1_19 + y2_19) / 2 + ")");
}

//when change screen auto draw agian svg
window.addEventListener('resize', drawRelationShip);

function getSize() {
    console.log('vo roi');
    return window.getComputedStyle(document.body, '::before')
        .getPropertyValue('content')
        .replace(/["']/g, '');
}