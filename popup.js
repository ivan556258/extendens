if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}
let ctrl = 0;
function User() {
    this.name = 0;
    this.isAdmin = false;

const dbName = "RL Parser";

var book = {
    id: 'js',
    price: 10,
    name: 777,
    created: new Date()
};

var request = indexedDB.open(dbName, 3);

request.onerror = function(event) {
    console.log("Eroor conneted IndexedDB");
  };
  request.onsuccess = function(event) {
    console.log("Success conneted IndexedDB");

    request.onupgradeneeded = function (event) {
        var db = event.target.result;
        // Create another object store called "names" with the autoIncrement flag set as true.
        var objStore = db.createObjectStore("names", { autoIncrement : false });
        objStore.add(book)

    };
};

function createBlock(type, textNameBlock, id, className) {
    let blockOld = document.querySelector('.block'); 
    if (type == 'text') {
        blockOld.insertAdjacentHTML(`afterbegin`, `<button id="create-campania" type="bottom">Создать кампанию</button>
        <div class="${className}">
            <span>${textNameBlock}</span>
            <input value="" type="text"/>
            <button id="${id}" type="button">Создать</button>
        </div>`);

        let checkPageButton = document.getElementById('create-campania');
        checkPageButton.addEventListener('click', function() {
           this.name = 1;
        }, false);


    return 1;
    }
    return 0;
}
setTimeout(createBlock, 0, 'text', 'textNameBlock', 'id', 'className');

function handler(event, ctrl) {
    //console.log(ctrl);
    event.preventDefault();
    // console.log(4);
    console.log(event);
    let element = event.target.tagName.toString().toLowerCase(),
        elSelector = generateQuerySelector(document.querySelector(element));
        //createBlock('text', 'textNameBlock', 'id', 'className');
        console.log(elSelector);
    ///return elArr;   
}

document.addEventListener("click", function(event){
    console.log(this.name);
    handler(event, createBlock('text', 'textNameBlock', 'id', 'className'));
});



var generateQuerySelector = function(el) {
    // document.addEventListener("click", handler);
    if (el.tagName.toLowerCase() == "html")
        return "HTML";
    var str = el.tagName;
    str += (el.id != "") ? "#" + el.id : "";
    if (el.className) {
        var classes = el.className.split(/\s/);
        for (var i = 0; i < classes.length; i++) {
            str += "." + classes[i]
        }
    }
    return generateQuerySelector(el.parentNode) + " > " + str;
}

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        //alert("Hello..! It's my first chrome extension.");
        
        ctrl = 1;
        //console.log(ctrl);
      });
    }, false);
}, false);

}
new User