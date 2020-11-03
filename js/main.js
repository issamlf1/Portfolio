$(function () {
   
    'use strict';


    /* addjust header offset */
    $('.header-bg').height( $(window).height() - $('.navbar').innerHeight() );
    $(window).resize(function () {
        $('.header-bg').height( $(window).height() - $('.navbar').innerHeight() );
    });

    $('[data-toggle="tooltip"]').tooltip();
    
    $("header .navbar nav ul li a").click(function() {
        $('html, body').animate({
            scrollTop: $('.'+$(this).data('scrolling')).offset().top
        }, 1500);
    });

    $('.scroll-top').on('click',function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
    $(window).scroll(function () {
        
        var test = $('.header-bg').offset().top + $('.header-bg').innerHeight() ;
        if (scroll > test) {
            $('.scroll-top').fadeIn(500);
            
            
        } else {
            $('.scroll-top').fadeOut(500);
            
        }
        
        
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var dh = $(document).height();
        var w = $(window).height();
        var value = (scroll / (dh-w))
        $('.progress').css('width',(scroll/(dh-w))*100+'%');
        var test = $('.navbar').offset().top + $('.navbar').innerHeight() ;
        if (scroll > test) {
            $('.progress').fadeIn(500);
            
            
        } else {
            $('.progress').fadeOut(500);
            
            
        }
        
        
    });


    $('.btn-menu').on('click',function () {
        $('.btn-menu i.fas').toggleClass('fa-bars fa-times');
        $('header .navbar nav').toggleClass('active');
    })

  
   
   
    
    // Links Add Active Class
    
    $('.links li a').click(function () {
       
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });

    $('button.copied-email').on('click',function () {
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
    });
    
    $('button.copied-email').on('click',function () {
       $(this).tooltip('hide')
       .attr('data-original-title', 'copié!')
       .tooltip('show');

    });
    $('#myInput').on('blur',function () {
        $('button.copied-email').attr('data-original-title', 'copier dans le presse-papier')
    });
    var formationElements = document.querySelector('.formation-cont').children;
    const controller = new ScrollMagic.Controller();
    for (var i=0; i<formationElements.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: formationElements[i],
            reverse:true,
            triggerHook:0.9
        })
        .setClassToggle(formationElements[i],'fadeIn')
        .addTo(controller)
        
    }
    var experienceElements = document.querySelector('.experience-cont').children; 
    for (var i=0; i<experienceElements.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: experienceElements[i],
            reverse:true,
            triggerHook:0.9
        })
        .setClassToggle(experienceElements[i],'fadeIn')
        .addTo(controller)
        
    }
    var certifcatElements = document.querySelector('.certificat-content').children; 
    for (var i=0; i<certifcatElements.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: certifcatElements[i],
            reverse:true,
            triggerHook:0.9
        })
        .setClassToggle(certifcatElements[i],'fadeIn')
        .addTo(controller)
        
    }
    var projectElements = document.querySelectorAll('.projects .card'); 
    console.log(projectElements)
    for (var i=0; i<projectElements.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: projectElements[i],
            reverse:true,
            triggerHook:0.9
        })
        .setClassToggle(projectElements[i],'fadeIn')
        .addTo(controller)
        
    }
    gsap.from('.intro',{opacity:0,duration:1,y:-50});
    gsap.from('.intro-img',{opacity:0,duration:1,y:50,delay:0.5});
  
   
});
