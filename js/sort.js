

function sort(){

	var arr = localStorage.getItem("storeAllPeople");
	//console.log(localStorage.getItem("storeAllPeople"));
	var arr = JSON.parse(arr);
      // Before Sorting

    function SortByName(x,y) {
      return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
    }

    // Call Sort By Name
    arr.employees.sort(SortByName);
	
	var storePeopleA_E = '{"employees": [';
	var storePeopleF_J = '{"employees": [';
	var storePeopleK_O = '{"employees": [';
	var storePeopleP_T = '{"employees": [';
	var storePeopleU_Z = '{"employees": [';
	var storePeopleAE_UE = '{"employees": [';
	var member;
	
    for( var i = 0; i < arr.employees.length; i++ ) {	
		var name = arr.employees[i].name;
			member = arr.employees[i].member;
		var depict;
		if ( localStorage.getItem("" + name + "") != null){
			depict = localStorage.getItem("" + name + "");
		}	
		else{
			depict = "Images/noPic.jpg";
			}	
		
		//var room = bindings[i].roomnumber.value;
		
		var affiliation = arr.employees[i].affiliation;
		var room = arr.employees[i].room
		
		var staffMember = ',{"member": "' + member + '", "name": "' + name + '", "affiliation": "' + affiliation + '", "depict": "' + depict + '", "room": "' + room + '"}';
		if (name.substring(0,1)==="A" || name.substring(0,1)==="a" || name.substring(0,1)==="B" || name.substring(0,1)==="b" || 
			name.substring(0,1)==="C" || name.substring(0,1)==="c" || name.substring(0,1)==="D" || name.substring(0,1)==="d" ||
			name.substring(0,1)==="E" || name.substring(0,1)==="e"){
			storePeopleA_E = storePeopleA_E + staffMember;
			
		}
		else if (name.substring(0,1)==="F" || name.substring(0,1)==="f" || name.substring(0,1)==="G" || name.substring(0,1)==="g" || 
			name.substring(0,1)==="H"  || name.substring(0,1)==="h" || name.substring(0,1)==="I" || name.substring(0,1)==="i" ||
			name.substring(0,1)==="J" || name.substring(0,1)==="j"){
			storePeopleF_J = storePeopleF_J + staffMember;
		}
		else if (name.substring(0,1)==="K" || name.substring(0,1)==="k" || name.substring(0,1)==="L" || name.substring(0,1)==="l" || 
			name.substring(0,1)==="M" || name.substring(0,1)==="m" || name.substring(0,1)==="N" || name.substring(0,1)==="n" ||
			name.substring(0,1)==="O" || name.substring(0,1)==="o"){
			storePeopleK_O = storePeopleK_O + staffMember;
		}
		else if (name.substring(0,1)==="P" || name.substring(0,1)==="p" || name.substring(0,1)==="Q" || name.substring(0,1)==="q" || 
			name.substring(0,1)==="R" || name.substring(0,1)==="r" || name.substring(0,1)==="S" || name.substring(0,1)==="s" ||
			name.substring(0,1)==="T" || name.substring(0,1)==="t"){
			storePeopleP_T = storePeopleP_T + staffMember;
		}
		else if (name.substring(0,1)==="U" || name.substring(0,1)==="u" || name.substring(0,1)==="V" || name.substring(0,1)==="v" || 
			name.substring(0,1)==="W" || name.substring(0,1)==="w" || name.substring(0,1)==="X" || name.substring(0,1)==="x" ||
			name.substring(0,1)==="Y" || name.substring(0,1)==="y" || name.substring(0,1)==="Z" || name.substring(0,1)==="z"){
			storePeopleU_Z = storePeopleU_Z + staffMember;
		}	
		else if (name.substring(0,1)==="AE" || name.substring(0,1)==="ae" || name.substring(0,1)==="OE" || name.substring(0,1)==="oe" || 
			name.substring(0,1)==="UE" || name.substring(0,1)==="ue"){
			storePeopleU_Z = storePeopleU_Z + staffMember;
		}	
	}
	
			storePeopleA_E = storePeopleA_E + ']}';
			storePeopleF_J = storePeopleF_J + ']}';
			storePeopleK_O = storePeopleK_O + ']}';
			storePeopleP_T = storePeopleP_T + ']}';
			storePeopleU_Z = storePeopleU_Z + ']}';
			storePeopleAE_UE = storePeopleAE_UE + ']}';	
			storePeopleA_E = storePeopleA_E.replace(",","");
			storePeopleF_J = storePeopleF_J.replace(",","");
			storePeopleK_O = storePeopleK_O.replace(",","");
			storePeopleP_T = storePeopleP_T.replace(",","");
			storePeopleU_Z = storePeopleU_Z.replace(",","");
			storePeopleAE_UE = storePeopleAE_UE.replace(",","");		
			
			if (typeof(Storage) != "undefined"){
					localStorage["peopleA_E"] = storePeopleA_E;
					localStorage["peopleF_J"] = storePeopleF_J;
					localStorage["peopleK_O"] = storePeopleK_O;
					localStorage["peopleP_T"] = storePeopleP_T;
					localStorage["peopleU_Z"] = storePeopleU_Z;
					localStorage["peopleAE_UE"] = storePeopleAE_UE;		
			}
			else{
					document.getElementById("result").innerHTML="Sorry, your browser does not support Web Storage...";
			}
			

	var storeifgi = '{"employees": [';
	var storeifg = '{"employees": [';
	var storeloek = '{"employees": [';
	var storegeopal = '{"employees": [';
	var storeifdg = '{"employees": [';
	var storegeocomm = '{"employees": [';
	var storemisc = '{"employees": [';
	var member;
	
    for( var i = 0; i < arr.employees.length; i++ ) {	
		var name = arr.employees[i].name;
		var room = arr.employees[i].room;
			member = arr.employees[i].member;
		var depict; 
		if (arr.employees[i].depict===""){
			depict = "Images/noPic.jpg";
			}	
		else{
			depict = arr.employees[i].depict;
			
		}
		
		//var room = bindings[i].roomnumber.value;
		var affiliation = arr.employees[i].affiliation;
		var staffMember = ',{"member": "' + member + '", "name": "' + name + '", "affiliation": "' + affiliation + '", "depict": "' + depict + '", "room": "' + room + '"}';
		//console.log(staffMember);
		if (affiliation === "Institute for Geoinformatics"){
			storeifgi = storeifgi + staffMember;
		}
		else if (affiliation === "Institute for Geography"){
			storeifg = storeifg + staffMember;
		}
		else if (affiliation === "Institute for Landscape Ecology"){
			storeloek = storeloek + staffMember;
		}
		else if (affiliation === "Fossil botany"){
			storegeopal = storegeopal + staffMember;
		}
		else if (affiliation === "Institute for Didactics of Geography"){
			storeifdg = storeifdg + staffMember;
		}	
		else if (affiliation === "Geographic commission"){
			storegeocomm = storegeocomm + staffMember;
		}	
		else {
			storemisc = storemisc + staffMember;
		}	
	}
	
			storeifgi = storeifgi + ']}';
			storeifg = storeifg + ']}';
			storeloek = storeloek + ']}';
			storegeopal = storegeopal + ']}';
			storeifdg = storeifdg + ']}';
			storegeocomm = storegeocomm + ']}';
			storemisc = storemisc + ']}';	
			storeifgi = storeifgi.replace(",","");
			storeifg = storeifg.replace(",","");
			storeloek = storeloek.replace(",","");
			storegeopal = storegeopal.replace(",","");
			storeifdg = storeifdg.replace(",","");
			storegeocomm = storegeocomm.replace(",","");
			storemisc = storemisc.replace(",","");		
				
			if (typeof(Storage) != "undefined"){
					
					localStorage["storeifgi"] = storeifgi;
					localStorage["storeifg"] = storeifg;
					localStorage["storeloek"] = storeloek;
					localStorage["storegeopal"] = storegeopal;
					localStorage["storeifdg"] = storeifdg;
					localStorage["storegeocomm"] = storegeocomm;
					localStorage["storemisc"] = storemisc;		
			}
			else{
					document.getElementById("result").innerHTML="Sorry, your browser does not support Web Storage...";
			}
			
}



