var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomrate:325.00,
    roomNumbers:["101", "102", "103", "104", "105", "106", "107"],
    roomNumbersBooked:[],
    roomType: "Queen",
    roomsavailable: function(roomNumbers, roomNumbersBooked){
        return this.roomNumbers.length-this.roomNumbersBooked.length;
    },
    
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },
    
    numberOfRooms: function() {
        return this.roomNumber.length + this.roomNumbersBooked.length;
        },

    bookAroom: function(roomNumberReq) {
        if (this.roomsavailable()>0){
            for (let i=0; i<this.roomNumbers.length; i++){
                if (this.roomNumbers[i]==roomNumberReq){
                    this.roomNumbersBooked = this.roomNumbers.splice(i,1).concat(this.roomNumbersBooked);
                    console.log(this.roomNumbersBooked);
                    return;
                }
                else {
                    console.log("Not a valid Room #");
                }
                        
            }
        }
        else{
            console.log("No rooms Available");
        }
    },
    bookArandomroom: function(){
        if (this.roomsavailable()>0){
            var selectedroom = this.roomNumbers[Math.floor(Math.random()*this.roomNumbers.length)];
            for (let i=0; i<this.roomNumbers.length; i++){
                if (this.roomNumbers[i]==selectedroom){
                    this.roomNumbersBooked = this.roomNumbers.splice(i,1).concat(this.roomNumbersBooked);
                    console.log(this.roomNumbersBooked);
                    return;
                }
            }
        } else ("No Rooms Available");
    },
    bookArandomroomindex: function(){
        if (this.roomsavailable()>0){
            var selectedroom = this.roomNumbers[Math.floor(Math.random()*this.roomNumbers.length)];
            this.roomNumbersBooked = this.roomNumbers.splice(this.roomNumbers.indexOf(selectedroom),1).concat(this.roomNumbersBooked);
            console.log(this.roomNumbersBooked);
            return;
        }
    },
    checkoutofroom: function(){
        if (this.roomNumbersBooked.length>0){
            this.roomNumbersBooked.pop()
            console.log(this.roomNumbersBooked)
        } else {
            console.log("No Rooms Booked")
        }
    },
    refreshrooms: function(){
        var hotelroomsafvaa ="<form><select id='rmsAvailSelect'>";
        for (var i=0; i<hotel.roomNumbers.length;i++){
            //need to escape quotes on the following line, research escaping characters and quotes especially
            hotelroomsafvaa +="<option value=\'"+hotel.roomNumbers[i]+"\'>"+hotel.roomNumbers[i]+"</option>";
        }
        hotelroomsafvaa += "</select></form>";
        document.getElementById("rmsAvail").innerHTML = hotelroomsafvaa;
    },
    bookselectedroom: function(seat){
        for (let i=0;i<this.roomNumbers.length;i++){
            if (document.getElementById("rmsAvailSelect").value==this.roomNumbers[i]){
                this.roomNumbersBooked = this.roomNumbers.splice(i,1).concat(this.roomNumbersBooked);
                document.getElementById("rmsBooked").innerText =this.roomNumbersBooked;
                this.refreshrooms();
                this.bookArandomroom2();
            }
        }

    },
    bookArandomroom2: function(){
        var hotelroomsbkd ="<form><select id='rmBooked'>";
        for (var i=0; i<this.roomNumbersBooked.length;i++){
            //need to escape quotes on the following line, research escaping characters and quotes especially
            hotelroomsbkd +="<option value=\'"+this.roomNumbersBooked[i]+"\'>"+this.roomNumbersBooked[i]+"</option>";
        }
        hotelroomsbkd += "</select></form>";
        document.getElementById("rmsBooked").innerHTML = hotelroomsbkd;
    },
    deselectroom: function(){
        if (this.roomNumbersBooked.length<1){
            alert("There are no rooms in your cart!")
        }
        else{
            for (let i=0;i<this.roomNumbersBooked.length;i++){
                if(document.getElementById("rmBooked").value==this.roomNumbersBooked[i]){
                    this.roomNumbers=this.roomNumbersBooked.splice(i,1).concat(this.roomNumbers)
                    this.refreshrooms();
                    this.bookArandomroom2();
                }
            }
        }
    }
};

//add select room
//add display new page when room selected