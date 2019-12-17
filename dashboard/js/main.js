$(function(){
    $("#form-total").steps({
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 300,
        titleTemplate : '<span class="title">#title#</span>',
        labels: {
            previous : 'ffff',
            next : 'Next Step',
            finish : 'Confirm',
            current : ''
        }
    });
});


