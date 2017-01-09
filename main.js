/**
 * Created by julia on 11.12.2016.
 */
$(document).ready(function(){

    var show_block_class;
    $('.service-menu label').on('mouseover', function(){

        show_block_class = $(this).attr('id');
        $('.info-service div').hide();
        $('.info-'+ show_block_class).show();

    });

});