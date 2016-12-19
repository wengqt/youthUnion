/**
 * Created with JetBrains WebStorm.
 * User: wengweng
 * Date: 16-11-11
 * Time: 下午11:05
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    $(".group1-detail").hide();
    $(".group1").hover(function(){
        $(".group1-detail").slideToggle(500).css("display","inline-block");
    });
     $(".group2-detail").hide();
    $(".group2").hover(function(){
        $(".group2-detail").slideToggle(500).css("display","inline-block");
    });
     $(".group3-detail").hide();
    $(".group3").hover(function(){
        $(".group3-detail").slideToggle(500).css("display","inline-block");
    });
     $(".group4-detail").hide();
    $(".group4").hover(function(){
        $(".group4-detail").slideToggle(500).css("display","inline-block");
    });
     $(".group5-detail").hide();
    $(".group5").hover(function(){
        $(".group5-detail").slideToggle(500).css("display","inline-block");
    });
     $(".group6-detail").hide();
    $(".group6").hover(function(){
        $(".group6-detail").slideToggle(500).css("display","inline-block");
    });
     $(".group7-detail").hide();
    $(".group7").hover(function(){
        $(".group7-detail").slideToggle(500).css("display","inline-block");
    });
     $(".group8-detail").hide();
    $(".group8").hover(function(){
        $(".group8-detail").slideToggle(500).css("display","inline-block");
    });
     $(".group9-detail").hide();
    $(".group9").hover(function(){
        $(".group9-detail").slideToggle(500).css("display","inline-block");
    });
    $('.carousel').carousel({ 	interval: 2000 });
});