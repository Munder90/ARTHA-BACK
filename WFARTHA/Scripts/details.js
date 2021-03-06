﻿//Variables globales
var firmaVal = "";

$(document).ready(function () {

    //Inicializar las tabs
    $('#tabs').tabs();

    $('#Contable_cont').change(function () {
        tamanosRenglones();
    });

    //Lejgg 21-11-2018---------------------->
    //Nombre del autorizador ya establecido
    //MGC 22-11-2018.2 Cadena de autorización----------------------------------------------------------------------->
    //var nDoc = $('#refHd').val();
    //datosCadena(nDoc);
    //Lejgg 21-11-2018----------------------<
    //MGC 22-11-2018.2 Cadena de autorización-----------------------------------------------------------------------<
    //Iniciar todos los selects
    var elem = document.querySelectorAll('select');
    var instance = M.Select.init(elem, []);
    formatoTabla();
    $('#table_sop').DataTable({

        language: {
            //"url": "../Scripts/lang/@Session["spras"].ToString()" + ".json"
            "url": "../../Scripts/lang/ES.json"
        },
        "paging": false,
        "info": false,
        "searching": false,
        "columns": [
            {
                "className": 'select_row',
                "data": null,
                "defaultContent": '',
                "orderable": false
            },
            {
                "name": 'OPC',
                "className": 'OPC',
                "orderable": false,
            },
            {
                "name": 'POS',
                "className": 'POS',
                "orderable": false,
            },
            {
                "name": 'RFC',
                "className": 'RFC',
                "orderable": false
            },
            {
                "name": 'FACTURA',
                "className": 'FACTURA',
                "orderable": false
            },
            {
                "name": 'FECHA',
                "className": 'FECHA',
                "orderable": false
            },

            {
                "name": 'MONTO',
                "className": 'MONTO',
                "orderable": false
            }
            ,
            {
                "name": 'IVA',
                "className": 'IVA',
                "orderable": false
            },
            {
                "name": 'TOTAL',
                "className": 'TOTAL',
                "orderable": false
            }
            ,
            {
                "name": 'ARCHIVO',
                "className": 'ARCHIVO',
                "orderable": false
            }
        ]
    });

    //Contabilizar
    $('#btn_cont').on("click", function () {
        document.getElementById("loader").style.display = "initial";//RSG 26.04.2018
        var num = $('#num_doc_send').val();

        $.ajax({
            type: "POST",
            url: '../../Flujos/Procesa',
            //dataType: "json",
            data: { "id": num },

            success: function (data) {

                if (data != null || data != "") {
                    M.toast({ html: data });
                }
            },
            error: function (xhr, httpStatusMessage, customErrorMessage) {

            },
            async: false
        });

        document.getElementById("loader").style.display = "none";//RSG 26.04.2018

    });

    //Tabla de Retenciones
    $('#table_ret').DataTable({
        language: {
            "url": "../Scripts/lang/ES.json"
        },
        "paging": false,
        "info": false,
        "searching": false,
        "columns": [
            {
                "name": 'SOCRET',
                "className": 'SOCRET',
                "orderable": false,
                "visible": false
            },
            {
                "name": 'PROVRET',
                "className": 'PROVRET',
                "orderable": false,
                "visible": false
            },
            {
                "name": 'TRET',
                "className": 'TRET',
                "orderable": false
            },
            {
                "name": 'DESCRET',
                "className": 'DESCTRET',
                "orderable": false
            },
            {
                "name": 'INDRET',
                "className": 'INDRET',
                "orderable": false
            },
            {
                "name": 'BIMPONIBLE',
                "className": 'BIMPONIBLE',
                "orderable": false
            },
            {
                "name": 'IMPRET',
                "className": 'IMPRET',
                "orderable": false
            }
        ],
        columnDefs: [
            {
                targets: [0, 1, 2, 3, 4],
                className: 'mdl-data-table__cell--non-numeric'
            }
        ]
    });

    $('#div-menu').on('click', function () {

    });

    $('#cerrar-menu').on('click', function () {

    });

    formatoMon();

    var val3 = $('#tsol').val();
    showHide(val3);

});

$(window).on('load', function () {

    $('.materialize-textarea').css("height", "0px");

});
function formatoTabla() {
    var colsArray = [
        {//MGC 30-10-2018 Tipo de presupuesto
            "className": 'select_row',
            "data": null,
            "defaultContent": '',
            "orderable": false,
            "visible": false //MGC 30-10-2018 Tipo de presupuesto
        },//MGC 30-10-2018 Tipo de presupuesto
        {
            "name": 'POS',
            "className": 'POS',
            "orderable": false,
            "visible": false //MGC 04092018 Conceptos
        },
        {
            "name": 'A1',
            "className": 'NumAnexo',
            "orderable": false
        },
        {
            "name": 'A2',
            "className": 'NumAnexo2',
            "orderable": false
        },
        {
            "name": 'A3',
            "className": 'NumAnexo3',
            "orderable": false
        },
        {
            "name": 'A4',
            "className": 'NumAnexo4',
            "orderable": false
        },
        {
            "name": 'A5',
            "className": 'NumAnexo5',
            "orderable": false
        },
        {
            "name": 'TXTPOS',
            "className": 'TXTPOS',
            "orderable": false
        },
        {
            "name": 'CA',
            "className": 'CA',
            "orderable": false,
            "visible": false
        },
        {
            "name": 'FACTURA',
            "className": 'FACTURA',
            "orderable": false
        },
        {
            "name": 'TCONCEPTO',
            "className": 'TCONCEPTO',
            "orderable": false,
            "visible": false//MGC 22-10-2018 Etiquetas
        },
        {
            "name": 'CONCEPTO',
            "className": 'GRUPO',
            "orderable": false
        },
        {
            "name": 'CUENTA',
            "className": 'CUENTA',
            "orderable": false,
            "visible": false//lej 11.09.2018
        },
        {
            "name": 'CUENTANOM',
            "className": 'CUENTANOM',
            "orderable": false,
            "visible": false//lej 11.09.2018
        },
        {
            "name": 'TIPOIMP',
            "className": 'TIPOIMP',
            "orderable": false,
            "visible": false//MGC 22-10-2018 Etiquetas
        },
        {
            "name": 'IMPUTACION',
            "className": 'IMPUTACION',
            "orderable": false,
            "visible": false//lej 11.09.2018
        },
        {
            "name": 'CCOSTO',
            "className": 'CCOSTO',
            "orderable": false

        },
        {
            "name": 'MONTO',
            "className": 'MONTO',
            "orderable": false
        },
        {
            "name": 'IVA',
            "className": 'IVA',
            "orderable": false
        }
    ];
    //Variable para saber cuantos tipos de impuestos tiene
    tRet = [];
    tRet2 = [];
    var docsenviar = {};
    var jsonObjDocs = [];
    var sociedad_id = $("#SOCIEDAD_ID").val();
    var proveedor = $("#pid").val();//lej 05.09.2018
    $("#table_ret > tbody  > tr[role='row']").each(function () {

        //Obtener el row para el plugin
        var tr = $(this);
        var indexopc = t.row(tr).index();

        //Obtener la sociedad oculta
        var soc = t.row(indexopc).data()[0];

        //Obtener el proveedor oculto
        var prov = t.row(indexopc).data()[1];

        //Obtener valores visibles en la tabla
        var tret = toNum($(this).find("td.TRET").text());
        var indret = toNum($(this).find("td.INDRET").text());
        var bimponible = $(this).find("td.BIMPONIBLE").text();
        var imret = $(this).find("td.IMPRET").text();

        //Quitar espacios
        bimponible = bimponible.replace(/\s/g, '');
        imret = imret.replace(/\s/g, '');

        //Conversión a número
        var bimponible = toNum(bimponible);
        var imret = toNum(imret);

        var item = {};

        //Agregar los valores para enviarlos al modelo
        item["LIFNR"] = prov;
        item["BUKRS"] = soc;
        item["WITHT"] = tret;
        item["WT_WITHCD"] = indret;
        item["POS"] = i;
        item["BIMPONIBLE"] = bimponible;
        item["IMPORTE_RET"] = imret;

        jsonObjDocs.push(item);
        i++;
        item = "";
    });

    docsenviar = JSON.stringify({ 'items': jsonObjDocs, "bukrs": sociedad_id, "lifnr": proveedor });
    $.ajax({
        type: "POST",
        url: '../getRetenciones',
        contentType: "application/json; charset=UTF-8",
        data: docsenviar,
        success: function (data) {
            if (data !== null || data !== "") {
                $.each(data, function (i, dataj) {
                    tRet.push(dataj.WITHT);//Lej 15.11.18
                }); //Fin de for
            }

        },
        error: function (xhr, httpStatusMessage, customErrorMessage) {
            M.toast({ html: httpStatusMessage });
        },
        async: false
    });

    tRet2 = tRet;
    for (i = 0; i < tRet.length; i++) {//Revisare las retenciones que tienes ligadas
        $.ajax({
            type: "POST",
            url: '../getRetLigadas',
            data: { 'id': tRet[i] },
            dataType: "json",
            success: function (data) {
                if (data !== null || data !== "") {
                    if (data != "Null") {
                        tRet2 = jQuery.grep(tRet2, function (value) {
                            return value != data;
                        });
                    }
                    else {
                    }
                }
            },
            error: function (xhr, httpStatusMessage, customErrorMessage) {
                M.toast({ html: httpStatusMessage });
            },
            async: false
        });
    }
    //Se hara un push al arreglo de columnas original
    for (i = 0; i < tRet2.length; i++) {
        colsArray.push({
            "name": tRet2[i] + " B.Imp.",
            "orderable": false
        }, {
                "name": tRet2[i] + " I. Ret.",
                "orderable": false
            });
    }
    //Para agregar el texto
    colsArray.push({
        "name": 'TOTAL',
        "className": 'TOTAL',
        "orderable": false
    });
    //Tabla de Información
    $('#table_info').DataTable({
        language: {
            //"url": "../Scripts/lang/@Session["spras"].ToString()" + ".json"
            "url": "../../Scripts/lang/ES.json"
        },
        "paging": false,
        "info": false,
        "searching": false,
        "columns": colsArray
    });
    tamanosRenglones();
}

function showHide(tsol) {
    var val3 = tsol;
    val3 = "[" + val3 + "]";
    val3 = val3.replace("{", "{ \"");
    val3 = val3.replace("}", "\" }");
    val3 = val3.replace(/\,/g, "\" , \"");
    val3 = val3.replace(/\=/g, "\" : \"");
    val3 = val3.replace(/\ /g, "");
    var jsval = $.parseJSON(val3)

    $.each(jsval, function (i, dataj) {
        ocultarCampos(dataj.EDITDET, param1);
    });

}

function formatoMon() {
    var table = $('#table_info').DataTable();
    // $("#table_info > tbody > tr[role = 'row']").each(function (index) {
    //var col11 = $(this).find("td.TOTAL input").val();
    //var col11 = $(this).find("td.TOTAL input").val();


    //col11 = col11.replace(/\s/g, '');
    //var val = toNum(col11);
    //val = convertI(val);
    //if ($.isNumeric(val)) {
    //    total += val;
    //}
    //  });
}

function updateFooter() {
    resetFooter();

    var t = $('#table_info').DataTable();
    var total = 0;

    $("#table_info > tbody > tr[role = 'row']").each(function (index) {
        //var col11 = $(this).find("td.TOTAL input").val();
        var col11 = $(this).find("td.TOTAL input").val();


        col11 = col11.replace(/\s/g, '');
        var val = toNum(col11);
        val = convertI(val);
        if ($.isNumeric(val)) {
            total += val;
        }
    });

    total = total.toFixed(2);

    $('#total_info').text(toShow(total));


}

function convertI(i) {
    return typeof i === 'string' ?
        i.replace(/[\$,]/g, '') * 1 :
        typeof i === 'number' ?
            i : 0;
};

function resetFooter() {
    $('#total_info').text("$0");
}

function resetTabs() {

    var ell = document.getElementById("tabs");
    var instances = M.Tabs.getInstance(ell);

    var active = $('.tabs').find('.active').attr('href');
    active = active.replace("#", "");
    instances.select(active);
    //instances.updateTabIndicator
}

function ocultarCampos(opc, load) {
    //respuesta en minúscula
    opc = opc.toLowerCase();

    //Si load = "load" solo se ocultan o muestran campos

    if (opc === "true") {

        //Solicitud sin orden de compra
        $("#div_norden_compra").css("display", "none");

        if (load === "load") {
            //
        } else {
            $("#norden_compra").val("");
        }


    } else {
        //Solicitud con orden de compra
        $("#div_norden_compra").css("display", "inherit");

        if (load === "load") {
            //
        } else {
            $("#norden_compra").val("");
        }
    }

    //Deshabilitar campos de la tabla
    //ocultarColumnas(opc);
}


//MGC 18-10-2018 Firma del usuario -------------------------------------------------->
//Validar la firma del usuario

function valF(frmValues) {

    firmaVal = "";
    firmaVallocal = "";
    $.ajax({
        type: "POST",
        url: '../ValF',
        //dataType: "json",
        data: { "pws": frmValues },

        success: function (data) {

            asigF(data);

        },
        error: function (xhr, httpStatusMessage, customErrorMessage) {
            var a = xhr;
        },
        async: false
    });


    firmaVallocal = firmaVal;
    return firmaVallocal;
}

function asigF(fir) {
    firmaVal = fir;
}


//MGC 18-10-2018 Firma del usuario --------------------------------------------------<

//LEJGG 13/11/2018
function tamanosRenglones() {
    //TEXTO
    var t_ret = $("#table_info>thead>tr").find('th.TXTPOS');
    //var t_ret = $(this).find("th.TEXTO");
    t_ret.css("text-align", "center");
    t_ret.css("width", "150px");
}
//LEJGG 21-11-2018 Cadena de autorización----------------------------------------------------------------------------->
//Al seleccionar un solicitante, obtener la cadena para mostrar

function obtenerCadena(version, usuarioc, id_ruta, usuarioa, monto, sociedad) {

    try {
        monto = parseFloat(monto) || 0.0;
    } catch (err) {
        monto = 0.0;
    }

    //Eliminar Registros
    $("#tableAutorizadores > tbody > tr").remove();

    $.ajax({
        type: "POST",
        url: '../getCadena',
        data: { 'version': version, 'usuarioc': usuarioc, 'id_ruta': id_ruta, 'usuarioa': usuarioa, 'monto': monto, 'bukrs': sociedad },
        dataType: "json",
        success: function (data) {
            if (data !== null || data !== "") {

                $.each(data, function (i, dataj) {
                    var fase = dataj.fase;
                    var autorizador = dataj.autorizador;

                    //Agregar los valores de las cadenas a las tablas
                    $('#tableAutorizadores').append('<tr><td>' + fase + '</td><td>' + autorizador + '</td></tr>');

                }); //Fin de for


            }
        },
        error: function (xhr, httpStatusMessage, customErrorMessage) {
            M.toast({ html: httpStatusMessage });
        },
        async: false
    });

}

//eliminar registros de tabla

//LEJGG 21-11-2018 Cadena de autorización-----------------------------------------------------------------------------<

function datosCadena(nDoc) {
    $.ajax({
        type: "POST",
        url: '../getCadAut',
        data: { 'nd': nDoc },
        dataType: "json",
        success: function (data) {
            if (data !== null || data !== "") {
                obtenerCadena(data[5], data[4], data[2], data[3], data[1], data[0]);
            }
        },
        error: function (xhr, httpStatusMessage, customErrorMessage) {
            M.toast({ html: httpStatusMessage });
        },
        async: false
    });
}