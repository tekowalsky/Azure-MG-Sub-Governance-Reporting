function toggleHierarchyTree() {
    var button = document.getElementById("hierarchyTreeShowHide");
    var target = document.getElementById("hierarchyTree");

    button.innerHTML = "Hide HierarchyMap";
    hide(target);

    function hide(target) {
        console.log("hiding");
        target.style.display = "none";
        console.log(target);
        button.innerHTML = "Show HierarchyMap";
        button.onclick = function() { show(target); };
    }

    function show(target) {
        target.style.display = "inherit";
        button.innerHTML = "Hide HierarchyMap";
        button.onclick = function() { hide(target); };
    }
}

function togglesummprnt() {
    var button = document.getElementById("summaryShowHide");
    var target = document.getElementById("summprnt");
    
    button.innerHTML = "Hide TenantSummary";
    hide(target);
    
    function hide(target) {
      console.log("hiding");
      target.style.display = "none";
      console.log(target);
      button.innerHTML = "Show TenantSummary";
      button.onclick = function() { show(target); };
    }
    
    function show(target) {
      target.style.display = "block";
      button.innerHTML = "Hide TenantSummary";
      button.onclick = function() { hide(target); };
    }
}

function toggledefinitioninsightsprnt() {
  var button = document.getElementById("definitionInsightsShowHide");
  var target = document.getElementById("definitioninsightsprnt");
  
  button.innerHTML = "Hide DefinitionInsights";
  hide(target);
  
  function hide(target) {
    console.log("hiding");
    target.style.display = "none";
    console.log(target);
    button.innerHTML = "Show DefinitionInsights";
    button.onclick = function() { show(target); };
  }
  
  function show(target) {
    target.style.display = "block";
    button.innerHTML = "Hide DefinitionInsights";
    button.onclick = function() { hide(target); };
  }
}

function togglehierprnt() {
  var button = document.getElementById("hierprntShowHide");
  var target = document.getElementById("hierprnt");
  var targetsummprnt = document.getElementById("summprnt");
  
  button.innerHTML = "Hide ScopeInsights";
  hide(target);
  
  function hide(target) {
    console.log("hiding");
    target.style.display = "none";
    //targetsummprnt.style.maxHeight ="100%";
    console.log(target);
    button.innerHTML = "Show ScopeInsights";
    button.onclick = function() { show(target); };
  }
  
  function show(target) {
    target.style.display = "block";
    //targetsummprnt.style.maxHeight ="25%";
    button.innerHTML = "Hide ScopeInsights";
    button.onclick = function() { hide(target); };
  }
}

function toggleextrainfo() {
  var button = document.getElementById("extraInfoShowHide");
  var target = document.getElementsByClassName("extraInfoContent");


  button.innerHTML = "Hide ScopeInfo";
  hide(target);

  function hide(target) {
      console.log("hiding");
      var i;
      for (i = 0; i < target.length; i++) {
        target[i].style.display = 'none';
      }
      //target.style.display = "none";
      console.log(target);
      button.innerHTML = "Show<br>ScopeInfo";
      button.onclick = function() { show(target); };
  }

  function show(target) {
      //target.style.display = "inherit";
      var i;
      for (i = 0; i < target.length; i++) {
        target[i].style.display = 'flex';
      }
      button.innerHTML = "Hide<br>ScopeInfo";
      button.onclick = function() { hide(target); };
  }
}

