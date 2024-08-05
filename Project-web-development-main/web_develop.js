

if( typeof document !== "undefined"){
    console.log('document module exist')
}
else{
    console.log('document not exist')
}

var arr_customer=[];
var var_id=document.getElementById('txtid');
var var_name=document.getElementById('txtname');
var var_address=document.getElementById('txtaddress');
var var_mobileno=document.getElementById('txtmobileno');
var var_image=document.getElementById('txtimage');
var var_Table=document.getElementById('customer');
var heading=document.getElementById('headingtime');

function btnadd_click()
{
    
    let id=parseInt(var_id.value);
    let name=var_name.value;
    let address=var_address.value;
    let mobileno=parseInt(var_mobileno.value);
    
    //let image=var_image.value;
    var reader=new FileReader();
    reader.onload=function(){
        var image=reader.result;
        add_customer(id,name,address,mobileno,image);
    }
    //add_customer(id,name,address,mobileno);
    reader.readAsDataURL(var_image.files[0]);

    alert('Customer Added Successfully!!');
        
}

function add_customer(var_id,var_name,var_address,var_mobileno,var_image)
{
    let objcust={id:var_id,name:var_name,address:var_address,mobileno:var_mobileno,image:var_image};
    
    arr_customer.push(objcust);
    //alert('Image Added Successfully!');
    addCustomerInTable(objcust);
}

function addCustomerInTable(objcust)
{
    
    var varTableTr=document.createElement('tr');    
    varTableTr.setAttribute('id','tr_'+objcust.id.toString());

    var varTdRemove=document.createElement('td');
    var varBtnRemove=document.createElement('button');
    var varTextRemove=document.createTextNode('Remove');
    //varTextRemove.setAttribute('id',idd());
    varBtnRemove.appendChild(varTextRemove);
    varTdRemove.appendChild(varBtnRemove);
    varTableTr.appendChild(varTdRemove);

    var varTdId=document.createElement('td');
    var varTextId=document.createTextNode(objcust.id);
    varTdId.appendChild(varTextId);
    varTableTr.appendChild(varTdId);

    var varTdName=document.createElement('td');
    var varTextName=document.createTextNode(objcust.name);
    varTdName.appendChild(varTextName);
    varTableTr.appendChild(varTdName);

    var varTdAddress=document.createElement('td');
    var varTextAddress=document.createTextNode(objcust.address);
    varTdAddress.appendChild(varTextAddress);
    varTableTr.appendChild(varTdAddress);

    var varTdMobileNo=document.createElement('td');
    var varTextMobileNo=document.createTextNode(objcust.mobileno);
    varTdMobileNo.appendChild(varTextMobileNo);
    varTableTr.appendChild(varTdMobileNo);

    var varTdImage=document.createElement('td');
    var varTdImage_data_1=document.createElement('img');
    varTdImage_data_1.setAttribute('src',objcust.image);
    varTdImage_data_1.setAttribute('width','90px');
    varTdImage.appendChild(varTdImage_data_1);
    varTableTr.appendChild(varTdImage);

    var_Table.appendChild(varTableTr);
}

function btnSaveData_Click(){
    var cus_in_json_format = JSON.stringify(arr_customer);
    localStorage['myData'] = cus_in_json_format;
    alert('Data Saved in Local Storage!!');
}

function btnLoadData_Click(){
    var cus_in_json_format = localStorage['myData'];
    arr_customer = JSON.parse(cus_in_json_format);
    for(var cusobj of arr_customer){
        addCustomerInTable(cusobj);
    }
    //localStorage['myData'] = cus_in_json_format;
    alert('Data Loaded from Local Storage!!');    
}
setInterval(updateTime,1000);

function updateTime(){
    //heading.innerText.Date().tolo
}






function btnSearch_Click(){
    let id=parseInt(var_id.value);

   var objcust=searchCustomerById(id);
    if(objcust==undefined){
        alert('Id not Found');
    }
    else{

        var_name.value=objcust.name;
        var_address.value=objcust.address;
        var_mobileno.value=objcust.mobileNo;
        document.getElementById('tr_'+objcust.id.toString()).style.backgroundColor='blue';
    }
}

function searchCustomerById(id){
    var objCus=arr_customer.find((e)=>e.id==id);
    return objCus;
}


function btnDelete_Click(){
    let id=parseInt(var_id.value);
    var index= deleteCustomerById(id);
    if(index==-1){
        alert('Id not found');
    // removeCustomerRow(index);
    // alert('Customer Deleted Successfully');

   }
   else{
        //removeCustomerRow(index);
        alert('Customer Deleted Successfully');
   }
}

function deleteCustomerById(id){
    var index=arr_customer.findIndex((e)=>e.id==id);
    var cus_id=arr_customer[index].id;
    arr_customer.splice(index,1);
    removeCustomerRow(cus_id);
    return index;
}

function removeCustomerRow(index){
    //var objcust=arr_customer[index];
    // document.getElementById('tr_'+objcust.id.toString()).remove();
    document.getElementById('tr_'+index.toString()).remove(); 
    
}

function btn_remove_table_element(){    
    
    alert('Confirm your Entry! Enter Id');
    //var id = document.getElementById(varTextRemove.id);                               //from here
    //deleteCustomerById(id);
    
    
    //     var remove_id=document.getElementById();           

    //     var index=arr_customer.findIndex((e)=>e.id==id);
    //     remove_table_element(index);
     
}

function remove_table_element(index){
    document.getElementById('tr_'+index.toString()).remove();
    alert('Element removed Successfully!');
} 

function idd(){
    var idd_value = 0;
    ++idd_value ;
    return idd_value;
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const clock = document.getElementById('clock');
    clock.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  
    function pad(number) {
      return (number < 10 ? '0' : '') + number;
    }
  }
  
  setInterval(updateTime, 1000);
  
  updateTime();





