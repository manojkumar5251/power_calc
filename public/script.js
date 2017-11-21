$(document).ready(function() {
  var socket = io();

  let bulb = 1,
    cfl = 1,
    tube_light = 1,
    frige = 1,
    window_ac = 1,
    split_ac = 1,
    fan = 1,
    projector = 1,
    photocopier = 1,
    plasma = 1,
    lcdtv = 1,
    printer = 1,
    scanner = 1,
    fax = 1,
    audio_sys = 1,
    i = 1,
    water_heater = 1;

  $("#bulb_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element + '<select name="bulb-' + bulb + '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="40">40 Watt</option>';
    element = element + '<option value="60">60 Watt</option>';
    element = element + '<option value="100">100 Watt</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="bulb-' +
      bulb +
      '-value"class="form-control" ></div>';
    element = element + "</div>";
    if (bulb < 3) {
      bulb = bulb + 1;
      jQuery("#bulb").append(element);
    }
  });

  $("#cfl_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element = element + '<select name="cfl-' + cfl + '"class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="11">11 Watt</option>';
    element = element + '<option value="22">22 Watt</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="cfl-' +
      cfl +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (cfl < 2) {
      cfl = cfl + 1;
      $("#cfl").append(element);
    }
  });

  $("#tube_light_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element +
      '<select name="tube_light-' +
      tube_light +
      '"class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="40">40 Watt</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="tube_light-' +
      tube_light +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (tube_light < 1) {
      tube_light = tube_light + 1;
      $("#tube_light").append(element);
    }
  });

  $("#frige_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element + '<select name="frige-' + frige + '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="62">165 Liters</option>';
    element = element + '<option value="63">Frost Free 480L </option>';
    element = element + '<option value="64">Non Frost Free 360L</option>';
    element = element + '<option value="65">Side by Side 560L</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="frige-' +
      frige +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (frige < 4) {
      frige = frige + 1;
      $("#frige").append(element);
    }
  });

  $("#window_ac_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element +
      '<select name="window_ac-' +
      window_ac +
      '"class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="67">0.75 Ton AC</option>';
    element = element + '<option value="68">1 Ton AC</option>';
    element = element + '<option value="69">1.5 Ton AC</option>';
    element = element + '<option value="70">2 Ton AC</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="window_ac-' +
      window_ac +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (window_ac < 4) {
      window_ac = window_ac + 1;
      $("#window_ac").append(element);
    }
  });

  $("#split_ac_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element +
      '<select name="split_ac-' +
      split_ac +
      '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="72">1 Ton AC</option>';
    element = element + '<option value="73">2 Ton AC</option>';
    element = element + '<option value="74">3 Ton AC</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="split_ac-' +
      split_ac +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (split_ac < 3) {
      split_ac = split_ac + 1;
      $("#split_ac").append(element);
    }
  });

  $("#fan_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element = element + '<select name="fan-' + fan + '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="76">Ceiling Fan</option>';
    element = element + '<option value="77">Table Fan</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="fan-' +
      fan +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (fan < 2) {
      fan = fan + 1;
      $("#fan").append(element);
    }
  });

  $("#projector_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element +
      '<select name="projector-' +
      projector +
      '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="79">Projector</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="projector-' +
      projector +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (projector < 1) {
      projector = projector + 1;
      $("#projector").append(element);
    }
  });

  $("#photocopier_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element +
      '<select name="photocopier-' +
      photocopier +
      '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="81">Photocopier(Small) </option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="photocopier-' +
      photocopier +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (photocopier < 1) {
      photocopier = photocopier + 1;
      $("#photocopier").append(element);
    }
  });

  $("#plasma_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element + '<select name="plasma-' + plasma + '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="83">42 inch Plasma</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="plasma-' +
      plasma +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (plasma < 1) {
      plasma = plasma + 1;
      $("#plasma").append(element);
    }
  });

  $("#lcdtv_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element + '<select name="lcdtv-' + lcdtv + '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="85">20 inch LCD</option>';
    element = element + '<option value="86">27 inch LCD</option>';
    element = element + '<option value="87">32 inch LCD</option>';
    element = element + '<option value="88">37 inch LCD</option>';
    element = element + '<option value="89">42 inch LCD</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="lcdtv-' +
      lcdtv +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (lcdtv < 5) {
      lcdtv = lcdtv + 1;
      $("#lcdtv").append(element);
    }
  });

  $("#printer_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element + '<select name="printer-' + printer + '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="91">132 COL DMP</option>';
    element = element + '<option value="92">80 COL DMP</option>';
    element = element + '<option value="93">INKJET Printer(Small)</option>';
    element = element + '<option value="94">INKJET Printer(Big)</option>';
    element = element + '<option value="95">LASER Printer(Small)</option>';
    element = element + '<option value="96">LASER Printer(Big)</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="printer-' +
      printer +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (printer < 6) {
      printer = printer + 1;
      $("#printer").append(element);
    }
  });

  $("#scanner_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element + '<select name="scanner-' + scanner + '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="98">Scanner (Small)</option>';
    element = element + '<option value="99">Scanner (Big)</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="scanner-' +
      scanner +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (scanner < 2) {
      scanner = scanner + 1;
      $("#scanner").append(element);
    }
  });

  $("#fax_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element = element + '<select name="fax-' + fax + '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="101">Fax Machine</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="fax-' +
      fax +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (fax < 1) {
      fax = fax + 1;
      $("#fax").append(element);
    }
  });
  water_heater_plus;

  $("#audio_sys_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element +
      '<select name="audio_sys-' +
      audio_sys +
      '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="103">Music System</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="audio_sys-' +
      audio_sys +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (audio_sys < 1) {
      audio_sys = audio_sys + 1;
      $("#audio_sys").append(element);
    }
  });

  $("#water_heater_plus").click(function() {
    var element = '<br /><div class="row">';
    element = element + '<div class="col-sm-3"></div>';
    element = element + '<div class="col-sm-2"></div>';
    element = element + '<div class="col-sm-4">';
    element =
      element +
      '<select name="water_heater-' +
      water_heater +
      '" class="form-control" >';
    element = element + '<option selected="selected" value="0">Select</option>';
    element = element + '<option value="2000">2000 Watt</option>';
    element = element + '<option value="1000">1000 Watt</option>';
    element = element + "</select>";
    element = element + "</div>";
    element =
      element +
      '<div class="col-sm-2"><input type="text" name="water_heater-' +
      water_heater +
      '-value" class="form-control" ></div>';
    element = element + "</div>";
    if (water_heater < 2) {
      water_heater = water_heater + 1;
      $("#water_heater").append(element);
    }
  });

  $("#calc").click(function() {
    socket.emit("data", $("form").serializeArray());
  });
  socket.on("result", result => {
    $("#serialize").css("display", "block");
    $("#txt").text(result + " Watts");
    $("body").scrollTop($("body").get(0).scrollHeight);
  });
});
