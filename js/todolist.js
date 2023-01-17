(function($) {
  'use strict';
  $(function() {
    var todoListItem = $('.todo-list');
    var todoListInput = $('.todo-list-input');
    var todoListInputValor = $('.todo-list-input-valor');
    var todoListInputType = $('.todo-list-input-type');
    $('.todo-list-add-btn').on("click", function(event) {
      event.preventDefault();

      var item = $(this).prevAll('.todo-list-input').val();
      var valor = $(this).prevAll('.todo-list-input-valor').val();
      var type = $(this).prevAll('.todo-list-input-type').val();

      if (item && valor) {
        todoListItem.append("<li class='liStyle'><i class='input-helper'></i></label><i class='remove fa-solid fa-trash'>&nbsp;</i><span class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'/> Nome: " 
        + item + "- Valor:  "+valor + " "+type + 
        "</span></i></li>");
        todoListInput.val("");
        todoListInputValor.val("");
        todoListInputType.val("");
      } else{
        window.alert("Você não preencheu Nome e/ou Quantidade")
      }

    });

    todoListItem.on('change', '.checkbox', function() {
      if ($(this).attr('checked')) {
        $(this).removeAttr('checked');
      } else {
        $(this).attr('checked', 'checked');
      }

      $(this).closest("li").toggleClass('completed');

    });

    todoListItem.on('click', '.remove', function() {
      $(this).parent().remove();
    });

  });
})(jQuery);