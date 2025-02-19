let produtos = [
  {
    nome: "Tinta Acrílica",
    valor: 49.99,
    descricao: "Tinta acrílica para pintura em tela",
  },
  {
    nome: "Tinta Óleo",
    valor: 99.19,
    descricao: "Tinta óleo para pintura em tela",
  },
  {
    nome: "Pincel",
    valor: 10.99,
    descricao: "Pincel para pintura em tela",
  },
  {
    nome: "Tela",
    valor: 30.89,
    descricao: "Tela para pintura em tela",
  },
  {
    nome: "Tinta Aquarela",
    valor: 70.4,
    descricao: "Tinta aquarela para pintura em tela",
  },
  {
    nome: "Tinta Guache",
    valor: 20.5,
    descricao: "Tinta guache para pintura em tela",
  },
];

let servicos = [
  {
    nome: "Pintura em tela",
    valor: 100.0,
    descricao: "Pintura em tela",
  },
  {
    nome: "Pintura em parede",
    valor: 200.0,
    descricao: "Pintura em parede",
  },
  {
    nome: "Pintura em madeira",
    valor: 150.0,
    descricao: "Pintura em madeira",
  },
  {
    nome: "Pintura em tecido",
    valor: 120.0,
    descricao: "Pintura em tecido",
  },
  {
    nome: "Pintura em vidro",
    valor: 130.0,
    descricao: "Pintura em vidro",
  },
  {
    nome: "Pintura em cerâmica",
    valor: 140.0,
    descricao: "Pintura em cerâmica",
  },
];

var maskTelCel = function (val) {
    return val.replace(/\D/g, "").length === 11
      ? "(00) 00000-0000"
      : "(00) 0000-00009";
  },
  optionsTelCel = {
    onKeyPress: function (val, e, field, options) {
      field.mask(maskTelCel.apply({}, arguments), options);
    },
  };

var maskCpfCnpj = function (val) {
    console.log(val);
    return val.replace(/\D/g, "").length <= 11
      ? "000.000.000-00999"
      : "00.000.000/0000-00";
  },
  optionsCpfCnpj = {
    onKeyPress: function (val, e, field, options) {
      field.mask(maskCpfCnpj.apply({}, arguments), options);
    },
  };

try {
  $(".mask-data").mask("99/99/9999");
  $(".mask-mesano").mask("99/9999");
  $(".mask-diames").mask("99/99");
  $(".mask-horas").mask("99:99");
  $(".mask-ano").mask("9999");
  $(".mask-cnpj").mask("99.999.999/9999-99");
  $(".mask-cpf").mask("999.999.999-99");
  $(".mask-rg").mask("99.999.999-A");
  $(".mask-telefone").mask("(99) 9999-9999");
  $(".mask-celular").mask("(99) 99999-9999");
  $(".mask-cep").mask("99999-999");
  $(".mask-idade").mask("999");
  $(".mask-telcel").mask(maskTelCel, optionsTelCel);
  $(".mask-cpfcnpj").mask(maskCpfCnpj, optionsCpfCnpj);
  $(".mask-codigo").mask("999999");
  $(".mask-cartao").mask("0000 0000 0000 0000");
  $(".apenas-numeros").on("input", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9]/g, "")
    );
  });
  $(".apenas-letras").on("input", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[0-9.]/g, "")
        .replace(/(\..*?)\..*/g, "$1")
    );
  });
} catch (error) {
  console.error("Plugin Mask doesn`t included");
}
