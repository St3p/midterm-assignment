class  Quote{
    constructor() {
        this.item = [];
        this.price = [];
        this.url = [];
      }
    addItem() {
      var item = document.getElementById("item").value;
      var price = parseFloat(document.getElementById("price").value);
      var url = document.getElementById("url").value;
        this.item.push(item);
          this.price.push(price);
          this.url.push(url);
        this.add();
      }
      add(){
        var i, text;
        var len = this.item.length;
        text = "<table><tr><th colspan='4'> Bill with 15% VAT </th></tr>";
        text += "<tr><td> item </td>";
        text += "<td>price</td>";
        text += "<td>image</td>";
        text += "<td>delete Item</td></tr>";

        for (i=0; i < len; i++) {
          var item = this.item[i];
          var price = this.price[i];
          var url = this.url[i];
          var button = '<button type="button" onclick="quoteList.deleteItem('+ i +');">delete item</button>';
          text += "<tr><td>" + item + "</td>";
          text += "<td>" + "$" + price + "</td>";
          text += "<td>" + "<img src=" + url + " alt='alternatetext' style='width:100px;height:100px;'>" + "</td>";
          text += "<td>" + "$" + button + "</td></tr>";
        }
        var j;
        var sum = 0;
        var len2 =  this.price.length;
        for (j = 0; j < len2; j++) {
             price = this.price[j];
             sum += price;
        }
        var vat = (15 * sum) / 100;
        var total = sum + vat;
        text += "<tr><td>" + "Sub-total" + "</td>";
        text += "<td colspan='3'>" + "$" + sum + "</td></tr>";
        text += "<tr><td>" + "VAT" + "</td>";
        text += "<td colspan='3'>" + "$" + vat + "</td></tr>";
        text += "<tr><td>" + "Total" + "</td>";
        text += "<td colspan='3'>" + "$" + total + "</td></tr>";

        text += "</table>";
        console.log(text);
        document.getElementById("demo").innerHTML = text;
  }

    eraseAll() {
      var lenitem = this.item.length;
      var lenprice = this.price.length;
      var lenurl = this.url.length;
      this.item.splice(0, lenitem);
      this.price.splice(0, lenprice);
      this.url.splice(0, lenurl);
      console.log(this.item.length);
      this.add();
      }
    deleteItem(x) {
    this.item.splice(x, 1);
    this.price.splice(x, 1);
    this.url.splice(x, 1);
    console.log(x);
    this.add();
        }
}

var quoteList = new Quote();
