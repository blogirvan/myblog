function showsbtext(id,index) {
var bookmarktext=document.getElementById(id);
var sbValues= new Array();
  sbValues[0] = 'Bookmark:';
  sbValues[1] = 'Add to <strong>Digg</strong>';
  sbValues[2] = 'Add to <strong>Delicious</strong>';
  sbValues[3] = 'Add to <strong>Blinklist</strong>';
  sbValues[4] = 'Add to <strong>Yahoo Web</strong>';
  sbValues[5] = 'Add to <strong>Netvouz</strong>';
  sbValues[6] = 'Add to <strong>Ma.gnolia</strong>';
  sbValues[7] = 'Add to <strong>Fark</strong>';
  sbValues[8] = 'Add to <strong>Furl</strong>';
  sbValues[9] = 'Add to <strong>Technorati</strong>';
  sbValues[10] = 'Add to <strong>Simpy</strong>';
  sbValues[11] = 'Add to <strong>Spurl</strong>';
  sbValues[12] = 'Add to <strong>Newsvine</strong>';
  sbValues[13] = 'Add to <strong>Blinkbits</strong>';
  sbValues[14] = 'Add to <strong>Smarkings</strong>';
  sbValues[15] = 'Add to <strong>Segnalo</strong>';
  sbValues[16] = 'Add to <strong>De.lirio.us</strong>';
  sbValues[17] = 'Add to <strong>Reddit</strong>';
  sbValues[18] = 'Add to <strong>Wists</strong>';
  sbValues[19] = 'Add to <strong>Google</strong>';
document.getElementById(bookmarktext.id).innerHTML = sbValues[index];
}


document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley(dummy)
{
  var d = [], i=0, def = ['post-body','entry-content','comment-body'];

  for(i=0;i<def.length;i++)
  {
	var content = document.getElementsByClassName(def[i]);
	for(var j=0;j<content.length;j++)
		d.push(content[j]);
  }

  for(i=0;i<arguments.length;i++)
  {
	var content = document.getElementsByClassName(arguments[i]);
	for(var m=0;m<content.length;m++)
		d.push(content[m]);
  }

  for(var i=0;i<d.length;i++)
  {

  d[i].innerHTML = d[i].innerHTML.replace (/\:thumbup/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-jRp4YwqD0xk/U7mJ-dxnYtI/AAAAAAAACPc/8UWS5AoQ6yM/s1600/jempol1.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:2thumbup/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-YNhxRaEDDW0/U7mJ_q30n6I/AAAAAAAACPk/E8wWLk8-TKs/s1600/jempol2.gif' height='40'/>") 
  d[i].innerHTML = d[i].innerHTML.replace (/\:iloveindonesia/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-hyxsNfLwRaE/U7mJ9s19qrI/AAAAAAAACPU/Iep0Xmum78k/s1600/i-love-indonesia.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:ilovekaskus/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-xDbvKwUWRuE/U7mKaRORE3I/AAAAAAAACRM/nC_UB_ehnKo/s1600/s_sm_ilovekaskus.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:kiss/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-Ye0FwKKfQvU/U7mJoy5hOBI/AAAAAAAACO0/r7NowTv305A/s1600/cewek.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:genit/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-exaIoUH1SvA/U7mKb7-_VDI/AAAAAAAACRU/HGao-DQ9zR0/s1600/s_sm_maho.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:marah/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-vJc7kEXrbkM/U7mKEloe-vI/AAAAAAAACP8/db2fMccUwR0/s1600/marah.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:berduka/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/--K8DFQxBGec/U7mJh3N7VkI/AAAAAAAACOU/c2cp3fP-dnM/s1600/berduka.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:najis/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-_WYbraTCeS0/U7mKKHcVI7I/AAAAAAAACQU/7kPXbNbrvPI/s1600/najis.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:malu/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-oo6AU4M9e4k/U7mKDb7W-PI/AAAAAAAACP0/Rxu61cVVEkE/s1600/malu.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:ngakak/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-7Djn7sdQMvk/U7mKOV1RwrI/AAAAAAAACQk/UBP19AMbXLY/s1600/ngakak.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:repost/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-k2qcAfmDJGU/U7mKeRsnbsI/AAAAAAAACRc/p2rOdpQNxqo/s1600/s_sm_repost1.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:sup2/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-E-GZfqlmOMg/U7mKs8aJFgI/AAAAAAAACSE/cwPwHV-t8AA/s1600/sundul.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:batabig/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-XtDi8Lj2lTI/U7mKXUch5lI/AAAAAAAACRE/w5IYxLDGQXc/s1600/s_big_batamerah.gif height='45'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:takut/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-B5cJC0ZuwNQ/U7mKw-dpBaI/AAAAAAAACSU/c1dRtjoHxKE/s1600/takut.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:ngacir/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-D-Evvcr23_8/U7mKNOH2g0I/AAAAAAAACQc/tvJgpfv859g/s1600/ngacir2.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:shakehand/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-WbzYf1faWLA/U7mKnIUjzkI/AAAAAAAACR0/k8V96czOiJ8/s1600/shakehand2.gif' height='40'/>") 
  d[i].innerHTML = d[i].innerHTML.replace (/\:bingung/ig,"<img style='border: 0; padding:0'  src='http://2.bp.blogspot.com/-IfjLhr8ENwU/U7mJi7Q_a5I/AAAAAAAACOc/6suS1be2KIU/s1600/bingung.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:cekpm/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-jesQB0eLofA/U7mJnTWb_2I/AAAAAAAACOs/2-do-a5TDd8/s1600/cekpm.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:capedeh/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-nVlAntaZs74/U7mJj3ApswI/AAAAAAAACOk/RYNVVbaPjt4/s1600/capede.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:hammer/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-6YdacSLFSIY/U7mJuymKmRI/AAAAAAAACPE/CX2LYUAh710/s1600/hammer.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:peluk/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-pdx5PRhnCFU/U7mKTcaIMGI/AAAAAAAACQ0/fkOn7ydEIjA/s1600/peluk.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:cendol/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-0o6Oda12V-k/U7mKzmPwghI/AAAAAAAACSc/QLrvBQHNDRI/s1600/toastcendol.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:hoax/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-Cv_U1PCe99k/U7mJwxy1i1I/AAAAAAAACPM/sA9plDTkUjQ/s1600/hoax.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:selamat/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-jlV2Fya3J7A/U7mKlOeWnNI/AAAAAAAACRs/6b59zLhCG1U/s1600/selamat.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:matabelo/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-EyqbuwW_lO4/U7mKHYPn9zI/AAAAAAAACQE/M08CUs_QhTU/s1600/matabelo1.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:mewek/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-4KTOL8qUck0/U7mKIkU8vnI/AAAAAAAACQM/uxS5RuXdrn4/s1600/mewek.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:request/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-whevX0zJ3WY/U7mKVk7Z80I/AAAAAAAACQ8/7ias4T6yXVM/s1600/request.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:sorry/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-I6Z604vUAvI/U7mKqZHVSXI/AAAAAAAACR8/ubSltw4sBWo/s1600/sorry.gif' height='45'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:salahkamar/ig,"<img style='border: 0; padding:0'  src='http://3.bp.blogspot.com/-AB-QYIp5Wu0/U7mKizlOIuI/AAAAAAAACRk/Anin25Sp9tI/s1600/salah_kamar.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:cool/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-_0Aav1HQryc/U7mJqA013AI/AAAAAAAACO8/_KMRQk508h0/s1600/cool2.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:sup/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-L5Kl9i4Xqwg/U7mKub_wG5I/AAAAAAAACSM/JOddoM2yQKY/s1600/sup.gif' height='45'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:kbgt/ig,"<img style='border: 0; padding:0'  src='http://1.bp.blogspot.com/-i8Y9m7kh9GA/U7mKCDQIFJI/AAAAAAAACPs/JBhDERaHpHE/s1600/kbgt.gif' height='40'/>")
  d[i].innerHTML = d[i].innerHTML.replace (/\:nohope/ig,"<img style='border: 0; padding:0'  src='http://4.bp.blogspot.com/-xB4Qa6gCZzc/U7mKP0-HbHI/AAAAAAAACQs/aaizuG1rua0/s1600/nohope.gif' height='40'/>")

    }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(function(){
	addSmiley();
});