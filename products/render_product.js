var val = cookie.get('cookie_key'); // 'baz
var obj = data.filter(e => val == e.isbn)

var render_product = `
    ${
    obj.map(e => (`
        <div class="row">
                <div class="col-2">
                    <img src="../${
                        e.image
                    }" width="100%">
                </div>
                <div class="col-3">
                    <p>Home / Available</p>
                    <h1>${
                       e.name
                    }</h1>
                    <h4>R${e.price}</h4>

                    <select>
                        <option>Select Delivery</option>
                        <option>Pick-up at APK</option>
                        <option>Pick-up at APB</option>
                        <option>Pick-up at SWC</option>
                        <option>Pick-up at DFC</option>
                        <option>Other</option>
                    </select>

                    <a href="../cart.html" class="btn">Order</a>
                    <h3>ISBN : <span style="font-size: 15px;"><small>${e.isbn}</small></span></h3>
                    <h3>Edition : <span style="font-size: 15px;"><small>${e.edition}</small></span></h3>
                    <h3>Product Details <i class="fa fa-indent"></i></h3>
                    <br>
                    <p>${e.details}</p>

                </div>
                </div>
        `))
}
`;
