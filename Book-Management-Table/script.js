function func() {
			var bookId = document.getElementById("rowNo").value;
			var x = document.getElementById("myTable").rows[bookId].innerHTML;
			document.getElementById("bookId").innerHTML = x;
		}
function sortAscTable() {
  		var table, rows, switching, i, col_Num, x, y, shouldSwitch;
  		table = document.getElementById("myTable");
  		switching = true;
  		
	  	while (switching) {
		    
		    switching = false;
		    rows = table.rows;
		    
		    for (i = 1; i < (rows.length - 1); i++) {
		      
		      shouldSwitch = false;
		      col_Num = document.getElementById("colNo").value;
		      x = rows[i].getElementsByTagName("TD")[col_Num-1];
		      y = rows[i + 1].getElementsByTagName("TD")[col_Num-1];
		      
		      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
		        
		        shouldSwitch = true;
		        break;
		      }
		    }
		    if (shouldSwitch) {
		      
		      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		      switching = true;
		    }
	  	}
	}

function sortDescTable() {
  		var table, rows, switching, i, col_Num, x, y, shouldSwitch;
  		table = document.getElementById("myTable");
  		switching = true;
  		
	  	while (switching) {
		    
		    switching = false;
		    rows = table.rows;
		    
		    for (i = 1; i < (rows.length - 1); i++) {
		      
		      shouldSwitch = false;
		      col_Num = document.getElementById("colNo").value;
		      x = rows[i].getElementsByTagName("TD")[col_Num-1];
		      y = rows[i + 1].getElementsByTagName("TD")[col_Num-1];
		      
		      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
		        
		        shouldSwitch = true;
		        break;
		      }
		    }
		    if (shouldSwitch) {
		      
		      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		      switching = true;
		    }
	  	}
	}