$(function(){
  $(".btn-primary").click(function(){
    $("[data-toggle='tooltip']").tooltip('show');
  });
  $(".btn-warning").click(function(){
    $("[data-toggle='tooltip']").tooltip('hide');
  });
  $(".btn-success").click(function(){
    $("[data-toggle='tooltip']").tooltip('toggle');
  });
  $(".btn-danger").click(function(){
    $("[data-toggle='tooltip']").tooltip('dispose');
  });
  $("[data-toggle='tooltip']").on('show.bs.tooltip', function(){
    alert('The tooltip is about to be shown.');
  });
  $("[data-toggle='tooltip']").on('shown.bs.tooltip', function(){
    alert('The tooltip is now fully shown.');
  });
  $("[data-toggle='tooltip']").on('hide.bs.tooltip', function(){
    alert('The tooltip is about to be hidden.');
  });
  $("[data-toggle='tooltip']").on('hidden.bs.tooltip', function(){
    alert('The tooltip is now hidden.');
  });
});


