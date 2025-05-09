jQuery(document).ready(function(){

/*************** Checkbox script ***************/
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "checkbox") {
var id = inputs[a].getAttribute("id");
if (id==null){
id=  "checkbox" +a;
}
inputs[a].setAttribute("id",id);
var container = document.createElement('div');
container.setAttribute("class", "ttr_checkbox");
var label = document.createElement('label');
label.setAttribute("for", id);
jQuery(inputs[a]).wrap(container).after(label);
}
}

/*************** Radiobutton script ***************/
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "radio") {
var id = inputs[a].getAttribute("id");
if (id==null){
id=  "radio" +a;
}
inputs[a].setAttribute("id",id);
var container = document.createElement('div');
container.setAttribute("class", "ttr_radio");
var label = document.createElement('label');
label.setAttribute("for", id);
jQuery(inputs[a]).wrap(container).after(label);
}
}

/*************** Staticfooter script ***************/
var window_height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body_height = jQuery(document.body).height();
var content = jQuery("#ttr_content_and_sidebar_container");
if(body_height < window_height){
differ = (window_height - body_height);
content_height = content.height() + differ;
jQuery("#ttr_content_and_sidebar_container").css("min-height", content_height+"px");
}

/* Slideshow Function Call */

if(jQuery('#ttr_slideshow_inner').length){
jQuery('#ttr_slideshow_inner').TTSlider({
slideShowSpeed:4000, begintime:3000,cssPrefix: 'ttr_'
});
}

/*************** Hamburgermenu slideleft script ***************/
jQuery('#nav-expander').on('click',function(e){
e.preventDefault();
jQuery('body').toggleClass('nav-expanded');
});

/*************** Menu click script ***************/
jQuery('ul.ttr_menu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 1025 && jQuery(this).attr('href')){
window.location.href = jQuery(this).attr('href'); 
}
else{
if(jQuery(this).parent().hasClass('open')){
location.assign(jQuery(this).attr('href'));
}
}
});

/*************** Sidebarmenu click script ***************/
jQuery('ul.ttr_vmenu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 1025 && jQuery(this).attr('href')){
window.location.href = jQuery(this).attr('href'); 
}
else{
if(jQuery(this).parent().hasClass('open')){
location.assign(jQuery(this).attr('href'));
}
}
});

/*************** Tab menu click script ***************/
jQuery('.ttr_menu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 1025){
event.preventDefault();
event.stopPropagation();
jQuery(this).parent().siblings().removeClass('open');
jQuery(this).parent().toggleClass(function() {
if (jQuery(this).is(".open") ) {
window.location.href = jQuery(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "open";
}
});
}
});

/*************** Page Alignment format tab  script ***************/
var page_width = jQuery('#ttr_page').width();
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width > 1025){
jQuery('.ttr_page_align_left').each(function() {
var left_div_width = jQuery(this).width(); 
var page_align_left_value = page_width - left_div_width;
left_div_width = left_div_width + 1;
jQuery(this).css({'left' : '-' + page_align_left_value + 'px', 'width': left_div_width + 'px'});
});
jQuery('.ttr_page_align_right').each(function() {
var right_div_width = jQuery(this).width(); 
var page_align_left_value = page_width - right_div_width;
right_div_width = right_div_width + 1;
jQuery(this).css({'right' : '-' + page_align_left_value + 'px', 'width': right_div_width + 'px'});
});
}

/*************** Tab-Sidebarmenu script ***************/
jQuery('.ttr_vmenu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 1025){
event.preventDefault();
event.stopPropagation();
jQuery(this).parent().siblings().removeClass('open');
jQuery(this).parent().toggleClass(function() {
if (jQuery(this).is(".open") ) {
window.location.href = jQuery(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "open";
}
});
}
});

/*************** Html video script ***************/
var objects = ['iframe[src*="youtube.com"]','iframe[src*="youtu.be"]', 'video','object'];
for(var i = 0 ; i < objects.length ; i++){
if (jQuery(objects[i]).length > 0) {
jQuery(objects[i]).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
jQuery(objects[i]).addClass('embed-responsive-item');
}
}

/*************** Html Equal column height ***************/
jQuery(window).bind('load', function() { tt_columns(); }); 
jQuery(window).resize(tt_columns);
});

/*************** Html Equal column height ***************/
function tt_equal_height(cols){
var maxHeight = 0;
maxHeight = Math.max.apply(Math, cols.map(function(){return jQuery(this).height(); }).get());
cols.each(function(){
$child_h = jQuery(this).children().outerHeight();
$parent_h = jQuery(this).height();
if(maxHeight != $parent_h){
jQuery(this).children().css('height','inherit');
if($child_h ==  $parent_h){
jQuery(this).css('height', maxHeight+'px'); 
}
else{
$mrg = $parent_h - $child_h;
$m = maxHeight - $mrg; 
jQuery(this).css('height', $m + 'px');
}
}
});
}
function tt_columns(){
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
jQuery('#ttr_content .row').each(function() {
$child = jQuery(this).children();
var col = [];
$k = 0;
var params = [];
for($i=0;$i<=$child.length;$i++){
jQuery(params).css('height','auto'); 
if(window_width > 1199){
if(jQuery($child[$i]).hasClass('visible-lg-block')){
if( params.length > 1) {  
tt_equal_height(jQuery(params)); 
} 
params = [];
$k = 0;
}
else if(jQuery($child[$i]).hasClass('post_column')){
params[$k] = $child[$i];
$k++;
}
else if(!(jQuery($child[$i]).hasClass('clearfix'))) {
tt_equal_height(jQuery(params));
}
}
if(window_width > 767 && window_width < 1199){
if(jQuery($child[$i]).hasClass('visible-sm-block')){
if( params.length > 1) {  
tt_equal_height(jQuery(params)); 
} 
params = [];
$k = 0;
}
else if(jQuery($child[$i]).hasClass('post_column')){
params[$k] = $child[$i];
$k++;
}
else if(!(jQuery($child[$i]).hasClass('clearfix'))) {
tt_equal_height(jQuery(params));
}
}
if(window_width < 768){
if(jQuery($child[$i]).hasClass('visible-xs-block')){
if( params.length > 1) {  
tt_equal_height(jQuery(params)); 
} 
params = [];
$k = 0;
}
else if(jQuery($child[$i]).hasClass('post_column')){
params[$k] = $child[$i];
$k++;
}
else if(!(jQuery($child[$i]).hasClass('clearfix'))) {
tt_equal_height(jQuery(params));
}
}
}
});
}