
    function CreateTableFromJSON() {
        

        var Machines = [
            {
        "machine_name": "Auto Winding Machine",
        "machine_id": "Machine001",
        "current": "0",
        "voltage": "0",
        "power_factor": "0",
        "active_power": "0",
        "apparent_power": "0",
        "reactive_power": "0",
        "daily_energy": "0",
        "monthly_energy": "0",
        "yearly_energy": "0",
        "idle_daily": "0",
        "idle_monthly": "0",
        "idle_yearly": "0"
            },

         {
          
        "machine_name": "Boiler Machine",
        "machine_id": "Machine004",
        "current": "0",
        "voltage": "0",
        "power_factor": "0",
        "active_power": "0",
        "apparent_power": "0",
        "reactive_power": "0",
        "daily_energy": "0",
        "monthly_energy": "0",
        "yearly_energy": "0",
        "idle_daily": "0",
        "idle_monthly": "0",
        "idle_yearly": "0"
        }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        
        var col = [];
        for (var i = 0; i < Machines.length; i++) {
            for (var key in Machines[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");


        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < Machines.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = Machines[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
