define(['dataService'],function(dataService){
    let name="tom";
    function showMsg(){
        alert(dataService.getMsg()+','+name)
    }
    return {showMsg}
})