COMMENT_BOX_HINT='请尊重不同的观点，避免使用情绪化语言';STATIC_IMG_URL="www.pincimg.com";function setCookie(key,value){var expires=new Date();expires.setTime(expires.getTime()+(1*24*60*60*1000));document.cookie=key+'='+value+';expires='+expires.toUTCString()+"; path=/";}
function getCookie(name){var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}
function detectmob(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){return true;}
else{return false;}}
csrftoken=getCookie('csrftoken');function csrfSafeMethod(method){return(/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));}
function stripHTML(dirtyString){var container=document.createElement('div');var text=document.createTextNode(dirtyString);container.appendChild(text);return container.innerHTML;}
function getByteLen(val){var len=0;for(var i=0;i<val.length;i++){var a=val.charAt(i);if(a.match(/[^\x00-\xff]/ig)!=null)
{len+=2;}else{len+=1;}}
return len;}
function validateEmail(email){var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}
function copyTextToClipboard(text){var textArea=document.createElement("textarea");textArea.style.position='fixed';textArea.style.top=0;textArea.style.left=0;textArea.style.width='2em';textArea.style.height='2em';textArea.style.padding=0;textArea.style.border='none';textArea.style.outline='none';textArea.style.boxShadow='none';textArea.style.background='transparent';textArea.value=text;document.body.appendChild(textArea);textArea.select();try{var successful=document.execCommand('copy');var msg=successful?'successful':'unsuccessful';console.log('Copying text command was '+msg);}catch(err){console.log('Oops, unable to copy');}
document.body.removeChild(textArea);}
function load_alt_img(event){return;var elem=$(event.target);if(elem.attr("onerrored")=="1")
return;elem.attr("onerrored","1");elem.attr('src',"/pcimgredirect/?u="+elem.attr("data-alt"));}
$.ajaxSetup({crossDomain:false,beforeSend:function(xhr,settings){if(!csrfSafeMethod(settings.type)){xhr.setRequestHeader("X-CSRFToken",csrftoken);}}});function setDark(){$(".container, .comment_area_wrap, #comment-row textarea").css('background','#2f353e');$(".post-text-peek, .post-text-full, .post-text, .col-md-3, .read-more-text-peek, \
        .cmt-cnt-text, blockquote").css('color','#c3c4c6');$('a').css('color','#d1d3d4');$('#btn-post-qpool-btm-m').css('color','rgb(209, 211, 212) !important;');$('.btn-action').css('color','#888');$('.btn-black').css('color','#000');$(".mark, mark").css("background-color","#2f353e");$(".view-comment").css("background-color","#39393a");$(".post-body-wrap .read-more-text-peek, .dropdown-menu.dropup, .btn-default").css("background-color","#2f353e");$(".btn-cancel, .tag").css("background","#39393a");$("pre, blockquote").css("background-color","rgb(119, 119, 119)");$("pre, blockquote").css("color","rgb(232, 233, 234)");$("#comment-row textarea, .comment, .tag, .btn-default, .btn-cancel").css("border","1px solid #5c5d5f");$(".cmt-cnt-body").css("border-bottom","1px solid #5c5d5f");$(".post-row").css("border-top","1px solid #5c5d5f");$(".col-md-9 .post-title").attr("style","font-weight:200 !important");$(".feed_wrap").css("background","none");$(".feed_wrap .post-body-wrap").css("border-top","none");}
function checkandset_nightmode(){if(getCookie("dark")=="1"){setCookie("dark",0);location.reload();}else{setCookie("dark",1);setDark();}}
function moderate_post(elem){var post_id=elem.attr('data-value')
var modpanel=$('#modpanel')
if(modpanel.length>0){$('#modpanel').remove()}else{var page=$('<div id="modpanel"></div>').load("/local/moderate/post/"+post_id+"/")
elem.closest(".clearfix").after(page)}}
function moderate_user(elem){var user_id=elem.attr('data-value')
var modpanel=$('#modpanel')
if(modpanel.length>0){$('#modpanel').remove()}else{var page=$('<div id="modpanel"></div>').load("/local/moderate/user/"+user_id+"/")
elem.parent().parent().after(page)}}
function add_comment_anon(elem,level){if(level==1||level==0){var container=elem.closest(".post-body-wrap").find('.comment_area_wrap')}else if(level==6){var container=elem.closest(".cmt_item_wrap")
container.closest(".comment_area").find(".cmt_item_wrap .comment-row").remove();}
container.find("#comment-box").remove();container.show()
container.append('<div id="comment-box" class="alert alert-warning" \
        style="font-size: 13px;color:#8590a6;">\
        <a  href="/accounts/login/">登录</a> 或 <a href="/accounts/signup/">注册</a></div>')}
function add_comment(elem,type){var post_id=elem.attr('data-value');var cancelCallback;if(type===0||type===1){container=elem.closest(".post-body-wrap").find('.comment_area_wrap');cancelCallback="cancel_answer_input(event)";}else if(type===6){container=elem.closest(".cmt_item_wrap");container.closest(".comment_area").find(".cmt_item_wrap .comment-row").remove();cancelCallback="cancel_comment_input(event)";}
var mainpost_id=elem.closest('.post-body-wrap').attr('data-mainpost');var csrf_html="<input type='hidden' name='csrfmiddlewaretoken' value='"+getCookie('csrftoken')+"' /></span>";container.append('<div id="comment-row" class="comment-row">\
    <div class="alert alert-info" style="padding:10px; margin-bottom:0px;font-size:12px;border-radius:1px;">\
    管理员提示： 品葱是文明的讨论之地，请保持礼貌。 针对观点，而不是针对用户。 侮辱、攻击、仇恨言论，挑衅、咒骂，或其他规则违反者会导致言论被处理甚至禁言。如果你看到有违反的言论，请举报。</div>\
    <form id="comment-form" role="form" action="/p/new/comment/'+post_id+'/" method="post">'+csrf_html+'\
        <div class="form-group"> <input type="hidden" name="mainpost_id" value="'+mainpost_id+'">\
        <div class="wmd-panel"> <div id="wmd-button-bar-2"></div>\
            <div class="wmd-input-2 form-control comment-editor"\
                contenteditable="true" placeholder="'+COMMENT_BOX_HINT+'"></div>\
        </div> </div>\
        <div class="cmt-info-wrap" ><div class="cmt_box_msg"></div>\
        <div type="button" value="评论" c-type="'+type+'" class="btn btn-ok pull-right" \
        onclick=\'javascript:comment_submit_form(event);\'>评论</div>\
        <a class="btn btn-cancel pull-right" onclick="javascript:'+cancelCallback+';">\
        <i class="icon-remove"></i>取消</a></div></form></div>');container.show();if(type===6){container.find(".cmt-info-wrap").show();container.find(".wmd-input-2").focus();}
keydown_comment_textarea(container.find(".wmd-input-2"));}
function cancel_comment_input(event){$(event.currentTarget).closest('.comment-row').hide();}
function cancel_answer_input(event){$(event.currentTarget).closest('.cmt-info-wrap').hide();}
function comment_check_input(cnt){if(cnt.length<3||cnt.length>1000){return 0}
return 1}
function answer_check_input(cnt){if(cnt.length<100){return 0}
return 1}
function auto_grow(element){element.style.height="25px";element.style.height=(element.scrollHeight)+"px";}
function keydown_comment_textarea(elem){initSavedTextArray(elem);elem.off('keyup').on('keyup',function(e){var elem=$(e.target);handleChange(elem.html());detectAtUser(e,elem);});elem.off('keydown').on('keydown',function(e){var elem=$(e.target);auto_grow(elem[0]);if((e.keyCode==10||e.keyCode==13)&&e.ctrlKey){comment_submit_form(e);}});}
var save_answer_draft_transac_done=1;function save_answer_draft(post_id,cnt,mainpost_id,hintelem,check_answered){if(save_answer_draft_transac_done==0)
return;save_answer_draft_transac_done=0;cnt=resetHeightAttrInHtml(cnt);if(!check_answered){$.ajax({type:"POST",url:"/p/edit/"+post_id+"/?d=1",data:{'title':'0','content':cnt,'mainpost_id':0},success:function(data){data=eval(data)
if(data['r']==0){}else if(data['r']==1){hintelem.html("已保存为草稿，需要点击“发布”才能发表")}
save_answer_draft_transac_done=1;}});}else{root_id=post_id;$.ajax({url:"/api/user_answered_question/"+root_id+"/",dataType:'json',success:function(data){data=eval(data)
if(data['r']==1){$.ajax({type:"POST",url:"/p/new/answer/"+root_id+"/?d=1",data:{'content':cnt,'mainpost_id':0},success:function(data){data=eval(data)
if(data['r']==0){}else if(data['r']==1){hintelem.closest(".note-actions").attr("data",data['id'])
hintelem.html("已保存为草稿，需要点击“发布”才能发表")}
save_answer_draft_transac_done=1;}})}else{new_pid=data['pid']
$.ajax({type:"POST",url:"/p/edit/"+new_pid+"/?d=1",data:{'title':'0','content':cnt,'mainpost_id':0},success:function(data){data=eval(data)
if(data['r']==0){}else if(data['r']==1){hintelem.html("已保存为草稿，需要点击发布才能发表")}
save_answer_draft_transac_done=1;}});}}});}}
function comment_submit_form(event){var smtelem=$(event.target);smtelem.css("pointer-events","none");var frm=smtelem.closest('#comment-form');var cnt=frm.find('.comment-editor').html();if(comment_check_input(frm.find('.comment-editor').text().trim())==0){frm.find(".cmt_box_msg").html("评论字数请在3-1000字内").fadeIn(100);frm.find(".cmt_box_msg").fadeOut(5000);smtelem.css("pointer-events","auto");return;}
var type=parseInt(smtelem.attr('c-type'));var mainpost_id=frm.find("[name=mainpost_id]").val();cnt=cnt.trim();frm.find('.btn-ok').html('<div style="width:100%;height:100%;height: 20px !important;width: 28px !important;" class="lds-ripple"><div></div><div></div></div>');$.ajax({type:frm.attr('method'),url:frm.attr('action'),data:{'csrfmiddlewaretoken':getCookie('csrftoken'),'mainpost_id':mainpost_id,'content':cnt},success:function(data){smtelem.css("pointer-events","auto");data=eval(data)
if(data['r']==0){frm.find(".cmt_box_msg").html(data['m']).fadeIn(100);frm.find(".cmt_box_msg").fadeOut(5000);frm.find('.btn-ok').html("评论")
return;}else if(data['r']==1){var countelem=$("#C"+frm.find("[name=mainpost_id]").val());countelem.attr('count',parseInt(countelem.attr('count'))+1);reply_html="";if(type==6){reply_html='回复 <a href="/u/'+data['p_uname']+'" uid="'+USER_ID+'" class="common-username">'+data['p_n']+'</a>'}
html='<div class="cmt_item_wrap post-body-wrap" data-mainpost="'+mainpost_id+'" style="display:none;">\
                 <div class="entry Open  clearfix"><div class="cmt-cnt-body">\
                <span class="comment vote-box" data-post_id="'+data['id']+'"> <a class="comment-thumbnail-a" href="/u/'+data['p_uname']+'" uid="'+USER_ID+'">\
                <img src="'+data['p_thumb']+'"  data-alt="'+STATIC_IMG_URL+'/static/img/u-thumb-default.png" \
                onerror="load_alt_img(event);"></a></span> <span class="cmt-author">\
                    <a href="/u/'+data['p_uname']+'" uid="'+USER_ID+'" class="common-username">'+USER_NAME+'</a> '+reply_html+'\
                </span><div class="cmt-cnt-text"><p>'+unescape(escape(cnt.replace('\n','<br>')))+'</p></div>\
                <div class="post-action"> <span class="label label-default view-comment" data-value="'+data['id']+'" id="D'+data['id']+'"\
                    onclick="del_post(event, '+data['id']+');"  data="'+data['id']+'" p-type="'+data['p_t']+'">删除</span>\
                    <span class="userlink muted"> <span itemprop="dateCreated" content="">刚刚</span>\
                </span></dvi></div></div></div>';var new_div=$(html).hide();if(frm.closest('.comment_area_wrap').find('.cmt_item_wrap').size()>0){insertelem=frm.closest('.comment_area_wrap').find('.cmt_item_wrap').last();new_div.insertAfter(insertelem).show("slow");}else{insertelem=frm.closest('.comment_area_wrap').find('.comment_area');insertelem.append(new_div).show("slow");}
$(window).scrollTop(insertelem.offset().top-200);new_div.slideDown();if(type==6)
smtelem.closest("#comment-row").remove();else if(type==1||type==0){frm.find('textarea').val("");frm.find('textarea').css('height','38px');}}
frm.find('.comment-editor').html('');frm.find('.comment-editor').css('height','');frm.find('.btn-ok').html("评论")}})}
function answer_submit_form_draft(event){event.preventDefault();var smtelem=$(event.target);var frm=smtelem.closest('#answer-form');var csrf=$("[name=csrfmiddlewaretoken]");var hintelem=smtelem.closest('#answer-form').find('.note-hint');var post_id=smtelem.closest('.note-actions').attr('data');var cnt=$('#answer-wmd').summernote('code');var wd_count=cnt.replace(/(<([^>]+)>)/ig,"").replace(/( )/," ").length;if(post_id=='0'){hintelem.html("请多打一些字再存稿（50字以上）");return;}
if(detectmob())
cnt=removeSizeAttrInHtml(cnt);smtelem.css("pointer-events","none");hintelem.html("提交中...")
$.ajax({type:"POST",url:"/p/edit/"+post_id+"/?d=1",data:{'title':'0','content':cnt,'mainpost_id':0},success:function(data){smtelem.css("pointer-events","auto");data=eval(data);if(data['r']==0){hintelem.html(data['m']);}else if(data['r']==1){hintelem.html("已保存为草稿，需要“发布”才能发表");}}});}
function answer_submit_form(event){var smtelem=$(event.target)
var frm=smtelem.closest('#answer-form')
var csrf=$("[name=csrfmiddlewaretoken]");var hintelem=smtelem.closest('#answer-form').find('.note-hint')
event.preventDefault();var cnt=$('#answer-wmd').summernote('code');var wd_count=cnt.replace(/(<([^>]+)>)/ig,"").replace(/( )/," ").length
if(wd_count<50){hintelem.html("回答字数不能少于50字")
return}
if(detectmob())
cnt=removeSizeAttrInHtml(cnt);smtelem.css("pointer-events","none");hintelem.html("提交中...")
$.ajax({type:frm.attr('method'),url:frm.attr('action'),data:{'content':cnt,'mainpost_id':0},success:function(data){smtelem.css("pointer-events","auto");data=eval(data)
if(data['r']==0){hintelem.html(data['m'])}else if(data['r']==1){var new_div=$(data['p_h']).hide();$(window).scrollTop($(".post-detail-loadmore").offset().top-200);$(".post-detail-loadmore").before(new_div)
new_div.show("slow")
new_div.slideDown()
hintelem.html("")
$('#answer-wmd').summernote('destroy')
$('#answer-wmd').html("")
$("#answer-wmd").closest('.form-group').hide()
add_actions()}}})}
function mod_votecount(elem,countelem,k){var count=parseInt(countelem.html())||0
count+=k
if(count<0)
count=0
countelem.closest('.count-wrap').show()
countelem.html(count)}
VOTE="vote"
function toggle_button(elem,countelem,textelem,vote_type){if(elem.hasClass('btn-action')){if(vote_type=="upvote"||vote_type=="downvote"){sym_vote=elem.closest(".post-body-wrap").find('.sym-vote')
if(sym_vote.length)
sym_vote.css('opacity','1')}
elem.removeClass('btn-action');elem.addClass('btn-black')
change=1}else{if(vote_type=="upvote"||vote_type=="downvote"){sym_vote=elem.closest(".post-body-wrap").find('.sym-vote')
if(sym_vote.length)
sym_vote.css('opacity','0.3')}
elem.removeClass('btn-black');elem.addClass('btn-action')
change=-1}
if(vote_type=="upvote"||vote_type=="downvote")
mod_votecount(elem,countelem,change)}
function toggle_button_bookmark(elem){if(elem.hasClass('on')){elem.removeClass('on');elem.addClass('off')}else{elem.removeClass('off');elem.addClass('on')}}
function pop_over(elem,msg,cls){var text='<div></div>'
var tag=$(text).insertAfter(elem)
tag.addClass(cls+' vote-popover alert ')
tag.text(msg)
tag.delay(1000).fadeOut(1000,function(){$(this).remove()});}
function ajax_vote(elem,post_type,post_id,vote_type){var countelem=null
var textelem=null
if(post_type==0||post_type==1||post_type==5||post_type==11||post_type==12){countelem=elem.find(".mainpost-count")
textelem=elem.closest(".post-body-wrap").find(".vote-btn-text")}else if(post_type==6){countelem=elem.find(".count")
textelem=elem.closest(".post-body-wrap").find(".vote-btn-text")}
ori_count=parseInt(countelem.html())
toggle_button(elem,countelem,textelem,vote_type)
if(vote_type=="upvote"){dv_elem=elem.siblings('.downvote')
if(dv_elem.hasClass('btn-black')){dv_elem.removeClass('btn-black')
dv_elem.addClass('btn-action')
countelem=dv_elem.find('.mainpost-count')
mod_votecount(dv_elem,countelem,-1)}}else if(vote_type=="downvote"){dv_elem=elem.siblings('.upvote')
if(dv_elem.hasClass('btn-black')){dv_elem.removeClass('btn-black')
dv_elem.addClass('btn-action')
countelem=dv_elem.find('.mainpost-count')
mod_votecount(dv_elem,countelem,-1)}}
if(getCookie("dark")=="1"){setDark();}
$.ajax('/x/vote/',{type:'POST',dataType:'json',data:{post_id:post_id,vote_type:vote_type},success:function(data){var data=eval(data)
if(data['status']!='success'){pop_over(elem,data['msg'],'alert-warning')}else if(data['status']=='success'){if(vote_type=="bookmark"){toggle_button_bookmark(elem)
return}
if(post_type==6)
return}}});}
function title_format(row){if(row.loading)return "搜索中...";var link='<a href="'+row.url+'"/>'+row.text+'<div class="in">'+row.context+' by <i>'+row.author+'</i></div></a>';return link}
function click_view_comment(_this,page,cid){console.log("click_view_comment")
var cmt_elem=_this
var post_id=_this.attr('data-value')
var type=parseInt(_this.attr('type'))
var count=parseInt(_this.attr('count'))
if(type==6){if(USER_ID){add_comment(cmt_elem,type)}else{add_comment_anon(cmt_elem,type)}}else{$('#comment_area_'+post_id).parent().show()
if($('#comment_area_'+post_id).find(".comment-load-status").length>0)
return
$("#comment_area_"+post_id).empty()
$("#comment_area_"+post_id).siblings('#comment-box').remove()
$("#comment_area_"+post_id).append('<div class="comment-load-status btn-gray"><div style="width:100%;height:100%;margin-left: 47%;" class="lds-ripple"><div></div><div></div></div></div>')
load_and_show_comments(post_id,page,$('#C'+post_id),cid)}}
function add_actions(){load_post_peek_img();set_img_timeout();removeHeight0();if(USER_ID){$('.comment .view-comment').each(function(){$(this).unbind('click').click(function(){add_comment($(this),6);});});$('.mod-post').each(function(){$($(this)).unbind('click')
$(this).click(function(){moderate_post($(this));});});$('.mod-user').each(function(){$($(this)).unbind('click')
$(this).click(function(){moderate_user($(this));});});}else{$('.comment .view-comment').each(function(){$(this).unbind('click').click(function(){add_comment_anon($(this),6);});});}
$('.comment_area_wrap .page-item .page-link-c').each(function(){$(this).unbind('click').click(function(e){e.preventDefault()
if($(this).closest(".page-item").hasClass("disabled"))
return
var wrapelem=$(this).closest('.comment_area_wrap')
var post_id=wrapelem.attr('data-pid')
var page=$(this).attr('data-page')
$("#comment_area_"+post_id).css('opacity','0.5')
$(window).scrollTop(wrapelem.offset().top-100);load_and_show_comments(post_id,page,$('#C'+post_id),0)});});$(".post-idea-img img").on('click',function(){console.log($(this).css("max-width"))
$(this).css("max-width","100%");});$('.vote').each(function(){$(this).unbind('click').click(function(){var elem=$(this);var post_type=elem.attr('data-post-type')
var post_id=elem.attr('data-post_id');var vote_type=elem.attr('data-type')
if(!USER_ID){pop_over(elem,"您需要先登录",'alert-warning')
return}
ajax_vote(elem,post_type,post_id,vote_type);});});$('.post-detail-loadmore').each(function(){$(this).unbind('click').click(function(){var elem=$(this);var page=elem.attr('data');var inverse=elem.attr('inverse');var post_id=elem.attr('data-post-id')
POST_DETAIL_HIDE=0
elem.html('<span><div style="width:100%;height:100%;margin-left: 48%;" class="lds-ripple"><div></div><div>  加载中</span>')
ajax_load_more_answer(elem,post_id,inverse,page);});});$('.post-list-loadmore').each(function(){$(this).on("click",function(){var elem=$(this);var page=elem.attr('data');var parastr=elem.attr('parastr');var tag=elem.attr('tag');elem.html('<span><div style="width:100%;height:100%;margin-left: 48%;" class="lds-ripple"><div></div><div>  加载中</span>')
ajax_load_more_question(elem,page,parastr,tag);});});$(".tab-main-btn").unbind('click').on('click',function(){$("#post-list").empty();$(".post-list-loadmore").remove();$(".tab-main-btn").css('background','none');$(this).css('background','#eee');$("#post-list").html('<div class="loading-masker">\
          <div class="white-widget grey-bg author-area">\
            <div class="auth-info row">\
              <div class="timeline-wrapper">\
                <div class="timeline-item">\
                  <div class="animated-background">\
                    <div class="background-masker header-top"></div>\
                    <div class="background-masker header-left"></div>\
                    <div class="background-masker header-right"></div>\
                    <div class="background-masker header-bottom"></div>\
                    <div class="background-masker subheader-left"></div>\
                    <div class="background-masker subheader-right"></div>\
                    <div class="background-masker subheader-bottom"></div>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>')
var url="/tab_lastanswered/";var current='ans'
if($(this).hasClass("tab-justanswered")){url="/tab_lastanswered/";current='ans';}
else if($(this).hasClass("tab-feed")){url="/tab_feed/";current='feed';}
else if($(this).hasClass("tab-dailypop")){url="/tab_dailypop/";current='daily';}
else if($(this).hasClass("tab-monthlypop")){url="/tab_monthlypop/";current='monthly';}
else if($(this).hasClass("tab-column")){url="/tab_column/";current='column';}
$.ajax(url,{type:'GET',data:{},success:function(data){$("#post-list").html(data);$("#post-list .post-body-wrap").last().after('<div class="btn btn-cancel btn-action tab-list-loadmore" data="2" tag="Latest" parastr="" type="'+current+'">更多</div>')
add_actions();add_maxlen_mask();}});});$(".tab-list-loadmore").unbind('click').on('click',function(){var page=$(this).attr('data');var current=$(this).attr('type');var url="/tab_lastanswered/?page="+page;if(current=="ans")
url="/tab_lastanswered/?page="+page;else if(current=="feed")
url="/tab_feed/?page="+page;else if(current=="daily")
url="/tab_dailypop/?page="+page;else if(current=="monthly")
url="/tab_monthlypop/?page="+page;else if(current=="column")
url="/tab_column/?page="+page;$(this).html('<span><div style="width:100%;height:100%;margin-left: 48%;" class="lds-ripple"><div></div><div>  加载中</span>')
$.ajax(url,{type:'GET',data:{},success:function(data){page=parseInt(page)+1;$(".tab-list-loadmore").remove();$("#post-list .post-body-wrap").last().after(data);$("#post-list .post-body-wrap").last().after('<div class="btn btn-cancel btn-action tab-list-loadmore" data="'+parseInt(page)+'" tag="Latest" parastr="" type="'+current+'">更多</div>')
add_actions();add_maxlen_mask();}});});$(".post-blk-hide-wrap").each(function(){$(this).unbind('click').click(function(){var elem=$(this);var page=1;var post_id=elem.attr('data-post-id')
POST_DETAIL_HIDE=1
ajax_load_hidden_answer($(".post-blk-hide"),post_id,page);});});$('.post-action .view-comment').each(function(){console.log("view-comment")
if($(this).closest(".post-body-wrap").find('.comment_area_wrap').is(":visible"))
return
$(this).unbind('click').click(function(){var _this=$(this)
click_view_comment(_this,1,0)});})
var timer
popoverOptions={content:function(){return $(this).siblings("#group-post-actions").html();},trigger:'manual',animation:false,placement:'bottom'};$('.post-action-group').popover(popoverOptions).unbind("mouseenter").on("mouseenter",function(){$(".popover").hide()
var _this=this;$(this).popover("show");add_actions()
$(".popover").on("mouseleave",function(){$(_this).popover('hide');});}).on("mouseleave",function(){var _this=this;setTimeout(function(){if(!$(".popover:hover").length){$(_this).popover("hide");}},300);});g_type="votes"
g_appendelem=$(".popover .tab-content #vote")
function ajax_load_notifs(append_elem,type,page){if(type=="votes"){url="/local/votes/"}else if(type=="msgs"){url="/local/messages/"}
append_elem.html('<div class="loading"><img src="/static/img/loading.gif"></div>')
$.ajax(url,{type:'GET',data:{'page':page},success:function(data){append_elem.html(data)}});}
$(document).on('click','#navbar .msg-action-tab-a',function(e){e.preventDefault()
$(this).tab('show')
g_type=$(this).attr('data-type')
g_appendelem=$("#navbar .popover .tab-content #"+$(this).attr('aria-controls'))
ajax_load_notifs(g_appendelem,g_type,1)
var total_elem=$(this).closest(".nav-item").find('.nav_msg_action').find('.badge')
var total=total_elem.html()!=""?parseInt(total_elem.html()):0
if(g_type=="votes"){var vote_cnt=$(this).find('.badge').html()!=""?parseInt($(this).find('.badge').html()):0
$(this).find('.badge').html("").fadeOut()
total_elem.html((total-vote_cnt)<=0?"":(total-vote_cnt))}else if(g_type=="msgs"){var msg_cnt=$(this).find('.badge').html()!=""?parseInt($(this).find('.badge').html()):0
$(this).find('.badge').html("").fadeOut()
total_elem.html((total-msg_cnt)<=0?"":(total-msg_cnt))}})
$(document).on('click','.msg-action-tab-a-m',function(e){e.preventDefault()
$(this).tab('show')
g_type=$(this).attr('data-type')
g_appendelem=$(".nav-status-bar .popover .tab-content #"+$(this).attr('aria-controls'))
ajax_load_notifs(g_appendelem,g_type,1)
var total_elem=$(this).closest(".nav-item").find('.nav_msg_action').find('.badge')
var total=total_elem.html()!=""?parseInt(total_elem.html()):0
if(g_type=="votes"){var vote_cnt=$(this).find('.badge').html()!=""?parseInt($(this).find('.badge').html()):0
$(this).find('.badge').html("").fadeOut()
total_elem.html((total-vote_cnt)<=0?"":(total-vote_cnt))}else if(g_type=="msgs"){var msg_cnt=$(this).find('.badge').html()!=""?parseInt($(this).find('.badge').html()):0
$(this).find('.badge').html("").fadeOut()
total_elem.html((total-msg_cnt)<=0?"":(total-msg_cnt))}})
msg_popoverOptions={content:function(){return $(this).siblings("#group-msg-actions").html();},trigger:'manual',animation:false,placement:'bottom'};$('.nav_msg_action').popover(msg_popoverOptions).unbind("click").on("click",function(){var _this=$(this);if($(".popover").length>0){_this.popover("hide");return;}
$(".popover").hide()
var _this=$(this);_this.popover("show");ajax_load_notifs($("#navbar .popover .tab-content #vote"),"votes",1)
var vote_elem=_this.closest('.nav-item').find('.notif-vote').find('.badge')
var total=_this.find('.badge').html()==""?0:parseInt(_this.find('.badge').html())
if(total==0)return;var vote_cnt=vote_elem.html()==""?0:parseInt(vote_elem.html())
vote_elem.html("").fadeOut()
_this.find('.badge').html(total-vote_cnt)});msg_popoverOptions_m={content:function(){return $(this).siblings("#group-msg-actions-m").html();},trigger:'manual',animation:false,placement:'bottom'};$('.nav_msg_action-m').popover(msg_popoverOptions_m).unbind("click").on("click",function(){var _this=$(this);if($(".popover").length>0){_this.popover("hide");return;}
$(".popover").hide()
_this.popover("show");ajax_load_notifs($(".nav-status-bar .popover .tab-content #vote-m"),"votes",1)
var vote_elem=_this.closest('.nav-item').find('.notif-vote').find('.badge')
var total=_this.find('.badge').html()==""?0:parseInt(_this.find('.badge').html())
if(total==0)return;var vote_cnt=vote_elem.html()==""?0:parseInt(vote_elem.html())
vote_elem.html("").fadeOut()
_this.find('.badge').html(total-vote_cnt)});$('body').on('click',function(e){$('[data-toggle="popover"]').each(function(){if(!$(this).is(e.target)&&$(this).has(e.target).length===0&&$('.popover').has(e.target).length===0){$(this).popover('hide');}});});if(!detectmob()){u_popoverOptions={content:function(){return $(".ObjectCard").html();},trigger:'manual',animation:false,placement:'bottom',html:'true',delay:{show:1000}};var timer1
$('.post-detail-user-box, .post-user-name, \
        .cmt-cnt-body .comment a, .comment-thumbnail-a, \
         .notif-username, .watch-user-name a,  .vote-item-wrap .common-username,\
         .admin_item_author a, .cmt-author .common-username,\
         .invite-answer-item .user-image').popover(u_popoverOptions).unbind("mouseenter").on("mouseenter",function(){$(".popover").hide()
var _this=this;var uid=$(this).attr('uid')
timer1=setTimeout(function(){$(_this).popover('show')
$(".popover").find('.loading').show()
$.ajax('/api/user/'+uid+'/',{type:'GET',success:function(data){data=eval(data)
$(".popover").find('.loading').hide()
$(".popover").find('.ObjectCard-body').show()
$(".popover").find('.user-pop-name a').html(data['name'])
$(".popover").find('.user-pop-name a').attr('href','/u/'+data['name']+"/")
$(".popover").find('.user-pop-img a').attr('href','/u/'+data['name']+"/")
$(".popover").find('.user-pop-profile').html(data['profile'])
$(".popover").find('.profile_photo_img').attr('src',data['thumbnail']).attr('data-alt','/static/img/u-thumb-default.png').attr('onerror',"load_alt_img(event);")
$(".popover").find('.card_stat_val_q').html(data['question_count'])
$(".popover").find('.card_stat_val_a').html(data['answer_count'])
$(".popover").find('.card_stat_val_v').html(data['vote_count'])
$(".popover").find('.card_stat_val_w').html(data['getwatch_count'])
$(".popover").find('.card-user-watch').attr('uid',data['id'])
if(data['is_watch']==1){$(".popover").find('.card-user-watch').html('<i class="fa fa-check"></i> 已关注').show()}else if(data['is_watch']==2){$(".popover").find('.card-user-watch').hide()}else{$(".popover").find('.card-user-watch').html('<i class="fa fa-plus"></i> 关注').show()}
$(".popover").on("mouseleave",function(){$(_this).popover('hide');});}});},300);}).on("mouseleave",function(){clearTimeout(timer1)
var _this=this;setTimeout(function(){if(!$(".popover:hover").length){$(_this).popover("hide");}},500);});}
if(getCookie("dark")=="1"){setDark();}}
if(detectmob()){}
function add_wish_actions(){$('.post-action-pool .button-checkbox').each(function(){var $widget=$(this),$button=$widget.find('button'),$checkbox=$widget.find('input:checkbox'),color=$button.data('color'),settings={on:{icon:'glyphicon glyphicon-check'},off:{icon:'glyphicon glyphicon-unchecked'}};$button.unbind("click").bind('click',function(){var pid=$button.attr('pid')
var type=$button.attr('data-type')
$.ajax({type:"POST",url:"/p/wish/"+pid+"/?t="+type,success:function(data){var data=eval(data)
if(data['r']==1){$button.find(".pool-val").html(1+parseInt($button.find(".pool-val").html()))
$checkbox.prop('checked',true);$checkbox.triggerHandler('change');updateDisplay();}else if(data['r']==2){$button.find(".pool-val").html(parseInt($button.find(".pool-val").html())-1)
$checkbox.prop('checked',false);$checkbox.triggerHandler('change');updateDisplay();}else{}}});});$checkbox.on('change',function(){updateDisplay();});function updateDisplay(){var isChecked=$checkbox.is(':checked');$button.data('state',(isChecked)?"on":"off");$button.find('.state-icon').removeClass().addClass('state-icon '+settings[$button.data('state')].icon);if(isChecked){$button.removeClass('btn-default').addClass('btn-'+color+' active');}
else{$button.removeClass('btn-'+color+' active').addClass('btn-default');}}
function init(){updateDisplay();if($button.find('.state-icon').length==0){$button.prepend('<i class="state-icon '+settings[$button.data('state')].icon+'"></i> ');}}
init();});}
function add_maxlen_mask(){$('.post-text-wrap-detail .post-text-detail').each(function(){var slideHeight=0;var cntElem=$(this)
if(cntElem.closest(".post-list-content").attr("foldchecked")=="1"){return;}
if(USER_ID){if(detectmob())
slideHeight=500;else
slideHeight=800;}else{slideHeight=400;}
var boxElem=$(this).closest(".post-body-wrap")
var gradientElem=boxElem.find(".gradient")
var defHeight=$(this).outerHeight()+5;if(boxElem.attr("data-type")=="0")
slideHeight=200;var elements=cntElem.find('p img');for(var i=0;i<elements.length;i++){var current=$(elements[i]);if(current.attr('orig-height')&&current.attr('orig-width')){var imgHeight=parseInt(current.attr('orig-height'))*596/parseInt(current.attr('orig-width'));defHeight=defHeight+imgHeight;current.removeAttr('height');}}
if(defHeight<slideHeight+100){cntElem.css('height',"inherit");}
if(defHeight>=slideHeight){cntElem.closest(".post-list-content").attr("foldchecked","1")
cntElem.css('height',slideHeight+'px');gradientElem.show()
boxElem.find(".gradient").unbind('click').click(function(){cntElem.css('height','inherit');boxElem.find('.gradient').hide();boxElem.find('.post-text-foldup').show();addToExpandedElements($(this).closest(".post-list-content"));});boxElem.find(".post-text-foldup").unbind('click').click(function(){console.log($(this).scrollTop())
cntElem.css('height',(slideHeight)+'px');$(this).find('.read-more-text').html('阅读更多');cntElem.css('height',slideHeight+'px');gradientElem.show();boxElem.find('.post-text-foldup').hide();$(window).scrollTop($(this).closest('.post-content').offset().top);removeFromExpandedElements($(this).closest(".post-list-content"));});}});}
var expandedElements=[];function adjustFoldUpButtonPosition(context,dom){if(dom){adjustFoldUpButtonPosition_fn(dom);}else{for(var i=0;i<expandedElements.length;i++){adjustFoldUpButtonPosition_fn(expandedElements[i].element);}}}
function adjustFoldUpButtonPosition_fn(dom){var innerDiv=$(dom).find('.post-text-wrap');if(doesScreenBtmIntersectElement($(innerDiv))){$(dom).find('.post-text-foldup').addClass('post-text-foldup-fixed');$(dom).find('.post-list-text-foldup').addClass('post-list-text-foldup-fixed');}else{$(dom).find('.post-text-foldup').removeClass('post-text-foldup-fixed');$(dom).find('.post-list-text-foldup').removeClass('post-list-text-foldup-fixed');}}
function doesScreenBtmIntersectElement(dom){var viewport={};viewport.top=$(window).scrollTop();viewport.bottom=viewport.top+$(window).height();var bounds={};bounds.top=$(dom).offset().top;bounds.bottom=bounds.top+$(dom).outerHeight();return((bounds.top<=viewport.bottom)&&(bounds.bottom>=viewport.bottom));};function handleReadMoreButtonClick(){var windowTop=$(window).scrollTop()
if($(this).attr('has_full')=="0")
return
var seemore=$(this).find(".read-more-text-peek")
seemore.attr('offsetTop',seemore.offset().top)
seemore.attr('windowTop',windowTop)
var parentWrap=$(this).closest('.post-list-content');parentWrap.find('.post-list-text-foldup').show();parentWrap.find('.post-text').hide();parentWrap.find('.post-text-full').show();addToExpandedElements(parentWrap);}
function addToExpandedElements(parentWrap){var pid=parentWrap.find('.comment_area_wrap').attr('data-pid');expandedElements.push({id:pid,element:parentWrap[0]});adjustFoldUpButtonPosition(null,parentWrap[0]);$(window).off('scroll').on('scroll',adjustFoldUpButtonPosition);}
function handleFoldUpButtonClick(){var windowTop=$(window).scrollTop()
var unfoldelem=$(this).closest(".post-list-content").find(".read-more-text-peek")
var windowMove=parseInt($(window).scrollTop())-parseInt(unfoldelem.attr("windowTop"))
var unfold=unfoldelem.attr("offsetTop")
var fold=$(this).offset().top
var parentWrap=$(this).closest('.post-list-content');$(this).hide();parentWrap.find('.post-text').show();parentWrap.find('.post-text-full').hide();removeFromExpandedElements(parentWrap);if(unfold<windowTop){var newScroll=parseInt(windowTop)-parseInt(parseInt(fold)-parseInt(unfold))
$('html,body').scrollTop(newScroll)}}
function removeFromExpandedElements(parentWrap){var pid=parentWrap.find('.comment_area_wrap').attr('data-pid');var expandedElement={id:pid,element:parentWrap[0]};var eleIndex=expandedElements.indexOf(expandedElement);if(eleIndex!==-1){expandedElements.splice(expandedElement,1);}
if(expandedElements.length===0){$(window).off('scroll');}}
POST_DETAIL_HIDE=0
function ajax_load_more_answer(elem,post_id,inverse,page){elem.unbind("click")
$.ajax('/p/'+post_id+"/",{type:'GET',data:{'page':page,'i':inverse,'hide':POST_DETAIL_HIDE},success:function(data){elem.after(data);elem.remove();add_actions();add_maxlen_mask();}});}
function ajax_load_more_question(elem,page,parastr,tag){elem.unbind("click")
url='';if(tag.trim()==""){url='/?page='+page+"&p=0"+parastr;}else{url='/t/'+tag+'/?page='+page+"&p=0"+parastr;}
$.ajax(url,{type:'GET',data:{},success:function(data){elem.after(data);elem.remove();add_actions();add_maxlen_mask();}});}
function ajax_load_hidden_answer(elem,post_id,page){elem.find('.post-blk-hide-loading').html('<img src="/static/img/loading.gif">')
$.ajax('/p/'+post_id+'/',{type:'GET',data:{'page':page,'hide':POST_DETAIL_HIDE},success:function(data){$('.post-hide-insert-area').html(data)
elem.find('.post-blk-hide-loading').html('')
add_actions();add_maxlen_mask();}});}
function show_comments(elem,post_id){elem.html("收起评论")
click_view_comment(elem,1,0)
elem.unbind("click").click(function(){hide_comments(elem,post_id)})}
function hide_comments(elem,post_id){console.log("hide_comments "+post_id)
$('#comment_area_'+post_id).closest('.comment_area_wrap').hide()
elem.html(elem.attr("count")+" 条评论")
elem.unbind("click").click(function(){show_comments(elem,post_id)})}
function load_and_show_comments(post_id,page,cmt_elem,cid){$.ajax('/p/c/',{type:'GET',data:{'pid':post_id,'page':page},success:function(data){$("#comment_area_"+post_id).css('opacity','1')
if(data.status=='error'){return}else{$(".comment-load-status").remove()
$("#comment_area_"+post_id).empty()
$("#comment_area_"+post_id).siblings('#comment-row').fadeOut(1000).remove()
$("#comment_area_"+post_id).append(data)
$("#comment_area_"+post_id).find('a[name^='+cid+']').closest('.cmt_item_wrap').css('background','#f3f3f3');cmt_elem.html("收起评论")
if(USER_ID){add_comment(cmt_elem,1);}else{add_comment_anon(cmt_elem,1);}
add_actions()
cmt_elem.unbind('click').click(function(){hide_comments(cmt_elem,post_id)})
$('.vote').each(function(){$(this).unbind('click').click(function(){var elem=$(this);var post_type=elem.attr('data-post-type')
var post_id=elem.attr('data-post_id');var vote_type=elem.attr('data-type')
ajax_vote(elem,post_type,post_id,vote_type);});});}},error:function(){return}});}
function load_comments_hidden(event){var elem=$(event.target);var mainpost_id=elem.attr('data-mainpost');$.ajax('/p/c_h/',{type:'GET',data:{'pid':mainpost_id,'page':1},success:function(data){if(data.status=='error'){return}else{elem.nextAll().not("#pagination-wrap").remove()
$(".comment-load-status").remove();$("#comment_area_"+mainpost_id).append(data);add_actions()
$('.vote').each(function(){$(this).unbind('click').click(function(){var elem=$(this);var post_type=elem.attr('data-post-type')
var post_id=elem.attr('data-post_id');var vote_type=elem.attr('data-type')
ajax_vote(elem,post_type,post_id,vote_type);});});}},error:function(){return}});}
function report_post(event,post_id){var elem=$(event.target)
if(!USER_ID){pop_over(elem,"您需要先登录",'alert-warning')
return}
$("#small-popup .modal-title").text("请慎重举报，目前只支持如下举报类型")
$("#small-popup .modal-body").html("<div>\
          <input class='rpt-radio btn-action' type='radio' name='gender' value='0' checked='checked'> 信口雌黄，毫无依据<br>\
          <input class='rpt-radio btn-action' type='radio' name='gender' value='1'> 过度情绪化表达<br>\
          <input class='rpt-radio btn-action' type='radio' name='gender' value='2'> 广告恶意灌水等</div>")
$("#small-popup .modal-footer").html('<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>\
                                          <button type="button" class="btn btn-ok btn-primary ">确认</button>')
$("#small-popup").modal('show')
$("#small-popup .btn-primary").unbind('click').click(function(){var type=$("#small-popup .rpt-radio:checked").val()
$.ajax('/r/'+post_id+"/?t="+type,{type:'POST',dataType:'json',success:function(data){data=eval(data)
if(data['r']==1){$("#small-popup .modal-title").text("内容举报")
$("#small-popup .modal-body").html("举报成功。谢谢您的监督。 您可以在 <a target='_blank' href='/local/admin_all_p_r/'>举报处理区</a> 查看处理情况")
$("#small-popup .modal-footer").html('<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>')}else if(data['r']==0){$("#small-popup .modal-body").html("出错啦")}}});})}
function share_popup(url){copyTextToClipboard(window.location.hostname+url)
$("#small-popup-okonly .modal-title").text("内容分享");$("#small-popup-okonly .modal-body h4").text("链接已成功复制到剪切板!");$("#small-popup-okonly").modal('show');}
function execCopy(data,event){window.clipboardData.setData('text/plain',data);event.preventDefault();}
function del_post(event,post_id){elem=$(event.target)
elem.css("pointer-events","none");type=parseInt(elem.attr('p-type'))
frame_elem=elem.closest(".post-body-wrap")
$("#small-popup .modal-title").text("删除帖子")
$("#small-popup .modal-body h4").text("你确定要删除你的帖子吗")
$("#small-popup").modal('show')
$("#small-popup .btn-primary").unbind('click').click(function(){$("#small-popup").modal('hide')
$.ajax('/p/del/'+post_id+"/",{type:'POST',dataType:'json',success:function(data){elem.css("pointer-events","auto");data=eval(data)
if(data['r']==1){if(type==1||type==5){frame_elem.css("background-color","#eee")
frame_elem.fadeOut('slow',function(){frame_elem.remove()});}else if(type==6){frame_elem.css("background-color","#eee")
frame_elem.fadeOut('slow',function(){frame_elem.remove()});var countelem=$("#C"+frame_elem.attr('data-mainpost'))
countelem.attr('count',parseInt(countelem.attr('count'))-1)}else if(type==12){frame_elem=elem.closest(".feed_wrap");console.log(elem.html())
console.log(frame_elem.html())
frame_elem.css("background-color","#eee")
frame_elem.fadeOut('slow',function(){frame_elem.remove()});}}else if(data['r']==0){pop_over(elem,data['m'],"")}}});})}
function editor_word_count_and_show(elem){var num=elem.summernote('code').replace(/(<([^>]+)>)/ig,"").replace(/( )/," ").length;elem.parent().find(".note-hint").html("字数 "+num)}
var edit_wc=0;var html_regex=/<img src="[^>]* height="0"/g;function replaceHeightAttrInHtml(rawHtml){var result;var outputHtml=rawHtml;do{result=html_regex.exec(outputHtml);if(result){var replacedValue=result[0].replace('height="0"','apincimg="0"');outputHtml=outputHtml.replace(result[0],replacedValue);}}while(result);return outputHtml;}
function post_edit_show(event){elem=$(event.target)
wrap_elem=elem.closest(".post-body-wrap")
text_elem=elem.closest(".post-body-wrap").find(".post-text")
pid=elem.closest(".post-body-wrap").attr("data-mainpost")
$.ajax({url:"/api/post/"+pid+"/",dataType:'json',success:function(data){var data=eval(data);var modHtmlData=replaceHeightAttrInHtml(data['xhtml']);var title=wrap_elem.find(".post-title").find("span").html();if(text_elem.attr('post-list-type')=='list'||text_elem.attr('post-list-type')=='user'){text_elem.html(modHtmlData);}else if(text_elem.attr('post-list-type')=='detail'){text_elem.html(modHtmlData);text_elem.css('height','');text_elem.closest('.post-text-wrap').siblings('.gradient').hide()
if(wrap_elem.attr("data-type")=="5"||wrap_elem.attr("data-type")=="0"){wrap_elem.find(".post-title").find("span").html("<input class='post-title-ta' value='"+title+"' style='width:98%;margin-left:10px;'>");}}
if($(".post-text-full").length>0)
$(".post-text-full").css('display',"none");$(window).scrollTop(wrap_elem.offset().top);text_elem.summernote({height:300,lang:"zh-CN",dialogsInBody:true,toolbar:[['style',['style','bold','italic','underline','clear']],['font',['strikethrough','superscript','subscript']],['para',['ul','ol','paragraph']],['height',['height']],['insert',['link','picture','video','table','hr']],['misc',['codeview']],['view',['fullscreen']]],callbacks:{onInit:function(){wrap_elem.find(".note-editor").append('<div class="note-actions">\
                        <div class="note-hint btn-action"></div><input type="button"\
                        name="submit" value="发布" class="btn btn-ok pull-right" id="submit-id-submit"\
                        onclick="javascript:answer_submit_edit(event);"><input type="button" name="submit"\
                         value="存稿" class="btn btn-ok pull-right" id="draft-id-submit"\
                            onclick="javascript:answer_submit_edit_draft(event);"><a class="btn btn-cancel pull-right"\
                        onclick="javascript:post_edit_cancel(event);"><i class="icon-remove"></i>取消</a></div>')
editor_word_count_and_show(text_elem);initSavedTextArray($('.note-editing-area .note-editable'));},onKeyup:function(e){detectAtUser(e,$('.note-editing-area .note-editable'));editor_word_count_and_show(text_elem);var num=text_elem.summernote('code').replace(/(<([^>]+)>)/ig,"").replace(/( )/," ").length;if((num-edit_wc)>20||(edit_wc-num)>20){edit_wc=num
save_answer_draft(text_elem.closest(".post-body-wrap").find(".post-content").attr("data"),text_elem.summernote('code').trim(),0,text_elem.parent().find(".note-hint"),false)}},onChange:handleChange,onPaste:handlePaste}});}});}
var savedTextArray=[];var pendingATMarker='<span data-input-pending="true">@</span>';function initSavedTextArray(editor){savedTextArray=[];savedTextArray.push(editor.html());}
function handleChange(content){if(savedTextArray.length===1){savedTextArray.push(content);}else{if(savedTextArray[1]!==content){savedTextArray[0]=savedTextArray[1];savedTextArray[1]=content;}}}
function detectAtUser(e,editor){if(e.key==='@'){return;handleChange(editor.html());addMarkerInEditor(editor);display_at_dialog(editor);$("#at-popup #invite_user").autocomplete({source:"/local/user_autocomp/",minLength:1,select:function(event,ui){}});}}
function addMarkerInEditor(editor){var previousContent=savedTextArray[0];var currentContent=savedTextArray[1];var diffPos=findDiffPosInStrings(previousContent,currentContent);var newContent=currentContent.substring(0,diffPos)+pendingATMarker+currentContent.substring(diffPos+1);editor.html(newContent);}
function removeMarkerInEditor(editor){var currentContent=savedTextArray[1];var pos=currentContent.indexOf(pendingATMarker);var newContent=currentContent.substring(0,pos)+'@'+currentContent.substring(pos+pendingATMarker.length);editor.html(newContent);}
function updateMakerInEditor(atUser,editor){var currentContent=savedTextArray[1];console.log(currentContent)
var newMarker=' <span data-input="true" style="color:#4958a9e3;">@'+atUser+'</span>&nbsp;';var pos=currentContent.indexOf(pendingATMarker);var newContent=currentContent.substring(0,pos)+newMarker+currentContent.substring(pos+pendingATMarker.length);editor.html(newContent);}
function findDiffPosInStrings(str1,str2){var shorterLength=Math.min(str1.length,str2.length);for(var i=0;i<shorterLength;i++){if(str1[i]!==str2[i]){return i;}}
if(str1.length!==str2.length){return shorterLength;}
return-1;}
function display_at_dialog(editor){$("#at-popup #invite_user").val('');$("#at-popup").modal('show');$("#at-popup .btn-cancel").unbind('click').click(function(){removeMarkerInEditoreditor(editor);});$("#at-popup .btn-ok").unbind('click').click(function(){atUser=$("#at-popup #invite_user").val();if(atUser===''){removeMarkerInEditor(editor);}else{updateMakerInEditor(atUser,editor);}});}
function handlePaste(e){if(!detectmob()){e.preventDefault();bufferText=((e.originalEvent||e).clipboardData||window.clipboardData).getData('Text');bufferText=bufferText.replace('<div>','').replace('</div>','')
setTimeout(function(){document.execCommand('insertHTML',false,bufferText);},10);}}
function removeSizeAttrInHtml(text){var result=text.replace(/<h[1|2|3|5|6]>/g,'<p>');result=result.replace(/<\/h[1|2|3|5|6]>/g,'</p>');result=result.replace(/size="[0-9]+"/g,'');result=result.replace(/font-size:[0-9]+px;?/g,'');return result;}
function resetHeightAttrInHtml(rawHtml){return rawHtml.replace(/apincimg="0"/g,'height="0"');}
function answer_submit_edit_draft(event){event.preventDefault();smtelem=$(event.target)
frm=smtelem.closest('.post-body-wrap').find(".post-text")
hintelem=smtelem.closest('.post-body-wrap').find(".note-hint")
post_id=smtelem.closest(".post-content").attr('data');post_type=parseInt(smtelem.closest('.post-body-wrap').attr('data-type'));post_title=smtelem.closest('.post-body-wrap').find(".post-title").find("input").val();if(post_title==null)
post_title="0"
cnt=frm.summernote('code');wd_count=cnt.replace(/(<([^>]+)>)/ig,"").replace(/( )/," ").length;if(post_type==1||post_type==5||post_type==11){if(wd_count<50){hintelem.html("回答字数不能少于100字")
return 0}}else if(post_type==0){if(wd_count<10){hintelem.html("提问字数不能少于10字")
return 0}}else{hintelem.html("")
return 0}
smtelem.css("pointer-events","none");cnt=cnt.trim()
if(detectmob())
cnt=removeSizeAttrInHtml(cnt);cnt=resetHeightAttrInHtml(cnt);hintelem.html("保存中...")
$.ajax({type:"POST",url:"/p/edit/"+post_id+"/?d=1",data:{'title':post_title,'content':cnt,'mainpost_id':0},success:function(data){smtelem.css("pointer-events","auto");data=eval(data);if(data['r']==0){}else if(data['r']==1){hintelem.html("已保存为草稿，需要点击“发布”才能发表")}}});}
function answer_submit_edit(event){event.preventDefault();smtelem=$(event.target)
frm=smtelem.closest('.post-body-wrap').find(".post-text")
hintelem=smtelem.closest('.post-body-wrap').find(".note-hint")
post_id=smtelem.closest(".post-content").attr('data');post_title=smtelem.closest('.post-body-wrap').find(".post-title").find("input").val();post_type=parseInt(smtelem.closest('.post-body-wrap').attr('data-type'));if(post_title==null)
post_title="0"
cnt=frm.summernote('code');wd_count=cnt.replace(/(<([^>]+)>)/ig,"").replace(/( )/," ").length
if(post_type==1||post_type==5||post_type==11){if(wd_count<50){hintelem.html("回答字数不能少于50字")
return 0}}else if(post_type==0){if(wd_count<10){hintelem.html("提问字数不能少于10字")
return 0}}else if(post_type==12){if(wd_count<5||wd_count>200){hintelem.html("字数不能少于5字或大于200字")
return 0}}else{hintelem.html("")
return 0}
cnt=cnt.trim()
if(detectmob())
cnt=removeSizeAttrInHtml(cnt);cnt=resetHeightAttrInHtml(cnt);hintelem.html("保存中...")
$.ajax({type:"POST",url:"/p/edit/"+post_id+"/",data:{'title':post_title,'content':cnt,'mainpost_id':0},success:function(data){smtelem.css("pointer-events","auto");data=eval(data)
if(data['r']==0){hintelem.html(data['m'])}else if(data['r']==1){if(post_type==5||post_type==0)
smtelem.closest('.post-body-wrap').find(".post-title").find("span").html(post_title)
frm.summernote('destroy');var modData=replaceHeightAttrInHtml(data['p_h']);frm.html(modData);}}})}
function post_edit_cancel(event){elem=$(event.target)
edit_elem=elem.closest(".post-body-wrap").find(".note-editor")
text_elem=elem.closest(".post-body-wrap").find(".post-text ")
text_elem.summernote('destroy')}
var imap={};var pmap={};function load_post_peek_img(){$('.post-text-full').each(function(){var peekelem=$(this).closest('.post-text-wrap').find('.post-text-peek');if(peekelem.attr('img-append')==='1')
return;var img="";if($(this).find('img').length){var firstelem=$(this).find('img').first()
var src=firstelem.attr('src');var data_alt=firstelem.attr('data-alt');img="<div class='post-peek-img-wrap'><img src='"+src+"' data-alt='"+data_alt+"' onerror='load_alt_img(event);'></div>";}
peekelem.attr('img-append','1');peekelem.prepend(img);});$('.post-text-peek img').one("load",function(){console.log("loaded peek "+$(this).attr('src')+" at "+new Date().toLocaleString());clearTimeout(pmap[$(this).attr('data-alt')]);$(this).attr('tmo_proced','1');}).each(function(){var img=$(this);var url=$(this).attr('src');if(img.attr('tmo_proced')=="1")
{console.log("peek processed, skip");return;}
img.attr('tmo_proced','1');if(this.complete){$(this).load();return;}
$(this).attr('onerror',"load_alt_img(event);")
pmap[img.attr('data-alt')]=setTimeout(function(){console.log("after 10s, loading peek "+img.attr('src')+" at "+new Date().toLocaleString())
clearTimeout(pmap[$(this).attr('data-alt')]);},10000);});}
function set_img_timeout(){console.log("set_img_timeout")
$('.post-text-detail p img, .post-text-full p img').one("load",function(){clearTimeout(imap[$(this).attr('data-alt')]);$(this).attr('tmo_proced','1');}).each(function(){var img=$(this);var url=$(this).attr('src');if(img.attr('tmo_proced')=="1")
{console.log("processed, skip");return;}
img.attr('tmo_proced','1');if(this.complete){$(this).load();return;}
$(this).attr('onerror',"load_alt_img(event);")
imap[img.attr('data-alt')]=setTimeout(function(){console.log("after 10s, loading "+img.attr('data-alt')+" at "+new Date().toLocaleString())
clearTimeout(imap[img.attr('data-alt')]);},10000);});}
function loadMagnifyImage(){$('.post-text-detail p img, .post-text-full p img').hover(function(){if($(this).attr('orig-width')&&parseInt($(this).attr('orig-width'))>650){$(this).addClass('mouse-enter');$(this).unbind('click').click(function(){var actualWidth=parseInt($(this).attr('orig-width'));var actualHeight=parseInt($(this).attr('orig-height'));if(actualWidth>$(window).width()){actualHeight=actualHeight*$(window).width()/actualWidth;actualWidth=$(window).width();}
$('body').append('<div class="magnify-popup-container">'
+'<img class="magnify-popup" '
+'width="'+actualWidth+'"'
+'height="'+actualHeight+'"'
+'src="'+$(this).attr('src')+'"'
+'></div>');$('.magnify-popup, .magnify-popup-container').click(function(){$('.magnify-popup-container').remove();});$('.magnify-popup').focus();});}},function(){$(this).removeClass('mouse-enter');});}
function removeHeight0()
{$('.post-text-full img, .post-text-detail img, .post-text-detail-column img').each(function(){var current=$(this);if(current.attr('orig-height')&&current.attr('orig-width')){current.removeAttr('height');}});}
function loadNextAns(elem,next){$(document).off("scroll");elem=elem.closest('.post-body-wrap').find('.post-text-swipe')
elem.prepend('<div class="comment-load-status btn-gray"><span><img src="/static/img/loading.gif"></span></div>');var pid=elem.attr('data');$.ajax({url:"/pnext/"+pid+"/?n="+next,dataType:'json',success:function(data){elem.find('.comment-load-status').remove();var data=eval(data);if(data['r']=='1')
{if(data['id']=='0'){$("html, body").animate({scrollTop:elem.offset().top-170},'fast',function(){$(document).on("scroll",onScrollFunc);});return;}
elem.hide().empty();elem.fadeIn(800).show();elem.html(data['html'])
elem.attr("data",data['id'])
elem.closest(".post-body-wrap").attr("data-mainpost",data['id']);elem.closest(".post-body-wrap").find(".post-content").attr("data",data['id']);elem.closest(".post-body-wrap").find(".post-user-name").attr("uid",data['uid']);elem.closest(".post-body-wrap").find(".post-user-name a").attr("href","/u/"+data['uname']+"/");elem.closest(".post-body-wrap").find(".post-user-name a").html(data['uname']);elem.closest(".post-body-wrap").find(".post-user-intro").attr("title",data['info']);elem.closest(".post-body-wrap").find(".post-user-intro").html("| "+data['info']);elem.closest(".post-body-wrap").find(".post-detail-user-box a").attr("href","/u/"+data['uname']+"/");elem.closest(".post-body-wrap").find(".post-detail-user-box img").attr("src","/static/upload/thumb/"+data['thumbnail']);elem.closest(".post-body-wrap").find(".post-action").attr("data",data['id']);elem.closest(".post-body-wrap").find(".upvote").attr("data-post_id",data['id']);elem.closest(".post-body-wrap").find(".downvote").attr("data-post_id",data['id']);elem.closest(".post-body-wrap").find(".mainpost-count").html(data['vote_cnt']);elem.closest(".post-body-wrap").find("#comment-form").attr("action","/p/new/comment/"+data['id']+"/");elem.closest(".post-body-wrap").find(".comment-row").find(".form-group input").attr("mainpost_id",data['id']);elem.closest(".post-body-wrap").find(".mod-post").attr("data-value",data['id']);elem.closest(".post-body-wrap").find(".mod-post").attr("id","M"+data['id']);elem.closest(".post-body-wrap").find(".post-action-share a").attr("onclick","share_popup('/p/"+data['rootid']+"/?s="+data['id']+"');");elem.closest(".post-body-wrap").find(".post-action-report a").attr("onclick","report_post(event, "+data['id']+")");elem.closest(".post-body-wrap").find(".post-action-del").attr("onclick","del_post(event, "+data['id']+");");elem.closest(".post-body-wrap").find(".post-action-del").attr("data",data['id']);var view_comment=elem.closest(".post-body-wrap").find(".view-comment");view_comment.attr("data-value",data['id']);view_comment.attr("id","C"+data['id']);view_comment.attr("count",data['cmt_cnt']);view_comment.attr("countstr",data['cmt_cnt']+" 条评论");view_comment.html(data['cmt_cnt']+" 条评论");elem.closest(".post-body-wrap").find(".comment_area").html("")
elem.closest(".post-body-wrap").find(".comment_area_wrap").attr("data-pid",data['id']);elem.closest(".post-body-wrap").find(".comment_area").attr("id","comment_area_"+data['id']);elem.closest(".post-body-wrap").find("#comment-row").remove();if(data['uvote']=="1"){elem.closest(".post-body-wrap").find(".upvote").addClass("btn-black");elem.closest(".post-body-wrap").find(".upvote").removeClass("btn-action");}else{elem.closest(".post-body-wrap").find(".upvote").addClass("btn-action");elem.closest(".post-body-wrap").find(".upvote").removeClass("btn-black");}
if(data['dvote']=="1"){elem.closest(".post-body-wrap").find(".downvote").addClass("btn-black");elem.closest(".post-body-wrap").find(".downvote").removeClass("btn-action");}else{elem.closest(".post-body-wrap").find(".downvote").addClass("btn-action");elem.closest(".post-body-wrap").find(".downvote").removeClass("btn-black");}
hide_comments(view_comment,data['id']);removeHeight0();}
$("html, body").animate({scrollTop:elem.offset().top-170},'fast',function(){$(document).on("scroll",onScrollFunc);});}});}
function loadFeed(page){$.ajax({type:"GET",url:"/i/",data:{'page':page},success:function(data){var data=eval(data);$(".feed_loading").remove();$("#post-list").append(data['h']);add_actions();for(i=0;i<data['ups'].length;i++){$("#feed_wrap_"+data['ups'][i]).find(".upvote").removeClass("btn-action")
$("#feed_wrap_"+data['ups'][i]).find(".upvote").addClass("btn-black")}
for(i=0;i<data['downs'].length;i++){$("#feed_wrap_"+data['downs'][i]).find(".downvote").removeClass("btn-action")
$("#feed_wrap_"+data['downs'][i]).find(".downvote").addClass("btn-black")}
if(page==1&&parseInt(data['watches'])<20){$.ajax({type:"GET",url:"/local/popusers/",success:function(data){var data=eval(data);$("#post-list").after(data['h'])}});}
if(getCookie("dark")=="1"){setDark();}}});}
var xDown=null;var yDown=null;function handleTouchStart(evt){xDown=evt.originalEvent.touches[0].clientX;yDown=evt.originalEvent.touches[0].clientY;};function handleTouchMove(evt){var elem=$(evt.target);if(!xDown||!yDown){return;}
var xUp=evt.originalEvent.touches[0].clientX;var yUp=evt.originalEvent.touches[0].clientY;var xDiff=xDown-xUp;var yDiff=yDown-yUp;if(Math.abs(xDiff)>Math.abs(yDiff)){if(xDiff>0){loadNextAns(elem,1)}else{loadNextAns(elem,0)}}else{if(yDiff>0){}else{}}
xDown=null;yDown=null;};var iScrollPos;var isNavVisible;function onScrollFunc(){var iCurScrollPos=$(this).scrollTop();if(iCurScrollPos>iScrollPos+12){if(isNavVisible===true){$('.nav_bg').slideUp(300);$('.to-feed').hide();isNavVisible=false;}}else if(iCurScrollPos+12<iScrollPos){if(isNavVisible===false){$('.nav_bg').slideDown(100);$('.to-feed').show();isNavVisible=true;}}
iScrollPos=iCurScrollPos;}
$(document).ready(function(){if(getCookie("dark")=="1"){setDark();}
loadMagnifyImage();if(detectmob()===true){iScrollPos=$(document).scrollTop();isNavVisible=true;$(document).on("scroll",function(){onScrollFunc()});}
var hash1=window.location.hash.substr(1);var url_s=window.location.search
var url=window.location.href
if(hash1.trim().indexOf("cmt")==0){pid=url_s.slice(1).match(/s=(\d+).*/)[1];cid=url_s.slice(1).match(/c=(\d+).*/)[1];var _this=$(".post-body-wrap-"+pid).find(".view-comment");var page=parseInt($("#post-details").attr('cmt-page'));click_view_comment(_this,page,cid);}else if(hash1.trim().indexOf("!q_mt")==0){pid=url.slice(1).match(/p\/(\d+).*/)[1];var _this=$(".post-body-wrap-"+pid).find(".view-comment");click_view_comment(_this,1,0);}
add_actions();add_maxlen_mask();var tooltip_options={};var searchform=$("#searchform")
if(searchform.length>0){searchform.focus();searchform.select2({placeholder:"搜索...",minimumInputLength:2,closeOnSelect:false,selectOnClose:true,language:"zh",theme:"classic",ajax:{url:TITLE_SEARCH_URL,dataType:'json',data:function(params){return{q:params.term,page:params.page};},processResults:function(data,params){params.page=params.page||1;return{results:data.items,pagination:{more:(params.page*30)<data.total_count}};},cache:true},templateResult:title_format,dropdownCssClass:"bigdrop",escapeMarkup:function(m){return m;}})
searchform.on("click",function(e){var inner=e.target.innerHTML
var regexp=/<option value="(.*?)">/g;var match=regexp.exec(inner);window.location=match[1]})}
var tagval=$("#id_tag_val")
if(tagval.length>0){tagval.removeClass("textinput textInput form-control")
tagval.width("96%")
var tag_list=$.ajax({url:"/local/search/tags/",dataType:'json',success:function(response){tagval.select2({data:response,placeholder:'请选择话题类别',maximumSelectionLength:5});}});}
$('.tip').tooltip(tooltip_options)
$('.nav_person_area').mouseover(function(){$("#top-nav-profile-dropdown").show();}).mouseout(function(){$("#top-nav-profile-dropdown").hide();});$(document).on('click',".btn-post-edit",function(event){post_edit_show(event)
$(this).closest(".popover").siblings(".post-action-group").popover('hide');})
var newanswer_wc=0
$(".btn-post-answer").on('click',function(){pid=$(this).attr('data')
$.ajax({url:"/api/user_answered_question/"+pid+"/",dataType:'json',success:function(data){data=eval(data)
if(data['r']==1){try{$('#answer-wmd').summernote({height:300,lang:"zh-CN",dialogsInBody:true,toolbar:[['style',['style','bold','italic','underline','clear']],['font',['strikethrough','superscript','subscript']],['para',['ul','ol','paragraph']],['height',['height']],['insert',['link','picture','video','table','hr']],['misc',['codeview']],['view',['fullscreen']]],callbacks:{onInit:function(){$('#answer-wmd').closest("#answer-form").find(".note-editor").append('<div class="note-actions" data="0">\
                                        <div class="note-hint btn-action"></div><input type="button"\
                                        name="submit" value="发布回答" class="btn btn-ok pull-right" id="submit-id-submit"\
                                        onclick="javascript:answer_submit_form(event);"><input type="button" name="submit" value="存稿" \
                                        class="btn btn-ok pull-right" id="draft-id-submit"\
                                        onclick="javascript:answer_submit_form_draft(event);"></div>')
editor_word_count_and_show($('#answer-wmd'));initSavedTextArray($('.note-editing-area .note-editable'));},onKeyup:function(e){detectAtUser(e,$('.note-editing-area .note-editable'));editor_word_count_and_show($('#answer-wmd'));text_elem=$('#answer-wmd')
var num=text_elem.summernote('code').replace(/(<([^>]+)>)/ig,"").replace(/( )/," ").length;if(num<50)return;if((num-newanswer_wc)>20||(newanswer_wc-num)>20){newanswer_wc=num;save_answer_draft(pid,text_elem.summernote('code').trim(),0,text_elem.parent().find(".note-hint"),true);}},onChange:handleChange,onPaste:handlePaste}});}catch(err){}
$(".form-group").show()
$("html, body").animate({scrollTop:$(".answer-box-upper-border").offset().top},'fast');}else if(data['r']==2){$(".answer-box-onlyone").show()
$(".answer-box-onlyone .onlyone-edit").attr("pid",data['pid'])
$("html, body").animate({scrollTop:$(".answer-box-upper-border").offset().top},'fast');}
$(this).closest(".post-action-top").hide()}});});var only_edit_wc=0
$(".onlyone-edit").on('click',function(e){pid=$(this).attr('pid')
$.ajax({url:"/api/post/"+pid+"/",dataType:'json',success:function(data){data=eval(data)
var profile_html=data['author_prof'].substring(0,(data['author_prof'].length)>40?40:(data['author_prof'].length))
var ext_html=((data['author_prof'].length)>40)?"...":""
var dataHtml=replaceHeightAttrInHtml(data['xhtml']);var html='<div class="post-answer-wrap" itemscope="" itemtype="https://web.archive.org:443/web/20181027093833/http://schema.org/Answer">\
                <div class="post-body-wrap post-body Open clearfix" data-mainpost="'+data['id']+'" data-type="'+data['type_id']+'">\
                <div class="post vote-box visible-lg visible-md" ></div>\
                <div><div class="content post-content" data="'+data['id']+'"><div class="post-mod-head">\
                <span class="post-detail-user-box box text-center visible-sm visible-xs" style="float:left;margin: 0px 5px 5px 1px;width: 24px;" >\
                <a href=""><img src="'+data['author_thumbnail']+'"  data-alt="'+STATIC_IMG_URL+'/static/img/u-thumb-default.png" \
                onerror="load_alt_img(event);"></a></span>\
                <div class="post-user-wrapper">\
                <span class="post-user-name"><a class="aw-user-name" href="" data-id="">'+data['author']+'</a></span>\
                <span class="post-user-intro" title="">'+profile_html+ext_html+'</span>\
                </div>\
                <span class="post-detail-user-box col-xs-3 col-md-2 box pull-right text-center visible-lg visible-md">\
                <a href=""><img src="'+data['author_thumbnail']+'"  data-alt="'+STATIC_IMG_URL+'/static/img/u-thumb-default.png" \
                onerror="load_alt_img(event);"></a></span></div>\
                <span class="post-text post-text-onlyone" itemprop="text">'+dataHtml+'</span><div class="clearfix"><div class="post-action">\
                <a class="btn-post-edit btn-action post-action-group" style="cursor:pointer;margin-left: 0.5em;">\
                <i class="glyphicon glyphicon-pencil"></i>修改</a>\
                <a class="btn-action post-action-group" onclick="del_post(event, '+data['id']+');" data="'+data['id']+'" p-type="1" style="cursor:pointer;margin-left: 0.5em;" >\
                <i class="glyphicon glyphicon-trash"></i>删除</a></div></div></div></div></div>'
$(".answer-box-onlyone").hide();$(".btn-post-answer").hide();$("#post-details .post-edit-onlyone").html(html);$(".post-text-onlyone").summernote({height:300,lang:"zh-CN",dialogsInBody:true,toolbar:[['style',['style','bold','italic','underline','clear']],['font',['strikethrough','superscript','subscript']],['para',['ul','ol','paragraph']],['height',['height']],['insert',['link','picture','video','table','hr']],['misc',['codeview']],['view',['fullscreen']]],callbacks:{onInit:function(){$(".post-text-onlyone").closest(".post-answer-wrap").find(".note-editor").append('<div class="note-actions">\
                            <div class="note-hint btn-action"></div><input type="button" name="submit" value="发布" class="btn btn-ok pull-right" id="submit-id-submit"\
                            onclick="javascript:answer_submit_edit(event);"><input type="button" name="submit" value="存稿" class="btn btn-ok pull-right" id="draft-id-submit"\
                            onclick="javascript:answer_submit_edit_draft(event);"><a class="btn btn-cancel pull-right" onclick="javascript:post_edit_cancel(event);">\
                            <i class="icon-remove"></i>取消</a></div>');editor_word_count_and_show($(".post-text-onlyone"));initSavedTextArray($('.note-editing-area .note-editable'));},onKeyup:function(e){detectAtUser(e,$('.note-editing-area .note-editable'));editor_word_count_and_show($(".post-text-onlyone"))
text_elem=$(".post-text-onlyone")
var num=text_elem.summernote('code').replace(/(<([^>]+)>)/ig,"").replace(/( )/," ").length;if((num-only_edit_wc)>20||(only_edit_wc-num)>20){only_edit_wc=num
save_answer_draft(pid,text_elem.summernote('code').trim(),0,text_elem.parent().find(".note-hint"),false)}},onChange:handleChange,onPaste:handlePaste}})}})});$('.to-top').click(function(){$(window).scrollTop(0);})
if($(document).find('.read-more-text-peek')){$(document).on('click','.post-text-peek',handleReadMoreButtonClick);$(document).on('click','.post-list-text-foldup',handleFoldUpButtonClick);}
$(document).on('click','.comment_area_wrap .wmd-input-2',function(){$(this).closest('#comment-form').find(".cmt-info-wrap").show();$(this).unbind('click');})
$(document).on("click",'.post-watch-dropdown li a ',function(e){var url=$(this).attr('url');var btnelem=$(this).closest('.btn-group').find('.dropdown-toggle')
$.ajax({type:"POST",url:url,success:function(data){var data=eval(data)
if(data['t']=='0'){btnelem.html("站内信关注 <span class='caret'></span>")
$(".notif-box").html("关注成功").slideDown().fadeOut(2000)}else if(data['t']=='1'){btnelem.html("邮箱关注 <span class='caret'></span>")
$(".notif-box").html("关注成功").slideDown().fadeOut(2000)}else{btnelem.html("未关注 <span class='caret'></span>")}}});});$(document).on("click",'.post-sorting-dropdown li a ',function(e){var url=$(this).attr('url');var btnelem=$(this).closest('.btn-group').find('.dropdown-toggle')
var text=$(this).html();$(".answers-wrap").empty();$(".answers-wrap").html('<span><div style="width:100%;height:100%;margin-left: 48%;" class="lds-ripple"><div></div><div>  加载中</span>')
$.ajax({type:"GET",url:url,success:function(data){btnelem.html(text);$(".answers-wrap").empty();$(".answers-wrap").html(data);add_actions();add_maxlen_mask();}});});$(document).on("click",'.card-user-watch',function(e){var elem=$(this)
if(!USER_ID){pop_over(elem,"您需要先登录",'alert-warning')
return}
var uid=$(this).attr('uid')
$.ajax({type:"POST",url:"/u/watch/"+uid+"/",success:function(data){var data=eval(data)
if(data['r']==1){elem.html('<i class="fa fa-check"></i> 已关注')}else if(data['r']==2){elem.html('<i class="fa fa-plus"></i> 关注')}else{}}});});$(document).on("click",'.block-user',function(e){var elem=$(this)
if(!USER_ID){pop_over(elem,"您需要先登录",'alert-warning')
return}
var uid=$(this).attr('uid')
$.ajax({type:"POST",url:"/u/block/"+uid+"/",success:function(data){var data=eval(data)
if(data['r']==1){$(".block-user-txt").html('已屏蔽')}else if(data['r']==2){$(".block-user-txt").html('屏蔽用户')}else{pop_over(elem,data['m'],'alert-warning')}}});});$(document).on('click','.tags-subscription',function(){elem=$(this)
if(!USER_ID){pop_over(elem.find(".zhidao-font"),'您需要先登录','alert-warning')
return}
var tag_id=elem.attr('data-id')
if(elem.hasClass('fa-plus')){$.ajax('/api/user_add_tag/add/'+tag_id+'/',{type:'POST',dataType:'json',success:function(data){data=eval(data)
if(data['r']==1){elem.removeClass('fa-plus')
elem.addClass('fa-check')
elem.css('box-shadow','inset 0 5px 15px rgba(0,0,0,.125)')
elem.find('.zhidao-font').html('已关注')}else{pop_over(elem.find(".zhidao-font"),data['m'],'alert-warning')}}});}else{$.ajax('/api/user_add_tag/del/'+tag_id+'/',{type:'POST',dataType:'json',success:function(data){data=eval(data)
if(data['r']==1){elem.removeClass('fa-check')
elem.addClass('fa-plus')
elem.css('box-shadow','')
elem.find('.zhidao-font').html('关注')}else{pop_over(elem.find(".zhidao-font"),data['m'],'alert-warning')}}});}});$(document).on('click','.answer-form-checkbox',function(){if($('.answer-form-checkbox .reg_cb').is(':checked')===true){$('.answer-form-overlay').hide();}else{$('.answer-form-overlay').show();}});function preSignUpHandler(){if($('.register-checkbox1 .reg_cb').is(':checked')===true&&$('.register-checkbox2 .reg_cb').is(':checked')===true&&$('.register-checkbox3 .reg_cb').is(':checked')===true&&$('.wmd-input-2').val()){$('.register-cntnu').removeAttr("disabled");}else{$('.register-cntnu').attr("disabled",true);}}
$(document).on('click','.register-checkbox1, .register-checkbox2, .register-checkbox3',preSignUpHandler);$(document).on('keyup','.wmd-input-2',preSignUpHandler);document.addEventListener('copy',function(event){event.stopPropagation();event.preventDefault();var cnt=getByteLen(window.getSelection().toString());var copyData=window.getSelection().toString();if(cnt>=500){copyData=window.getSelection().toString()+"资料来源: 品葱 "+window.location.href;}
(window.clipboardData||event.clipboardData).setData('Text',copyData);});if(!detectmob()){$('.folded-title h3').removeClass('post-pool-button');$('.unfolded-title h3').removeClass('post-pool-button');$(document).on('click','.unfolded-icon',function(){if($('.unfolded-icon i').hasClass('fa-expand')){$('.unfolded-pool').css('width','100%');$('.folded-pool').hide();$('.unfolded-icon i').removeClass('fa-expand');$('.unfolded-icon i').addClass('fa-compress');}else{$('.unfolded-pool').css('width','50%');$('.folded-pool').show();$('.unfolded-icon i').removeClass('fa-compress');$('.unfolded-icon i').addClass('fa-expand');}});$(document).on('click','.folded-icon',function(){if($('.folded-icon i').hasClass('fa-expand')){$('.folded-pool').css('width','100%');$('.unfolded-pool').hide();$('.folded-icon i').removeClass('fa-expand');$('.folded-icon i').addClass('fa-compress');}else{$('.folded-pool').css('width','50%');$('.unfolded-pool').show();$('.folded-icon i').removeClass('fa-compress');$('.folded-icon i').addClass('fa-expand');}});}else{$(document).on('click','.unfolded-title .post-pool-button',function(){$('.unfolded-pool .post-list').show();$('.folded-pool .post-list').hide();$(this).addClass('post-pool-button-hover');$('.folded-title .post-pool-button').removeClass('post-pool-button-hover');});$(document).on('click','.folded-title .post-pool-button',function(){console.log('.unfolded-pool .post-list hidden!!!');$('.folded-pool .post-list').show();$('.unfolded-pool .post-list').hide();$(this).addClass('post-pool-button-hover');$('.unfolded-title .post-pool-button').removeClass('post-pool-button-hover');});$('.folded-title .post-pool-button').click();}
window.addEventListener('keydown',function(e){if(e.shiftKey&&e.keyCode==90){setCookie("dark",1);setDark();}
if(e.shiftKey&&e.keyCode==88){setCookie("dark",0);}
if(e.shiftKey&&e.keyCode==39){if(brightness-0.05>0.05)cover(brightness-=0.05);}
if(e.shiftKey&&e.keyCode==37){if(brightness+0.05<0.95)cover(brightness+=0.05);}},false);$('.subs_submit').on('click',function(){var emailelem=$(this).closest(".subs_wrap").find("#sub_email")
var email=emailelem.val().trim();if(email==""){emailelem.val("");emailelem.attr('placeholder',"邮箱不能为空");return;}
if(!validateEmail(email)){emailelem.val("");emailelem.attr('placeholder',"邮箱格式不正确");return;}
$.ajax({type:"POST",url:"/submitemail/",data:{'e':email},success:function(data){var data=eval(data)
if(data['r']=='0'){emailelem.val("");emailelem.attr('placeholder',data['m']);}else if(data['r']=='1'){emailelem.val("");emailelem.attr('placeholder',"提交成功！");}else{emailelem.val("");emailelem.attr('placeholder',"发生错误");}}});});function qpool_add_expand(){$(".qpool-cnt-m").slideDown();add_wish_actions();}
$("#btn-post-qpool-btm-m").on('click',function(){if($(this).attr('status')=="0"){$(".qpool-cnt-m").fadeIn(1000);add_wish_actions();$(this).attr('status',1);$(this).html('刚刚提问<i class="fa fa-sliders" style="width: 22px;"></i>');}else{$(".qpool-cnt-m").hide();$(this).attr('status',0);$(this).html('刚刚提问<i class="fa fa-th-large" style="width: 22px;"></i>');}});$(".side_qpool_more, .side_qpool_wrap").on('mouseenter',function(){$(".side_qpool_wrap").css("max-height","1600px");$(".side_qpool_more").html("<a href='/p/pool/' target='_new'>更多</a>");});var urlRegex=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;function get_idea_real_length(cnt){var urlTotalLength=0;var matchedUrl;var wordcnt=getByteLen(cnt);while((matchedUrl=urlRegex.exec(cnt))!==null){urlTotalLength+=matchedUrl[0].length;}
return wordcnt-urlTotalLength}
$(".moment_btn").on('click',function(){var cnt=$(".moment_input").val().trim();var is_global=0;if(get_idea_real_length(cnt)>400){$(".moment_hint").html("不可以超过200个汉字")
return;}else if(get_idea_real_length(cnt)<10){$(".moment_hint").html("不可以少于5个汉字")
return;}
var idea_pic=$("#image-preview-idea").attr("src");$(".moment_hint").html('<div style="width:100%;height:100%;height: 20px !important;width: 28px !important;" class="lds-ripple"><div></div><div></div></div>')
var video=$("#video-embed").val();if($("#feed_global_chb").is(':checked'))
is_global=1;$.ajax({type:"POST",url:"/p/new/idea/",data:{'content':cnt,'pic':idea_pic,'video':video,'global':is_global},success:function(data){var data=eval(data)
if(data['r']=='0'){$(".moment_hint").html(data['m'])}else if(data['r']=='1'){var newhtml='<div class="feed_wrap" data="'+data['id']+'" style="padding: 5px;border-top: 1px solid #ECECEC;">\
                        <div class="feed_footer_wrap" style="display:flow-root;">\
                            <div style="font-size: 12px;float: right;color: #999;padding-left: 10px;margin-bottom: -15px;">刚刚</div>\
                            <div class="act-del btn-action post-action-del" data-toggle="modal" \
                            style="font-size: 12px; cursor: pointer; float: right;margin-bottom: -15px;" \
                            onclick="del_post(event,'+data['id']+');"  data="'+data['id']+'" p-type="12" >\
                            <i class="glyphicon glyphicon-trash"></i>删除</div></div>'+data['p_h']+'</div>';$(newhtml).hide().insertAfter(".feed_top").slideDown()
add_actions();$(".moment_input").val("");$(".moment_input").css("height","");$("#image-preview-idea").attr("src","").hide();}else{$(".moment_hint").html("出错啦，请稍后再试")}
$(".moment_hint").html("140字以内")}});});$(".moment_input").on("keyup",function(){var wordcnt=get_idea_real_length($(".moment_input").val().trim())
$(".moment_hint").html(parseInt(wordcnt/2))}).click(function(){$(".moment_btn").show();$("#image-preview").show();});;$('.post-feed-loadmore').each(function(){$(this).on("mouseover",function(){var elem=$(this);var page=elem.attr('data');elem.html('<span><div style="width:100%;height:100%;margin-left: 48%;" class="lds-ripple"><div></div><div>  加载中</span>')
loadFeed(page);});});$(document).on('click',".pool-viewmore",function(){if($(this).html()=="查看"){$(this).closest(".title-box").find(".post-text-peek").show();$(this).html("收起")}else{$(this).closest(".title-box").find(".post-text-peek").hide();$(this).html("查看")}});add_wish_actions();$(".qpool-prev").on('click',function(){var _this=$(this);var page=parseInt(_this.closest(".qpool-page").attr("page"))-1;if(page<1)
return;_this.closest('.folded-pool').find(".post-list-cnt-t").css('opacity','0.5');$.ajax({url:"/p/poolt/?page="+page,success:function(data){_this.closest('.folded-pool').find(".post-list-cnt-t").html(data);_this.closest('.folded-pool').find(".post-list-cnt-t").css('opacity','1');_this.closest(".qpool-page").attr("page",page);add_wish_actions();if(getCookie("dark")=="1"){setDark();}}});});$(".qpool-next").on('click',function(){var _this=$(this);var page=parseInt(_this.closest(".qpool-page").attr("page"))+1;_this.closest('.folded-pool').find(".post-list-cnt-t").css('opacity','0.5');$.ajax({url:"/p/poolt/?page="+page,success:function(data){_this.closest('.folded-pool').find(".post-list-cnt-t").html(data);_this.closest('.folded-pool').find(".post-list-cnt-t").css('opacity','1');_this.closest(".qpool-page").attr("page",page);add_wish_actions();if(getCookie("dark")=="1"){setDark();}}});});$(".pques_change").on('click',function(){var _this=$(this);_this.find(".tags-loading").html('<img src="/static/img/loading1.gif">');_this.closest('.sidebar').find(".post-list-cnt-t").css('opacity','0.5');$.ajax({url:"/p/poolt/?shuffle="+1,success:function(data){_this.find(".tags-loading").html('');_this.closest('.sidebar').find(".post-list-cnt-t").html(data);_this.closest('.sidebar').find(".post-list-cnt-t").css('opacity','1');add_wish_actions();if(getCookie("dark")=="1"){setDark();}}});});function add_invite_actions(){$(".invite-button").each(function(){$(this).unbind('click').click(function(){var invitee=$(this).closest('.invite-answer-item').find('.user-image').attr('uid');var pid=$(this).attr('pid');var _this=$(this);$.ajax({type:'POST',url:"/local/inviteanswer/",data:{'invitee':invitee,'pid':pid},success:function(data){var data=eval(data);if(data['r']==0){alert(data['m'])}else if(data['r']==1){_this.find(".invite-button-iner").css('background','#dce1e8');_this.find(".invite-button-iner").html("已邀请");}else if(data['r']==2){_this.find(".invite-button-iner").css('background','none');_this.find(".invite-button-iner").html("邀请回答");}}});});});}
add_invite_actions();$("#invite_user").autocomplete({source:"/local/user_autocomp/",minLength:1,select:function(event,ui){var html='<div class="invite-answer-item"><div class="user-image" uid="'+ui.item.id+'">\
                    <span data-toggle="u-popover"  data-html="true" placement="bottom" uid="'+ui.item.id+'">\
                    <a href="/u/'+ui.item.value+'/"><img style="width: 50px;" src="'+ui.item.thumb+'" data-alt="/static/img/u-thumb-default.png" onerror="load_alt_img(event);"></a>\
                    </span></div><div class="user-head"><div class="user-name">'+ui.item.value+'</div>\
                    <div class="user-description"></div></div>\
                    <div class="invite-button" pid="'+$(".invite-button").attr('pid')+'">\
                    <button class="invite-button-iner" type="button">邀请回答</button></div></div>';$(".invite-all-wrap").prepend(html);add_invite_actions();}});$(".invite_box .fa-remove").on('click',function(){var _this=$(this);var pid=$(this).attr('data')
$.ajax({type:'POST',url:"/del_invite/",data:{'pid':pid},success:function(data){var data=eval(data);if(data['r']=='1'){_this.closest(".invite_box").hide(1000).remove();}}});});var defaultEncoding=0;var translateDelay=0;var cookieDomain="https://web.archive.org:443/web/20181027093833/https://www.pin-cong.com/";var msgToTraditionalChinese="简体";var msgToSimplifiedChinese="繁體";var translateButtonId="translateLink";translateInitilization();$('#translateLink').on('click',function(){translatePage();});var cate_timer;$(".category_item").unbind("mouseenter").on("mouseenter",function(e){if($(".cate-1").length||detectmob()){return;}
var _this=$(this);cate_timer=setTimeout(function(){var cate=_this.attr("data");$(".cates_list").hide();$(".cates_list-"+cate).css("display","block");},300);}).on("mouseleave",function(){clearTimeout(cate_timer)});$(document).mouseup(function(e)
{if($(".index-cate").length)
return;var container=$(".category_item");if(!container.is(e.target)&&container.has(e.target).length===0)
{$(".cates_list").hide();}});});