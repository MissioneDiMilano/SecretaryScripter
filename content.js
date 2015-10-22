function getMIDs(){
    concated = ""
    total_concats = 0;
    $('.viewable').find(".missionary-link").each(function(i,e){total_concats = i; m_id = e.attributes[1].textContent.toString().match(/\'missionaryId\':\'[0-9]+\'/).toString().match(/[0-9]+/); concated=concated+m_id+":"})
    console.log(concated);
    concated = concated.substring(0,concated.length-1);
    var node = document.createElement("input");
    node.id = "hidden_id_generator";
    document.body.appendChild(node);
    $("#hidden_id_generator").val(concated);
    document.querySelector("#hidden_id_generator").select();
    document.execCommand('copy');
    console.log(concated);
    $("#hidden_id_generator").remove();
    alert((total_concats++).toString()+" numbers copied to the clipboard (or go get it from the console if not).");
    return concated;
}

function getMIDsWithNameFilter(names){
    for (i = 0; i < names.length; i++){
        names[i] = names[i].trim();
    }
    concated = ""
    total_concats = 0;

    //tmpNames = "";


    $('.viewable').find(".missionary-link").each(function(i,e){
        
        // Check that the name is in the list. Otherwise don't do anything.
        if (names.indexOf(e.children[0].innerHTML) >= 0){
            total_concats++; 
            m_id = e.attributes[1].textContent.toString().match(/\'missionaryId\':\'[0-9]+\'/).toString().match(/[0-9]+/);
            concated=concated+m_id+":"
            //tmpNames = tmpNames + e.children[0].innerHTML + "   ";
        }  
    })
    //console.log(tmpNames);
    //console.log(concated);
    concated = concated.substring(0,concated.length-1);
    var node = document.createElement("input");
    node.id = "hidden_id_generator";
    document.body.appendChild(node);
    $("#hidden_id_generator").val(concated);
    document.querySelector("#hidden_id_generator").select();
    document.execCommand('copy');
    console.log(concated);
    $("#hidden_id_generator").remove();
    alert((total_concats++).toString()+" numbers copied to the clipboard (or go get it from the console if not).");
    return concated;
}

function showPics(){
    
    $('.viewable').find(".missionary-link").each(function(i,e){
        m_id = e.attributes[1].textContent.toString().match(/\'missionaryId\':\'[0-9]+\'/).toString().match(/[0-9]+/);
        m_w = window.open("https://imos.ldschurch.org/imos/imageResource?imageType=MISSIONARY_PROFILE&imageId="+m_id, "_blank");
        m_w.focus();
    })

}

function showPicsWithNameFilter(names){
    $('.viewable').find(".missionary-link").each(function(i,e){
        
        // Check that the name is in the list. Otherwise don't do anything.
        if (names.indexOf(e.children[0].innerHTML) >= 0){
           
            m_id = e.attributes[1].textContent.toString().match(/\'missionaryId\':\'[0-9]+\'/).toString().match(/[0-9]+/);
            m_w = window.open("https://imos.ldschurch.org/imos/imageResource?imageType=MISSIONARY_PROFILE&imageId="+m_id, "_blank");
            m_w.focus();
            //tmpNames = tmpNames + e.children[0].innerHTML + "   ";
        }  
    })
}

function showRecs(){
    
    $('.viewable').find(".missionary-link").each(function(i,e){
        m_id = e.attributes[1].textContent.toString().match(/\'missionaryId\':\'[0-9]+\'/).toString().match(/[0-9]+/);
        m_w = window.open("https://imos.ldschurch.org/imos/service/recommend/"+m_id, "_blank");
        m_w.focus();
    })

}

function showRecsWithNameFilter(names){
    $('.viewable').find(".missionary-link").each(function(i,e){
        
        // Check that the name is in the list. Otherwise don't do anything.
        if (names.indexOf(e.children[0].innerHTML) >= 0){
           
            m_id = e.attributes[1].textContent.toString().match(/\'missionaryId\':\'[0-9]+\'/).toString().match(/[0-9]+/);
            m_w = window.open("https://imos.ldschurch.org/imos/service/recommend/"+m_id, "_blank");
            m_w.focus();
            //tmpNames = tmpNames + e.children[0].innerHTML + "   ";
        }  
    })
}

function setListFormTargetBlankReturnDefault(){
    x = $("#listForm").attr("target");
    $("#listForm").attr("target","_blank");
    return x;
}

function setListFormTargetTo(value){
    $("#listForm").attr("target",value);
}

function showProfiles(){
    default_target = setListFormTargetBlankReturnDefault();
    
    // For some reason, when we submit the form too quickly, we don't get all of the profiles.
    // I think that it is because we are launching the code to open a new page from the form, 
    // Which includes creating and modifying some inputs, then submiting. So, I believe, we are
    // Launching one process to do that, then immediately another. So instead of getting the pattern
    // new_process, input-mod, submit, new_process, input_mod, submit, etc.
    // We get something like 
    // new_process, input_mod new_process, input_mod, submit, submit
    // So that the first doesn't get lanunched, and the double submit is ignored?
    // Anyway, by launching each "click" a second apart, you avoid this problem.
    var number_of_viewables = 0;
    $(".viewable").each(function(i,e){number_of_viewables++; setTimeout(function(){e.children[0].children[0].click();}, i*1000 )});
    
    // We have a similar problem here - if we don't wait to set this back, it's useless.
    setTimeout(function(){setListFormTargetTo(default_target)},number_of_viewables++*1000);
}

function showProfilesWithNameFilter(names){
    default_target = setListFormTargetBlankReturnDefault();
    
    $(".viewable").each(function(i,e){ 
       if (names.indexOf(e.children[0].innerHTML) >= 0){
               // For some reason, when we submit the form too quickly, we don't get all of the profiles.
               // I think that it is because we are launching the code to open a new page from the form, 
               // Which includes creating and modifying some inputs, then submiting. So, I believe, we are
               // Launching one process to do that, then immediately another. So instead of getting the pattern
               // new_process, input-mod, submit, new_process, input_mod, submit, etc.
               // We get something like 
               // new_process, input_mod new_process, input_mod, submit, submit
               // So that the first doesn't get lanunched, and the double submit is ignored?
               // Anyway, by launching each "click" a second apart, you avoid this problem.
                   var number_of_viewables = 0;
                    $(".viewable").each(function(i,e){number_of_viewables++; setTimeout(function(){e.children[0].children[0].click();}, i*1000 )});
    
                    // We have a similar problem here - if we don't wait to set this back, it's useless.
                    setTimeout(function(){setListFormTargetTo(default_target)},number_of_viewables++*100                
       } 
       
    });
    
    setListFormTargetTo(default_target);
}


/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender) {
    /* If the received message has the expected format... */
    msgText = msg.text.split("!?")[0];
    msgPayload = msg.text.split("!?").length > 1 ? msg.text.split("!?")[1] : undefined;
    if (msg.text && (msgText == "getMIDs")) {
        getMIDs();
    } else if (msg.text && (msgText == "getMIDsOps")) {
        if (msgPayload){
                names = msgPayload;
                names = names.replace(/\t/g,", ");
                names = names.split("\n");
                //alert(names);
                getMIDsWithNameFilter(names);
        }
    } else if (msg.text && msgText == "showPics"){
        showPics();
    } else if (msg.text && msgText == "showPicsOps"){
        if (msgPayload){
            names = msgPayload;
            names = names.replace(/\t/g,", ");
            names = names.split("\n");
            showPicsWithNameFilter(names);
            }
    } else if (msg.text && msgText == "showRecs"){
        showRecs();
    } else if (msg.text && msgText == "showRecsOps"){
        if (msgPayload){
            names = msgPayload;
            names = names.replace(/\t/g,", ");
            names = names.split("\n");
            showRecsWithNameFilter(names)
        }
    } else if (msg.text && msgText == "showProfs"){
        showProfiles();
    } else if (msg.text && msgText == "showProfsOps"){
        if (msgPayload){
            names = msgPayload;
            names = names.replace(/\t/g,", ");
            names = names.split("\n");
            showProfilesWithNameFilter(names)
        }
    }
});

// For checking on certain pages.

setTimeout(function(){
    if ($("#listForm").length > 0){ // if we have this, we are on the IMOS Missionary Roster page.
        document.title = document.title + "kcbListForm";
    }},1000);