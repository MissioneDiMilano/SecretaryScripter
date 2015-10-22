var getMissionaryIDsStringOptionsBoxOpen = false;
var showMissionaryPicsOptionsBoxOpen = false;
var showMissionaryRecsOptionsBoxOpen = false;
var showMissionaryProfilesOptionsBoxOpen = false;

document.addEventListener('DOMContentLoaded', function() {
  
  chrome.tabs.getSelected(null, function(tab){
    var url = tab.url;
    var title = tab.title;
    console.log(tab);
    if (url.search("missionary-list.jsf")>= 0 && title.search("kcbListForm")>=0){
    document.getElementById("missionary-list-page-options").style.display = "block";
  } else {
      // We don't have any scripts for this page... because we have no universal scripts yet.
    document.getElementById("no-page-options").style.display = "block";
  }
  })
  // Show available buttons:
  

  
///////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  // Get all Missionary IDs on page.
  var getMissionaryIDsStringButton = document.getElementById('getMissionaryIDsString');
  getMissionaryIDsStringButton.addEventListener('click', function(tab) {
     chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, { text: "getMIDs" }, function(stuff){console.log(stuff)});
     })
  }, false);
  
  // Toggle options for Missionary IDs with Options
  var getMissionaryIDsStringWithOptionsButton = document.getElementById("getMissionaryIDsStringWithOptions");
  getMissionaryIDsStringWithOptionsButton.addEventListener("click",function(){
    if (getMissionaryIDsStringOptionsBoxOpen){
      document.getElementById("getMissionaryIDsStringOptionsBox").style.display = "none";
      getMissionaryIDsStringOptionsBoxOpen = false;
    } else {
      document.getElementById("getMissionaryIDsStringOptionsBox").style.display = "block";
      getMissionaryIDsStringOptionsBoxOpen = true;
    }
  }, false);
  
  // Get all Missionary IDs with Options
  var submitGetMissionaryIDsStringWithOptionsButton = document.getElementById("submitGetMissionaryIDsStringWithOptions");
  submitGetMissionaryIDsStringWithOptionsButton.addEventListener('click', function(tab) {
    names = document.getElementById("getMissionaryIDsStringNamesInput").value;
     chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, { text: "getMIDsOps!?"+ names}, function(stuff){console.log(stuff)});
     })
  }, false);
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  // Show all Missionary Pics on page
  var showMissionaryPics = document.getElementById("showMissionaryPics");
  showMissionaryPics.addEventListener('click', function(tab) {
     chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, { text: "showPics" }, function(stuff){console.log(stuff)});
     })
  }, false);
  
  // Toggle options for Missionary Pics with Options
  var showMissionaryPicsWithOptions = document.getElementById("showMissionaryPicsWithOptions");
  showMissionaryPicsWithOptions.addEventListener("click",function(){
    if (showMissionaryPicsOptionsBoxOpen){
      document.getElementById("showMissionaryPicsOptionsBox").style.display = "none";
      showMissionaryPicsOptionsBoxOpen = false;
    } else {
      document.getElementById("showMissionaryPicsOptionsBox").style.display = "block";
      showMissionaryPicsOptionsBoxOpen = true;
    }
    
  }, false);
  
  // Show all Missionary Pics with Options
  var submitGetMissionaryIDsStringWithOptionsButton = document.getElementById("submitShowMissionaryPicsWithOptions");
  submitGetMissionaryIDsStringWithOptionsButton.addEventListener('click', function(tab) {
    names = document.getElementById("showMissionaryPicsNamesInput").value;
     chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, { text: "showPicsOps!?"+ names}, function(stuff){console.log(stuff)});
     })
  }, false);
  


///////////////////////////////////////////////////////////////////////////////////////////////////////

  // Show all Missionary Recs on page
  var showMissionaryRecommends = document.getElementById("showMissionaryRecommends");
  showMissionaryRecommends.addEventListener('click', function(tab) {
     chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, { text: "showRecs" }, function(stuff){console.log(stuff)});
     })
  }, false);
  
  // Toggle options for Missionary Recs with Options
  var showMissionaryRecommendsWithOptions = document.getElementById("showMissionaryRecommendsWithOptions");
  showMissionaryRecommendsWithOptions.addEventListener("click",function(){
    if (showMissionaryRecommendsOptionsBoxOpen){
      document.getElementById("showMissionaryRecommendsOptionsBox").style.display = "none";
      showMissionaryRecommendsOptionsBoxOpen = false;
    } else {
      document.getElementById("showMissionaryRecommendsOptionsBox").style.display = "block";
      showMissionaryRecommendsOptionsBoxOpen = true;
    }
    
  }, false);
  
  // Show all Missionary Recs with Options
  var submitShowMissionaryRecommendsWithOptionsButton = document.getElementById("submitShowMissionaryRecommendsWithOptions");
  submitShowMissionaryRecommendsWithOptionsButton.addEventListener('click', function(tab) {
    names = document.getElementById("showMissionaryRecommendsNamesInput").value;
     chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, { text: "showRecsOps!?"+ names}, function(stuff){console.log(stuff)});
     })
  }, false);
  
}, false);

///////////////////////////////////////////////////////////////////////////////////////////////////////

  // Show all Missionary Profiles on page
  var showMissionaryProfiles = document.getElementById("showMissionaryProfiles");
  showMissionaryProfiles.addEventListener('click', function(tab) {
     chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, { text: "showProfs" }, function(stuff){console.log(stuff)});
     })
  }, false);
  
  // Toggle options for Missionary Profiles with Options
  var showMissionaryProfilesWithOptions = document.getElementById("showMissionaryProfilesWithOptions");
  showMissionaryProfilesWithOptions.addEventListener("click",function(){
    if (showMissionaryProfilesOptionsBoxOpen){
      document.getElementById("showMissionaryProfilesOptionsBox").style.display = "none";
      showMissionaryProfilesOptionsBoxOpen = false;
    } else {
      document.getElementById("showMissionaryProfilesOptionsBox").style.display = "block";
      showMissionaryProfilesOptionsBoxOpen = true;
    }
    
  }, false);
  
  // Show all Missionary Profiles with Options
  var submitshowMissionaryProfilesWithOptionsButton = document.getElementById("submitshowMissionaryProfilesWithOptions");
  submitshowMissionaryProfilesWithOptionsButton.addEventListener('click', function(tab) {
    names = document.getElementById("showMissionaryProfilesNamesInput").value;
     chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.sendMessage(tab.id, { text: "showProfsOps!?"+ names}, function(stuff){console.log(stuff)});
     })
  }, false);
  
}, false);

