table={
gebi:function(i){ return  document.getElementById(i);},
page:{},
data:[
{nama:'satu',isi:'isi satu'},
{nama:'dua',isi:'isi dua'},
{nama:'tiga',isi:'isi tiga '},
],

view:function(id) {
this.gebi(id).innerHTML=this.table();
},


table:function(){
arr=this.data;
var al=arr.length;
var	col=arr[0];
out  = '';
out  = '<div class="table">';
out += '<div></div>';
out += '<table>';
out += '<thead><tr>';
outf  = '<tfoot><tr><td></td>';
for (key in col){
outf += '<td id="f'+ key +'"> </td>';
out  += '<th>'+ key +'</th>'; }
out += '</tr></thead>';

out += '<tbody>';
for (i in arr) {cols=arr[i];
out += '<tr>';
for (key in cols) { out += '<td>'+ cols[key] +'</td>'; }
out += '</tr>';
}
out += '</tbody>';
out += '</table>';
out += '<div></div>';
out += '</div>';
return out;
},

};
// table.view();
