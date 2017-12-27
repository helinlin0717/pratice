var aCity=new Array();
aCity[0]=new Array();
aCity[1]=new Array();
aCity[2]=new Array();
aCity[3]=new Array();
aCity[0][0]="--请选择--";
aCity[1][0]="--请选择--";
aCity[1][1]="广州市";
aCity[1][2]="深圳市";
aCity[1][3]="珠海市";
aCity[1][4]="汕头市";
aCity[1][5]="佛山市";
aCity[2][0]="--请选择--";
aCity[2][1]="长沙市";
aCity[2][2]="株洲市";
aCity[2][3]="湘潭市";
aCity[3][0]="--请选择--";
aCity[3][1]="杭州市";
aCity[3][2]="台州市";
aCity[3][3]="温州市";
aCity[3][4]="义乌市";
function  ChangeCity() {
    var i,iprovinceIndex;
    iprovinceIndex=document.frm.optProvince.selectedIndex;
    iCityCount=0;
    while (aCity[iprovinceIndex][iCityCount]!=null)
        iCityCount++;
    document.frm.optCity.length=iCityCount;
    for(var i=0;i<=iCityCount-1;i++)
        document.frm.optCity[i]=new Option(aCity[iprovinceIndex][i]);
    document.frm.optCity.onfocus();
}
